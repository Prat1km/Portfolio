import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useMediaQuery,
  useDisclosure,
  HStack,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import ProfileArray from "./ProfileArray";
const TbIcons = require("react-icons/tb");

export default function Nav({ color }) {
  const profile = ProfileArray();
  const colors = {
    blue: "#3182CE",
    cyan: "#00B5D8",
    gray: "#718096",
    green: "#38A169",
    orange: "#DD6B20",
    pink: "#D53F8C",
    purple: "#805AD5",
    red: "#E53E3E",
    teal: "#319795",
    yellow: "#D69E2E",
  };
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  const TbLetterComponents = [];

  for (let i = 0; i < profile.logo.length; i++) {
    const letter = profile.logo[i];
    const component = TbIcons[`TbLetter${letter}`];
    TbLetterComponents.push(component);
  }

  return (
    <>
      <Flex
  bg={useColorModeValue("gray.100", "gray.900")}
  px={4}
  h={16}
  boxShadow={scroll ? "base" : "none"}
  zIndex="sticky"
  position="fixed"
  as="header"
  alignItems={"center"}
  w="100%"
>
  {/* Left Section: Logo */}
  <Link onClick={() => scrollToSection("#hero")}>
    <HStack>
      {TbLetterComponents.map((Component, index) => (
        <Component key={index} color={colors[color]} />
      ))}
    </HStack>
  </Link>

  {/* Center Section: Menu Items */}
  <Flex
    as="nav"
    justifyContent="center"
    alignItems="center"
    flexGrow={1} // Allow this section to grow and take available space
  >
    <Stack direction={"row"} spacing={7}>
      <Button variant="ghost" onClick={() => scrollToSection("#hero")}>
        About
      </Button>
      <Button variant="ghost" onClick={() => scrollToSection("#experience")}>
        Experience
      </Button>
      <Button variant="ghost" onClick={() => scrollToSection("#skills")}>
        Skills
      </Button>
      <Button variant="ghost" onClick={() => scrollToSection("#projects")}>
        Projects
      </Button>
      <Button as="a" href="/resume.pdf" download="Pratik Mishra Resume" variant="ghost">
        Resume
      </Button>
      <Button variant="ghost" onClick={() => scrollToSection("#contact")}>
        Contact
      </Button>
    </Stack>
  </Flex>

  {/* Right Section: Theme Toggle Button */}
  <Flex justifyContent="flex-end" alignItems="center">
  <Button
    onClick={toggleColorMode}
    bg={useColorModeValue("gray.100", "gray.900")} // Matches the navbar's background
    _hover={{
      bg: useColorModeValue("gray.200", "gray.700"), // Subtle hover effect
    }}
    _focus={{
      boxShadow: "none", // Removes focus outline
    }}
    color={useColorModeValue("gray.800", "white")} // Ensures icon color is visible
  >
    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
  </Button>
</Flex>

</Flex>

    </>
  );
}
