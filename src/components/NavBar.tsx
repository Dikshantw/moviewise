import { Flex, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitch from "./ColorSwitch";
const NavBar = () => {
  return (
    <Flex align="center" justify="space-between" p="4">
      <Flex align="center">
        <Image src={logo} boxSize="50px"></Image>
        <Text ml="2">MovieWise</Text>
      </Flex>
      <ColorSwitch />
    </Flex>
  );
};

export default NavBar;
