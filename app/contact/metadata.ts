import type { Metadata } from "next";

const title = "Contact Us | Kleo";
const description = "Get in touch with the Kleo team. We're here to help with any questions or inquiries about our AI-powered social media management platform.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "contact kleo", 
    "get in touch", 
    "kleo support", 
    "social media management help", 
    "AI social media assistance"
  ],
  openGraph: {
    title,
    description,
    url: 'https://mykleo.ai/contact',
    siteName: 'Kleo',
    images: [
      {
        url: 'https://mykleo.ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kleo - Get in Touch',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@mykleo',
    images: ['https://mykleo.ai/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://mykleo.ai/contact',
  },
};

export default metadata;
