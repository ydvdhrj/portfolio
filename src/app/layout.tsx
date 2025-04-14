import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dheeraj Yadav | Software Developer & Full-Stack Engineer",
  description:
    "Portfolio of Dheeraj Yadav, a passionate software developer and aspiring full-stack engineer skilled in web development and machine learning.",
  keywords: [
    "software developer",
    "full-stack engineer",
    "web development",
    "React",
    "Next.js",
    "machine learning",
    "portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
