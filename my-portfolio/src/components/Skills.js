import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";

export default function SkillsCarousel({ color }) {
  const techSkills = [
    { name: "Java", src: "/java.png" },
    { name: "JavaScript", src: "/javascript.png" },
    { name: "MySQL", src: "/mysql.png" },
    { name: "React", src: "/react.png" },
    { name: "Angular", src: "/angular.png" },
    { name: "Linux", src: "/linux.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % techSkills.length // Loop back to start
      );
    }, 2000); // 2 seconds interval
    return () => clearInterval(interval); // Clear interval on unmount
  }, [techSkills.length]);

  const visibleSkills = [
    techSkills[currentIndex],
    techSkills[(currentIndex + 1) % techSkills.length],
    techSkills[(currentIndex + 2) % techSkills.length],
  ];

  return (
    <Container maxW="3xl" id="skills">
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* Section Header */}
        <Stack align="center" direction="row" px={4} spacing={4}>
          <Divider orientation="horizontal" flex="1" />
          <Text fontWeight={800} textAlign="center" whiteSpace="nowrap">
            Skills
          </Text>
          <Divider orientation="horizontal" flex="1" />
        </Stack>

        {/* Carousel */}
        <Flex justifyContent="center" overflow="hidden" px={4} pt={8}>
          {visibleSkills.map((skill, index) => (
            <Box
              key={skill.name}
              mx={2}
              textAlign="center"
              flexShrink={0}
              transition="transform 0.5s ease-in-out"
            >
              <Image
                src={skill.src}
                alt={skill.name}
                boxSize="160px" // Increased size
                objectFit="contain"
                mx="auto"
              />
              <Text fontWeight={600} fontSize="md" mt={4}>
                {skill.name}
              </Text>
            </Box>
          ))}
        </Flex>
      </Stack>
    </Container>
  );
}
