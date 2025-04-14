"use client";

import { ThemeProvider } from "@/context/ThemeContext";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

// Define a custom Chakra UI theme with futuristic design elements
const chakraTheme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
  fonts: {
    heading: "'Inter', 'Segoe UI', sans-serif",
    body: "'Inter', 'Segoe UI', sans-serif",
  },
  colors: {
    // Futuristic color palette
    primary: {
      50: "#e4e6ff",
      100: "#bec0ff",
      200: "#969aff",
      300: "#6e74ff",
      400: "#464eff",
      500: "#1e28ff", // Primary brand color
      600: "#1720cc",
      700: "#101899",
      800: "#091066",
      900: "#020833",
    },
    secondary: {
      50: "#e0f7ff",
      100: "#b8e4ff",
      200: "#8dd2ff",
      300: "#62bfff",
      400: "#37adff",
      500: "#0d94ff", // Secondary accent color
      600: "#0075cc",
      700: "#005799",
      800: "#003866",
      900: "#001a33",
    },
    accent: {
      50: "#f0e0ff",
      100: "#d3b2ff",
      200: "#b683ff",
      300: "#9955ff",
      400: "#7d26ff",
      500: "#6000ff", // Accent highlight color
      600: "#4d00cc",
      700: "#390099",
      800: "#260066",
      900: "#130033",
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "md",
        fontWeight: "medium",
      },
      variants: {
        solid: (props: any) => ({
          bg: props.colorMode === "dark" ? "primary.500" : "primary.500",
          color: "white",
          _hover: {
            bg: props.colorMode === "dark" ? "primary.400" : "primary.600",
            transform: "translateY(-2px)",
            boxShadow: "lg",
          },
          transition: "all 0.2s ease-in-out",
        }),
        outline: (props: any) => ({
          borderColor:
            props.colorMode === "dark" ? "primary.500" : "primary.500",
          color: props.colorMode === "dark" ? "primary.500" : "primary.500",
          _hover: {
            bg:
              props.colorMode === "dark"
                ? "rgba(30, 40, 255, 0.1)"
                : "rgba(30, 40, 255, 0.1)",
            transform: "translateY(-2px)",
          },
          transition: "all 0.2s ease-in-out",
        }),
        ghost: {
          _hover: {
            transform: "translateY(-2px)",
          },
          transition: "all 0.2s ease-in-out",
        },
      },
    },
    Card: {
      baseStyle: (props: any) => ({
        bg: props.colorMode === "dark" ? "gray.800" : "white",
        borderRadius: "lg",
        boxShadow: "md",
        overflow: "hidden",
        transition: "all 0.3s ease",
        _hover: {
          boxShadow: "xl",
          transform: "translateY(-5px)",
        },
      }),
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.900" : "gray.50",
        color: props.colorMode === "dark" ? "white" : "gray.800",
      },
    }),
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={chakraTheme}>
        <ThemeProvider>{children}</ThemeProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
