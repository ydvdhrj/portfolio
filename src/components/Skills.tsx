"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Tag,
  VStack,
  HStack,
  Icon,
  useColorModeValue,
  chakra,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Progress,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaMobileAlt,
  FaTools,
} from "react-icons/fa";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoJava,
  BiLogoPython,
} from "react-icons/bi";
import {
  SiKotlin,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

// Motion components
const MotionBox = chakra(motion.div);

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  hover: {
    y: -5,
    boxShadow: "xl",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  // Theme colors based on color mode
  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const headingColor = useColorModeValue("blue.600", "blue.300");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const tabSelectedBg = useColorModeValue("blue.500", "blue.400");
  const tagBg = useColorModeValue("blue.50", "blue.900");
  const tagColor = useColorModeValue("blue.600", "blue.200");
  const progressTrackColor = useColorModeValue("gray.100", "gray.700");
  const progressFilledColor = useColorModeValue("blue.500", "blue.300");
  const categoryIconBg = useColorModeValue("blue.50", "blue.900");

  // Skills data structured by category
  const skillsData = {
    languages: [
      { name: "TypeScript", icon: BiLogoTypescript, proficiency: 90 },
      { name: "JavaScript", icon: BiLogoJavascript, proficiency: 95 },
      { name: "Python", icon: BiLogoPython, proficiency: 85 },
      { name: "Java", icon: BiLogoJava, proficiency: 80 },
      { name: "C++", icon: SiCplusplus, proficiency: 75 },
      { name: "Kotlin", icon: SiKotlin, proficiency: 70 },
    ],
    frontend: [
      { name: "React.js", icon: SiReact, proficiency: 90 },
      { name: "Next.js", icon: SiNextdotjs, proficiency: 85 },
      { name: "HTML/CSS", icon: FaCode, proficiency: 95 },
      { name: "Chakra UI", icon: null, proficiency: 90 },
      { name: "Framer Motion", icon: null, proficiency: 85 },
      { name: "TailwindCSS", icon: null, proficiency: 90 },
    ],
    backend: [
      { name: "Node.js", icon: SiNodedotjs, proficiency: 85 },
      { name: "Express", icon: SiExpress, proficiency: 85 },
      { name: "Flask", icon: null, proficiency: 80 },
      { name: "RESTful APIs", icon: null, proficiency: 90 },
      { name: "GraphQL", icon: null, proficiency: 75 },
      { name: "Authentication", icon: null, proficiency: 85 },
    ],
    database: [
      { name: "PostgreSQL", icon: null, proficiency: 85 },
      { name: "Prisma", icon: null, proficiency: 80 },
      { name: "Neon", icon: null, proficiency: 75 },
      { name: "SQLAlchemy", icon: null, proficiency: 80 },
      { name: "SQL", icon: null, proficiency: 90 },
      { name: "NoSQL", icon: null, proficiency: 75 },
    ],
    ml: [
      { name: "Scikit-learn", icon: null, proficiency: 80 },
      { name: "Pandas", icon: null, proficiency: 85 },
      { name: "NumPy", icon: null, proficiency: 85 },
      { name: "Matplotlib", icon: null, proficiency: 80 },
      { name: "Linear Regression", icon: null, proficiency: 85 },
      { name: "Classification", icon: null, proficiency: 80 },
    ],
    tools: [
      { name: "Git/GitHub", icon: null, proficiency: 90 },
      { name: "VS Code", icon: null, proficiency: 95 },
      { name: "Docker", icon: null, proficiency: 75 },
      { name: "Vercel", icon: null, proficiency: 90 },
      { name: "Figma", icon: null, proficiency: 75 },
      { name: "Agile/Scrum", icon: null, proficiency: 80 },
    ],
  };

  // Skill categories with icons
  const categories = [
    {
      name: "Programming Languages",
      icon: FaCode,
      skills: skillsData.languages,
    },
    { name: "Frontend", icon: SiReact, skills: skillsData.frontend },
    { name: "Backend", icon: FaServer, skills: skillsData.backend },
    { name: "Database", icon: FaDatabase, skills: skillsData.database },
    { name: "Machine Learning", icon: FaBrain, skills: skillsData.ml },
    { name: "Tools & Deployment", icon: FaTools, skills: skillsData.tools },
  ];

  return (
    <Box
      as="section"
      id="skills"
      py={20}
      bg={sectionBg}
      position="relative"
      overflow="hidden"
    >
      {/* Background decorative elements */}
      <Box
        position="absolute"
        top="10%"
        right="5%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="blue.500"
        filter="blur(150px)"
        opacity="0.07"
        zIndex="0"
      />
      <Box
        position="absolute"
        bottom="10%"
        left="5%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="purple.500"
        filter="blur(150px)"
        opacity="0.07"
        zIndex="0"
      />

      <Container maxW="container.xl" position="relative" zIndex="1">
        <MotionBox
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <MotionBox variants={itemVariants} mb={16} textAlign="center">
            <Heading
              as="h2"
              size="2xl"
              mb={6}
              bgGradient="linear(to-r, blue.400, purple.500)"
              bgClip="text"
              fontWeight="extrabold"
            >
              Technical Skills
            </Heading>
            <Text
              fontSize="xl"
              maxW="3xl"
              mx="auto"
              color={textColor}
              lineHeight="tall"
            >
              My technical toolbox showcases the technologies I've mastered and
              actively use in my development journey.
            </Text>
          </MotionBox>

          <MotionBox variants={itemVariants}>
            <Tabs
              variant="soft-rounded"
              colorScheme="blue"
              align="center"
              isFitted
              mb={10}
            >
              <TabList
                mb={6}
                overflowX="auto"
                flexWrap={{ base: "nowrap", lg: "wrap" }}
              >
                {categories.map((category, index) => (
                  <Tab
                    key={index}
                    _selected={{
                      bg: tabSelectedBg,
                      color: "white",
                      fontWeight: "medium",
                    }}
                    py={3}
                    px={5}
                    borderRadius="full"
                    minW="auto"
                    mx={{ base: 1, md: 2 }}
                    fontSize={{ base: "sm", md: "md" }}
                    whiteSpace="nowrap"
                  >
                    <HStack spacing={2}>
                      <Icon as={category.icon} boxSize={5} />
                      <Text display={{ base: "none", md: "block" }}>
                        {category.name}
                      </Text>
                    </HStack>
                  </Tab>
                ))}
              </TabList>

              <TabPanels>
                {categories.map((category, catIndex) => (
                  <TabPanel key={catIndex} p={0}>
                    <Box mb={8}>
                      <HStack mb={6} justify="center">
                        <Box
                          p={2}
                          bg={categoryIconBg}
                          color={headingColor}
                          borderRadius="md"
                          mr={2}
                        >
                          <Icon as={category.icon} boxSize={6} />
                        </Box>
                        <Heading as="h3" size="lg" color={headingColor}>
                          {category.name}
                        </Heading>
                      </HStack>

                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                        {category.skills.map((skill, skillIndex) => (
                          <MotionBox
                            key={skillIndex}
                            as={motion.div}
                            initial="initial"
                            whileInView="animate"
                            whileHover="hover"
                            variants={cardVariants}
                            custom={skillIndex}
                            viewport={{ once: true, margin: "-50px" }}
                          >
                            <Box
                              p={5}
                              bg={cardBg}
                              borderRadius="lg"
                              borderWidth="1px"
                              borderColor={cardBorderColor}
                              boxShadow="md"
                              transition="all 0.3s ease"
                            >
                              <Flex
                                justify="space-between"
                                align="center"
                                mb={4}
                              >
                                <HStack spacing={3}>
                                  {skill.icon && (
                                    <Icon
                                      as={skill.icon}
                                      boxSize={5}
                                      color={headingColor}
                                    />
                                  )}
                                  <Text fontWeight="bold" fontSize="lg">
                                    {skill.name}
                                  </Text>
                                </HStack>
                                <Tag
                                  size="sm"
                                  borderRadius="full"
                                  variant="solid"
                                  bg={tagBg}
                                  color={tagColor}
                                >
                                  {skill.proficiency}%
                                </Tag>
                              </Flex>
                              <Progress
                                value={skill.proficiency}
                                size="sm"
                                borderRadius="full"
                                colorScheme="blue"
                                bg={progressTrackColor}
                                sx={{
                                  "& > div": {
                                    backgroundColor: progressFilledColor,
                                  },
                                }}
                              />
                            </Box>
                          </MotionBox>
                        ))}
                      </SimpleGrid>
                    </Box>
                  </TabPanel>
                ))}
              </TabPanels>
            </Tabs>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
