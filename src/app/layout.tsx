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
  title: "Visionara | Your Script, Your Story - Complete Film Production Platform",
  description: "Transform your film production workflow with Visionara. From script analysis to cast management, scheduling to shotlists - professional tools for creators who demand excellence.",
  keywords: "film production, script analysis, cast management, production scheduling, shotlist development, filmmaking tools, movie production software",
  authors: [{ name: "Visionara" }],
  creator: "Visionara",
  publisher: "Visionara",
  openGraph: {
    title: "Visionara | Your Script, Your Story",
    description: "Complete film production platform for professional creators",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Visionara | Your Script, Your Story",
    description: "Complete film production platform for professional creators",
  },
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
