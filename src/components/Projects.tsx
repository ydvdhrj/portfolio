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
  Button,
  useColorModeValue,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";
import Image from "next/image";

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
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function Projects() {
  // Theme colors based on color mode
  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const headingColor = useColorModeValue("blue.600", "blue.300");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const tagBg = useColorModeValue("blue.50", "blue.900");
  const tagColor = useColorModeValue("blue.600", "blue.200");
  const iconBg = useColorModeValue("blue.50", "blue.900");

  const projects = [
    {
      title: "House Price Prediction (California)",
      description:
        "Built a machine learning model to predict median house prices in California using a dataset of over 20,000 districts. Implemented and compared Linear Regression, Random Forest, and XGBoost to identify the best-performing algorithm.",
      tags: ["Python", "Scikit-learn", "Machine Learning", "Data Analysis"],
      image: "/houseprice.png",
      github: "https://github.com/ydvdhrj/",
      // live: "",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
    },
    {
      title: "Splitwise Expense Tracking App",
      description:
        "A full-stack web app for splitting and managing expenses among friends or groups. Features include group creation and management, real-time expense tracking, and authentication with Flask-Login.",
      tags: ["Flask", "PostgreSQL", "Neon", "Bootstrap", "SQLAlchemy"],
      image: "/splitwise.png",
      github: "https://github.com/ydvdhrj/splitwise",
      live: "https://splitwise-iota.vercel.app/",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M12 2v20"></path>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
      ),
    },
    {
      title: "Slide - Instagram DM Automation SaaS",
      description:
        "A SaaS project that helps influencers auto-respond to Instagram DMs using custom keywords. It includes an AI bot to handle conversations based on chat history.",
      tags: ["TypeScript", "Prisma", "Neon", "SaaS"],
      image: "/slide.jpeg",
      github: "https://github.com/ydvdhrj/Slide",
      // live: "https://slide-dm.vercel.app",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" x2="8" y1="13" y2="13"></line>
          <line x1="16" x2="8" y1="17" y2="17"></line>
          <line x1="10" x2="8" y1="9" y2="9"></line>
        </svg>
      ),
    },
    {
      title: "EduFocus (Android)",
      description:
        "A Kotlin-based mobile app for setting reminders with customizable alarms and notifications. Built for quick daily task reminders and improved time management.",
      tags: ["Kotlin", "Android", "Mobile Development"],
      image: "/EduFocus.png",
      github: "https://github.com/ydvdhrj/EduFocus",
      live: "",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <Box
      as="section"
      id="projects"
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
            <Box>
              <Heading
                as="h2"
                size="2xl"
                mb={6}
                bgGradient="linear(to-r, blue.400, purple.500)"
                bgClip="text"
                fontWeight="extrabold"
              >
                My Projects
              </Heading>
              <Text
                fontSize="xl"
                maxW="3xl"
                mx="auto"
                color={textColor}
                lineHeight="tall"
              >
                Here are some of the projects I've worked on. Each one
                represents a different challenge and learning experience.
              </Text>
            </Box>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {projects.map((project, index) => (
              <MotionBox
                key={index}
                as={motion.div}
                initial="initial"
                whileInView="animate"
                whileHover="hover"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                custom={index}
              >
                <Box
                  borderRadius="xl"
                  overflow="hidden"
                  bg={cardBg}
                  borderWidth="1px"
                  borderColor={cardBorderColor}
                  boxShadow="lg"
                  height="100%"
                  position="relative"
                  transition="all 0.3s"
                  _hover={{
                    boxShadow: "xl",
                    borderColor: "blue.300",
                  }}
                >
                  <Box
                    h="200px"
                    position="relative"
                    overflow="hidden"
                    bgGradient="linear(to-r, blue.50, purple.50)"
                  >
                    {project.image && (
                      <Box
                        as={motion.div}
                        position="absolute"
                        inset="0"
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                    )}
                  </Box>

                  <Box p={6}>
                    <HStack mb={4} spacing={3}>
                      <Box
                        p={2}
                        bg={iconBg}
                        color={headingColor}
                        borderRadius="md"
                      >
                        <Icon as={project.icon} boxSize={5} />
                      </Box>
                      <Heading
                        as="h3"
                        size="md"
                        color={headingColor}
                        fontWeight="bold"
                      >
                        {project.title}
                      </Heading>
                    </HStack>

                    <Text color={textColor} mb={4} fontSize="md">
                      {project.description}
                    </Text>

                    <Box mb={6}>
                      <Flex flexWrap="wrap" gap={2}>
                        {project.tags.map((tag, i) => (
                          <Tag
                            key={i}
                            size="md"
                            borderRadius="full"
                            bg={tagBg}
                            color={tagColor}
                            fontWeight="medium"
                            px={3}
                            py={1}
                          >
                            {tag}
                          </Tag>
                        ))}
                      </Flex>
                    </Box>

                    <Flex
                      pt={4}
                      borderTop="1px"
                      borderColor={cardBorderColor}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <HStack spacing={3}>
                        {project.github && (
                          <Button
                            as="a"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="ghost"
                            size="sm"
                            leftIcon={<FaGithub />}
                            color={headingColor}
                          >
                            GitHub
                          </Button>
                        )}
                        {project.live && (
                          <Button
                            as="a"
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="ghost"
                            size="sm"
                            leftIcon={<FaExternalLinkAlt />}
                            color={headingColor}
                          >
                            Live Demo
                          </Button>
                        )}
                      </HStack>
                      <Button
                        as="a"
                        href={project.github || project.live || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="ghost"
                        size="sm"
                        rightIcon={<HiOutlineArrowRight />}
                        color={headingColor}
                      >
                        View Details
                      </Button>
                    </Flex>
                  </Box>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
}
