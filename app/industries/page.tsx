import { industries } from '@/lib/seo-content';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Social Media for Industries | Kleo',
  description: 'Discover how Kleo\'s AI-powered social media management can transform your industry-specific social media strategy.',
  openGraph: {
    title: 'AI Social Media for Industries | Kleo',
    description: 'Discover how Kleo\'s AI-powered social media management can transform your industry-specific social media strategy.',
    url: 'https://mykleo.ai/industries',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Social Media for Industries | Kleo',
    description: 'Discover how Kleo\'s AI-powered social media management can transform your industry-specific social media strategy.',
  },
};

export default function IndustriesPage() {
  return (
    <div className="flex flex-col w-full max-w-[990px] mx-auto py-16">
      <h1 className="text-zinc-950 text-[2.8rem] font-semibold leading-[150%] mb-[12px]">
        AI Social Media for Industries
      </h1>
      <p className="text-zinc-600 font-['Inter'] leading-[160%] mb-10">
        Discover how Kleo can transform your social media strategy for your specific industry needs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {industries.map((industry) => (
          <Link 
            href={`/industries/${industry.id}`} 
            key={industry.id}
            className="p-8 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-colors"
          >
            <h2 className="text-zinc-950 text-2xl font-semibold mb-3">{industry.name}</h2>
            <p className="text-zinc-600">{industry.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
