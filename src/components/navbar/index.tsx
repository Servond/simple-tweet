import { Box, Flex, HStack, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import NavbarMenu from "./components/navbarMenu";

const Navbar = () => {
  return (
    <Box
      sx={{
        top: 0,
        zIndex: 99,
        width: "100%",
        position: "fixed",
        backgroundColor: "#e8e8e8",
        boxShadow: "0px 4px 74px rgba(0, 0, 0, 0.05)",
      }}
    >
      <Flex
        sx={{
          justifyContent: "center",
        }}
      >
        <HStack
          sx={{
            width: "80%",
            justifyContent: "space-between",
            padding: "5px",
          }}
        >
          <Link to="/">
            <Heading as="h2" size="md">
              Tweet
            </Heading>
          </Link>
          <NavbarMenu />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
