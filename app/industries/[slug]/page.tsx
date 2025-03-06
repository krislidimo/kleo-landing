import { industries, useCases } from '@/lib/seo-content';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Generate static params for all industries
export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.id,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const industry = industries.find((ind) => ind.id === params.slug);
  
  if (!industry) {
    return {
      title: 'Not Found | Kleo',
      description: 'The page you are looking for does not exist.',
    };
  }
  
  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    openGraph: {
      title: industry.metaTitle,
      description: industry.metaDescription,
      type: 'website',
      url: `https://mykleo.ai/industries/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: industry.metaTitle,
      description: industry.metaDescription,
    }
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((ind) => ind.id === params.slug);
  
  if (!industry) {
    notFound();
  }
  
  // Find related use cases based on industry
  const relatedUseCases = useCases.filter((useCase) => {
    // Match use cases that might be relevant to this industry
    // This is a simple implementation - in a real app, you might have a more sophisticated matching system
    return useCase.id.includes(industry.id.replace('for-', ''));
  }).slice(0, 2);
  
  // Structured data for rich results
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: industry.title,
    description: industry.description,
    provider: {
      '@type': 'Organization',
      name: 'Kleo',
      url: 'https://mykleo.ai'
    }
  };
  
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="flex flex-col w-full max-w-[990px] mx-auto py-16">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm">
          <Link href="/" className="text-zinc-500 hover:text-zinc-700">Home</Link>
          <span className="mx-2 text-zinc-500">/</span>
          <Link href="/industries" className="text-zinc-500 hover:text-zinc-700">Industries</Link>
          <span className="mx-2 text-zinc-500">/</span>
          <span className="text-zinc-900">{industry.name}</span>
        </nav>
        
        <h1 className="text-zinc-950 text-[2.8rem] font-semibold leading-[150%] mb-[12px]">
          {industry.title}
        </h1>
        <p className="text-zinc-600 font-['Inter'] leading-[160%] mb-10 text-lg">
          {industry.description}
        </p>
        
        {/* Challenges Section */}
        <div className="mt-12">
          <h2 className="text-zinc-950 text-3xl font-semibold mb-6">Industry Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.challenges.map((challenge, index) => (
              <div key={index} className="p-6 bg-zinc-100 rounded-xl">
                <p className="text-zinc-950 font-semibold">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Solutions Section */}
        <div className="mt-16">
          <h2 className="text-zinc-950 text-3xl font-semibold mb-6">Kleo Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.solutions.map((solution, index) => (
              <div key={index} className="p-6 bg-zinc-100 rounded-xl">
                <p className="text-zinc-950 font-semibold">{solution}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonial Section */}
        {industry.testimonial && (
          <div className="mt-16 p-10 bg-zinc-100 rounded-xl">
            <h2 className="text-zinc-950 text-3xl font-semibold mb-6">Success Story</h2>
            <blockquote className="text-zinc-700 text-lg italic mb-4">
              "{industry.testimonial.quote}"
            </blockquote>
            <div className="flex items-center">
              <div>
                <p className="text-zinc-900 font-semibold">{industry.testimonial.author}</p>
                <p className="text-zinc-600">{industry.testimonial.company}</p>
              </div>
            </div>
          </div>
        )}
        
        {/* CTA Section */}
        <div className="mt-16 p-10 bg-zinc-900 rounded-xl text-center">
          <h2 className="text-white text-3xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-zinc-300 mb-6">
            Join other {industry.name.toLowerCase()} using Kleo to transform their social media presence.
          </p>
          <a 
            href="https://app.mykleo.ai/sign-up" 
            className="button flex justify-center items-center gap-2.5 py-3 px-6 rounded-md border border-[#f723f7] bg-[#f723f7] text-neutral-50 text-center font-['Inter'] text-sm font-semibold leading-[normal] mx-auto w-fit"
          >
            {industry.ctaText}
          </a>
        </div>
        
        {/* Related Use Cases */}
        {relatedUseCases.length > 0 && (
          <div className="mt-16">
            <h2 className="text-zinc-950 text-3xl font-semibold mb-6">Related Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedUseCases.map((useCase) => (
                <Link 
                  href={`/use-cases/${useCase.id}`} 
                  key={useCase.id}
                  className="p-8 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-colors"
                >
                  <h3 className="text-zinc-950 text-xl font-semibold mb-3">{useCase.title}</h3>
                  <p className="text-zinc-600">{useCase.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
