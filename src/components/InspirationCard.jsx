import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

const InspirationCard = ({ title, content }) => {
  return (
    <Box bg="white" borderRadius="lg" shadow="2xl" p={5} m={2} _hover={{ bg: "gray.100" }} transition="background-color 0.3s">
      <VStack spacing={3}>
        <Text fontWeight="bold" fontSize="xl" color="brand.800">
          {title}
        </Text>
        <Text fontSize="md">{content}</Text>
      </VStack>
    </Box>
  );
};

export default InspirationCard;
