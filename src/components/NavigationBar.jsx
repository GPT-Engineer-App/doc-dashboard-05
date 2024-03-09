import React from "react";
import { Flex, Link, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.200" color="black">
      <Box>
        <Link as={RouterLink} to="/" padding="1rem">
          Home
        </Link>
        <Link as={RouterLink} to="/dashboard" padding="1rem">
          Dashboard
        </Link>
        <Link href="#" padding="1rem">
          CRM Solutions
        </Link>
      </Box>
    </Flex>
  );
};

export default NavigationBar;
