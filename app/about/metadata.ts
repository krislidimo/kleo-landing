import type { Metadata } from "next";

const title = "About Us | Kleo";
const description = "Learn about Kleo, the team behind the AI-powered social media management platform transforming how brands connect with their audience.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "about kleo", 
    "kleo team", 
    "kleo company", 
    "AI social media platform", 
    "kleo founders",
    "social media management company"
  ],
  openGraph: {
    title,
    description,
    url: 'https://mykleo.ai/about',
    siteName: 'Kleo',
    images: [
      {
        url: 'https://mykleo.ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kleo - About Our Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['https://mykleo.ai/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://mykleo.ai/about',
  },
};
