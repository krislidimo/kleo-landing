import { useCases } from '@/lib/seo-content';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Social Media Use Cases | Kleo',
  description: 'Discover how Kleo\'s AI-powered social media management can help your specific business needs.',
  openGraph: {
    title: 'AI Social Media Use Cases | Kleo',
    description: 'Discover how Kleo\'s AI-powered social media management can help your specific business needs.',
    url: 'https://mykleo.ai/use-cases',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Social Media Use Cases | Kleo',
    description: 'Discover how Kleo\'s AI-powered social media management can help your specific business needs.',
  },
};

export default function UseCasesPage() {
  return (
    <div className="flex flex-col w-full max-w-[990px] mx-auto py-16">
      <h1 className="text-zinc-950 text-[2.8rem] font-semibold leading-[150%] mb-[12px]">
        AI Social Media Use Cases
      </h1>
      <p className="text-zinc-600 font-['Inter'] leading-[160%] mb-10">
        Discover how Kleo can transform your social media strategy for your specific business needs.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {useCases.map((useCase) => (
          <Link 
            href={`/use-cases/${useCase.id}`} 
            key={useCase.id}
            className="p-8 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-colors"
          >
            <h2 className="text-zinc-950 text-2xl font-semibold mb-3">{useCase.title}</h2>
            <p className="text-zinc-600">{useCase.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
