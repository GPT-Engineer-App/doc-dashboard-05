import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import InspirationCard from "../components/InspirationCard";

const inspirationContent = [
  { title: "Reflection 1", content: "AMP Scripture Reflection for the day" },
  { title: "Reflection 2", content: "AMP Scripture Reflection for the day" },
  { title: "Reflection 3", content: "AMP Scripture Reflection for the day" },
  { title: "Reflection 4", content: "AMP Scripture Reflection for the day" },
  { title: "Reflection 5", content: "AMP Scripture Reflection for the day" },
  { title: "Reflection 6", content: "AMP Scripture Reflection for the day" },
  { title: "Reflection 7", content: "AMP Scripture Reflection for the day" },
  { title: "Reflection 8", content: "AMP Scripture Reflection for the day" },
];

function HomePage() {
  return (
    <Box p={5}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={5}>
        {inspirationContent.map((section, index) => (
          <InspirationCard key={index} title={section.title} content={section.content} />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default HomePage;
