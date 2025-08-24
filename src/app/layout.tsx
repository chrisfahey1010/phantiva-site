import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phantiva — Cinematic ads. AI speed.",
  description:
    "Phantiva is a creative marketing studio producing cinematic, social-native ads with cutting-edge generative video — fast, affordable, and effective.",
  metadataBase: new URL("https://phantiva.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Phantiva — Cinematic ads. AI speed.",
    description:
      "We turn rough ideas into launch-ready videos that people actually watch and share.",
    url: "https://phantiva.com",
    siteName: "Phantiva",
    images: [
      { url: "/logo.jpg", width: 1200, height: 630, alt: "Phantiva" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phantiva — Cinematic ads. AI speed.",
    description:
      "Cinematic, social-native ads produced with cutting-edge generative video.",
    images: ["/logo.jpg"],
  },
  keywords: [
    "AI video ads",
    "generative video production",
    "social-native commercials",
    "TikTok ad studio",
    "small business video marketing",
    "creative agency",
    "Xiaohongshu marketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
