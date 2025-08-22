import React from "react";
import { Box, Flex, Heading, Text, SimpleGrid, Tabs, TabList, TabPanels, Tab, TabPanel, Progress, Button, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn"); // clear login state
    navigate("/login"); // redirect to login page
  };

  const metrics = [
    { label: "Total Inquiries", value: 120 },
    { label: "New Inquiries", value: 20 },
    { label: "In Progress", value: 50 },
    { label: "Completed", value: 45 },
    { label: "Urgent", value: 5 },
  ];

  const serviceDistribution = [
    { label: "Visa Assistance", value: 40, color: "blue.400" },
    { label: "One-on-One Advice", value: 40, color: "green.400" },
    { label: "Passport Assistance", value: 20, color: "purple.400" },
  ];

  const blogPerformance = [
    { label: "Post 1", value: 80, color: "pink.400" },
    { label: "Post 2", value: 60, color: "orange.400" },
    { label: "Post 3", value: 90, color: "teal.400" },
  ];

  return (
    <Box p={6} pt={32} bg="gray.50" minH="100vh"> {/* pt={32} pushes content further down */}
      {/* Header with Logout */}
      <Flex mb={8} align="center">
        <Box>
          <Heading size="lg">A1 Opportunities Africa – Admin Dashboard</Heading>
          <Text mt={2} fontSize="md">Welcome back, Admin User!</Text>
          <Text color="gray.600">Here’s what’s happening with your travel consultancy today.</Text>
        </Box>
        <Spacer />
        <Button colorScheme="red" onClick={handleLogout}>
          Logout
        </Button>
      </Flex>

      {/* Metrics Cards */}
      <SimpleGrid columns={{ base: 1, md: 3, lg: 5 }} spacing={6} mb={8}>
        {metrics.map((metric) => (
          <Box
            key={metric.label}
            p={4}
            bg="white"
            borderRadius="md"
            shadow="sm"
            textAlign="center"
          >
            <Text fontSize="sm" color="gray.500">{metric.label}</Text>
            <Heading size="md">{metric.value}</Heading>
          </Box>
        ))}
      </SimpleGrid>

      {/* Tabs */}
      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList mb="1em">
          <Tab>Inquiries</Tab>
          <Tab>Blog Management</Tab>
          <Tab>Analytics</Tab>
          <Tab>Client Management</Tab>
          <Tab>Settings</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text>Here you can manage all inquiries.</Text>
          </TabPanel>

          <TabPanel>
            <Text>Here you can manage blog posts.</Text>
            <Box mt={4}>
              {blogPerformance.map((blog) => (
                <Box key={blog.label} mb={3}>
                  <Text mb={1}>{blog.label}</Text>
                  <Progress value={blog.value} colorScheme={blog.color.split('.')[0]} />
                </Box>
              ))}
            </Box>
          </TabPanel>

          <TabPanel>
            <Heading size="md" mb={4}>Service Distribution</Heading>
            {serviceDistribution.map((service) => (
              <Box key={service.label} mb={3}>
                <Text mb={1}>{service.label} - {service.value}%</Text>
                <Progress value={service.value} colorScheme={service.color.split('.')[0]} />
              </Box>
            ))}
          </TabPanel>

          <TabPanel>
            <Text>Manage clients here.</Text>
          </TabPanel>

          <TabPanel>
            <Text>Dashboard settings go here.</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default AdminDashboard;
