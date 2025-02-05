import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Badge,
  Image,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Fade } from "react-reveal";
import { useState, useEffect } from "react";
import ExperienceArray from "./ExperienceArray";

export default function Experience({ color }) {
  const experience = ExperienceArray();
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    // Set the first experience as the default when the data is available
    if (experience.length > 0) {
      setSelectedExperience(experience[0]);
    }
  }, [experience]);

  return (
    <Container maxW={"3xl"} id="experience">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        {/* Section Header */}
        <Stack align="center" direction="row" px={4} spacing={4}>
  <Divider orientation="horizontal" flex="1" />
  <Text fontWeight={800} textAlign="center" whiteSpace="nowrap">
    Work Experience
  </Text>
  <Divider orientation="horizontal" flex="1" />
</Stack>


        {/* Experience Display */}
        {selectedExperience && (
          <Stack px={4} spacing={4}>
            <Fade bottom>
              <Card key={selectedExperience.company} size="sm">
                <CardHeader>
                  <Flex justifyContent="space-between">
                    <HStack>
                      <Image
                        src={selectedExperience.image}
                        h={50}
                        alt={`${selectedExperience.company} logo`}
                      />
                      <Box px={2} align="left">
                        <Text fontWeight={600}>
                          {selectedExperience.company}
                        </Text>
                        <Text>{selectedExperience.position}</Text>
                      </Box>
                    </HStack>
                    <Text px={2} fontWeight={300}>
                      {selectedExperience.duration}
                    </Text>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex>
                    <List align="left" spacing={3}>
                      {selectedExperience.listItems.map((item, index) => (
                        <ListItem key={index}>
                          <ListIcon
                            boxSize={6}
                            as={ChevronRightIcon}
                            color={`${color}.500`}
                          />
                          {item}
                        </ListItem>
                      ))}
                    </List>
                  </Flex>
                </CardBody>
                <CardFooter>
                  <HStack spacing={2}>
                    {selectedExperience.badges.map((badge) => (
                      <Badge
                        key={badge.name}
                        colorScheme={badge.colorScheme}
                      >
                        {badge.name}
                      </Badge>
                    ))}
                  </HStack>
                </CardFooter>
              </Card>
            </Fade>
          </Stack>
        )}
      </Stack>
    </Container>
  );
}
