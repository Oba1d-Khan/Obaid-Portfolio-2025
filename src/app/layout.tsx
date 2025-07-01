import type { Metadata } from "next";
import { Montserrat, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SocialLinks from "./components/layout/SocialLinks";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "M. Obaid Ullah Khan | Full-Stack Developer &  Portfolio",
  description:
    "Discover the portfolio of M. Obaid Ullah Khan, a results-driven full-stack developer and creative UI/UX designer. Showcasing cutting-edge web applications, visually stunning interfaces, and seamless user experiences, this portfolio demonstrates expertise in React, Next.js, and modern web technologies. Impress your clients and elevate your business with innovative digital solutions tailored to your needs. Let's collaborate to turn your vision into reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${firaCode.variable} antialiased`}
      >
        <Navbar />
        <SocialLinks />

        {children}
        <Footer />
      </body>
    </html>
  );
}
