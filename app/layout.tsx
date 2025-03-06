import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Kleo - AI-Powered Social Media Management',
    template: '%s | Kleo',
  },
  description: 'Transform your social media workflow with AI-driven insights, scheduling, and analytics - all in one collaborative space.',
  keywords: ['social media management', 'AI social media', 'content creation', 'social media scheduling', 'team collaboration', 'brand voice'],
  authors: [{ name: 'Kleo Team' }],
  creator: 'Kleosi Inc.',
  publisher: 'Kleosi Inc.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mykleo.ai',
    siteName: 'Kleo',
    title: 'Kleo - AI-Powered Social Media Management',
    description: 'Transform your social media workflow with AI-driven insights, scheduling, and analytics - all in one collaborative space.',
    images: [
      {
        url: 'https://mykleo.ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kleo - AI-Powered Social Media Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kleo - AI-Powered Social Media Management',
    description: 'Transform your social media workflow with AI-driven insights, scheduling, and analytics - all in one collaborative space.',
    creator: '@mykleo',
    images: ['https://mykleo.ai/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://mykleo.ai',
  },
  metadataBase: new URL('https://mykleo.ai'),
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Kleo" />
      </head>
      <body
        className={`${interFont.variable} antialiased bg-zinc-50/50`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
