import { Box, Flex, Text, VStack, HStack, Heading, Button, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, useColorModeValue, FormControl, FormLabel, Input, Textarea, Divider } from "@chakra-ui/react";
import { FaUserFriends, FaPaintBrush, FaTshirt, FaPenFancy, FaChartLine } from "react-icons/fa";

const Index = () => {
  const cardBg = useColorModeValue("white", "gray.700");

  return (
    <Flex direction="column" p={8}>
      <VStack spacing={4} align="stretch" mb={8}>
        <Heading as="h1" size="xl">
          Dashboard
        </Heading>
        <Text>Welcome to your business management solution!</Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4} mb={8}>
        <StatCard icon={FaUserFriends} title="Clients" stat="1,024" />
        <StatCard icon={FaChartLine} title="Sales" stat="$89,400" />
        <StatCard icon={FaChartLine} title="Revenue" stat="$120,630" />
        <StatCard icon={FaChartLine} title="Projects" stat="76" />
      </SimpleGrid>

      <Heading as="h2" size="lg" mb={4}>
        Key Metrics
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mb={8}>
        <MetricCard title="Life Coaching" value="42 Sessions" />
        <MetricCard title="Graphic Design" value="15 Projects" />
        <MetricCard title="Branding" value="8 Campaigns" />
        <MetricCard title="Apparel Design" value="26 Designs" />
        <MetricCard title="Writer's Studio" value="13 Manuscripts" />
      </SimpleGrid>

      <Box bg={cardBg} borderRadius="lg" p={5} shadow="md">
        <Heading as="h3" size="md" mb={4}>
          Client Data Form
        </Heading>
        <VStack spacing={4}>
          <FormControl id="client-name">
            <FormLabel>Client Name</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="project">
            <FormLabel>Project</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl id="notes">
            <FormLabel>Notes</FormLabel>
            <Textarea />
          </FormControl>
          <Button colorScheme="blue">Submit</Button>
        </VStack>
      </Box>
    </Flex>
  );
};

const StatCard = ({ icon, title, stat }) => {
  const IconComponent = icon;
  return (
    <Stat p={4} borderRadius="lg" bg={useColorModeValue("white", "gray.700")} shadow="md">
      <Flex justifyContent="space-between">
        <Box>
          <StatLabel fontWeight="bold">{title}</StatLabel>
          <StatNumber fontSize="2xl">{stat}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Box>
        <Box>
          <IconComponent size="3em" />
        </Box>
      </Flex>
    </Stat>
  );
};

const MetricCard = ({ title, value }) => {
  return (
    <Box p={5} shadow="md" borderRadius="lg" bg={useColorModeValue("white", "gray.700")}>
      <VStack spacing={1} align="stretch">
        <Text fontWeight="bold" fontSize="lg">
          {title}
        </Text>
        <Text fontSize="xl">{value}</Text>
      </VStack>
    </Box>
  );
};

export default Index;
