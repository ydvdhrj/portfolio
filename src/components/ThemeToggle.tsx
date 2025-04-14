"use client";

import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";
import {
  IconButton,
  useColorMode,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration errors by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    toggleTheme();
    toggleColorMode();
  };

  if (!mounted) return null;

  return (
    <IconButton
      aria-label={`Switch to ${colorMode === "light" ? "dark" : "light"} mode`}
      variant="ghost"
      onClick={handleToggle}
      position="relative"
      rounded="full"
      w="40px"
      h="40px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _hover={{
        bg: useColorModeValue("gray.100", "gray.700"),
      }}
      icon={
        <Box position="relative" w="20px" h="20px">
          {/* Sun Icon */}
          <motion.div
            animate={{
              scale: colorMode === "light" ? 1 : 0,
              opacity: colorMode === "light" ? 1 : 0,
              rotate: colorMode === "light" ? 0 : 180,
            }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          </motion.div>

          {/* Moon Icon */}
          <motion.div
            animate={{
              scale: colorMode === "dark" ? 1 : 0,
              opacity: colorMode === "dark" ? 1 : 0,
              rotate: colorMode === "dark" ? 0 : -180,
            }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          </motion.div>
        </Box>
      }
    />
  );
}
