import { featurePages } from '@/lib/seo-content';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Social Media Features | Kleo',
  description: 'Explore Kleo\'s powerful AI-powered social media management features designed to transform your social media workflow.',
  openGraph: {
    title: 'AI Social Media Features | Kleo',
    description: 'Explore Kleo\'s powerful AI-powered social media management features designed to transform your social media workflow.',
    url: 'https://mykleo.ai/features',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Social Media Features | Kleo',
    description: 'Explore Kleo\'s powerful AI-powered social media management features designed to transform your social media workflow.',
  },
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col w-full max-w-[990px] mx-auto py-16">
      <h1 className="text-zinc-950 text-[2.8rem] font-semibold leading-[150%] mb-[12px]">
        Kleo Features
      </h1>
      <p className="text-zinc-600 font-['Inter'] leading-[160%] mb-10">
        Explore our comprehensive suite of AI-powered social media management tools.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {featurePages.map((feature) => (
          <Link 
            href={`/features/${feature.id}`} 
            key={feature.id}
            className="p-8 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-colors"
          >
            <h2 className="text-zinc-950 text-2xl font-semibold mb-3">{feature.title}</h2>
            <p className="text-zinc-600">{feature.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
