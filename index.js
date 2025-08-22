const { google } = require("googleapis");
const mysql = require("mysql2");
const credentials = require("./credentials.json");
const express = require("express");
const cors = require("cors");

// Google Sheets API scope
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];

// Auth setup
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: SCOPES,
});

// Fetch data from Google Sheets
async function getSheetData() {
  const sheets = google.sheets({ version: "v4", auth: await auth.getClient() });

  const spreadsheetId = "1ydIEP5GkWt_9lSkp7Z_6d5a52zcot8jGGyd2RomisMg"; // Your sheet ID
  const range = "Form Responses 1!A1:K200"; // Extended range for new columns

  const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  return res.data.values;
}

// Connect to MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Your MySQL username
  password: "moses@123", // Your MySQL password
  database: "a1_opportunities",
});

// 🔹 Function to sync Sheets → MySQL
async function syncSheetsToDatabase() {
  const allRows = await getSheetData();

  if (!allRows || allRows.length < 2) {
    console.log("No data rows found. Please add responses in Google Sheets.");
    return;
  }

  const dataRows = allRows.slice(1); // Skip header row

  try {
    await db
      .promise()
      .query(`
      ALTER TABLE opportunities 
      MODIFY COLUMN UploadsForJobApplication TEXT,
      MODIFY COLUMN DocumentsUpload TEXT
    `);
    console.log("✅ Database columns updated to handle long text/URLs");
  } catch (alterError) {
    console.log("ℹ Column types already set. Continuing...");
  }

  for (let i = 0; i < dataRows.length; i++) {
    const row = dataRows[i];

    const dbData = [
      row[0] || null, // Timestamp
      row[1] || null, // FullName
      row[2] || null, // EmailAddress
      row[3] || null, // PhoneNumber
      row[4] || null, // Location
      row[5] || null, // ServiceType
      row[6] || null, // BriefDescriptionOfYourRequest
      row[7] || null, // JobApplication
      row[8] || null, // UploadsForJobApplication
      row[9] || null, // PreferredContactMethod
      row[10] || null, // DocumentsUpload
    ];

    try {
      await db
        .promise()
        .query(
          `
        INSERT INTO opportunities (
          Timestamp, FullName, EmailAddress, PhoneNumber, Location,
          ServiceType, BriefDescriptionOfYourRequest, JobApplication,
          UploadsForJobApplication, PreferredContactMethod, DocumentsUpload
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `,
          dbData
        );
      console.log(`✅ Successfully inserted row ${i + 1}`);
    } catch (err) {
      console.log(`❌ Failed to insert row ${i + 1}:`, err.message);
    }
  }
  console.log(`📦 Processed ${dataRows.length} responses. Check your database.`);
}

// 🔹 EXPRESS SERVER FOR FRONTEND
const app = express();
app.use(cors());
app.use(express.json());

// API: Get all opportunities
app.get("/api/opportunities", (req, res) => {
  db.query("SELECT * FROM opportunities", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// API: Get stats
app.get("/api/opportunities/stats", (req, res) => {
  const stats = {};
  db.query("SELECT COUNT(*) AS total FROM opportunities", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    stats.total = results[0].total;

    db.query(
      "SELECT COUNT(*) AS urgent FROM opportunities WHERE ServiceType='Urgent'",
      (err, results) => {
        stats.urgent = results[0].urgent;
        res.json(stats);
      }
    );
  });
});

// Run sync first, then start server
syncSheetsToDatabase().then(() => {
  app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
});
