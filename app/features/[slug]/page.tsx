import { featurePages, useCases } from '@/lib/seo-content';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Generate static params for all features
export async function generateStaticParams() {
  return featurePages.map((feature) => ({
    slug: feature.id,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const feature = featurePages.find((f) => f.id === params.slug);
  
  if (!feature) {
    return {
      title: 'Not Found | Kleo',
      description: 'The page you are looking for does not exist.',
    };
  }
  
  return {
    title: feature.metaTitle,
    description: feature.metaDescription,
    openGraph: {
      title: feature.metaTitle,
      description: feature.metaDescription,
      type: 'website',
      url: `https://mykleo.ai/features/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: feature.metaTitle,
      description: feature.metaDescription,
    }
  };
}

export default function FeaturePage({ params }: { params: { slug: string } }) {
  const feature = featurePages.find((f) => f.id === params.slug);
  
  if (!feature) {
    notFound();
  }
  
  // Find related use cases
  const relatedUseCases = useCases.slice(0, 2);
  
  // Structured data for rich results
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: feature.title,
    description: feature.description,
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
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
          <Link href="/features" className="text-zinc-500 hover:text-zinc-700">Features</Link>
          <span className="mx-2 text-zinc-500">/</span>
          <span className="text-zinc-900">{feature.title}</span>
        </nav>
        
        <h1 className="text-zinc-950 text-[2.8rem] font-semibold leading-[150%] mb-[12px]">
          {feature.title}
        </h1>
        <p className="text-zinc-600 font-['Inter'] leading-[160%] mb-10 text-lg">
          {feature.description}
        </p>
        
        {/* Key Points Section */}
        <div className="mt-12">
          <h2 className="text-zinc-950 text-3xl font-semibold mb-6">Key Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {feature.keyPoints.map((point, index) => (
              <div key={index} className="p-6 bg-zinc-100 rounded-xl">
                <p className="text-zinc-950 font-semibold">{point}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="mt-16">
          <h2 className="text-zinc-950 text-3xl font-semibold mb-6">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {feature.benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-zinc-100 rounded-xl">
                <p className="text-zinc-950 font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 p-10 bg-zinc-900 rounded-xl text-center">
          <h2 className="text-white text-3xl font-semibold mb-4">Ready to Try {feature.title}?</h2>
          <p className="text-zinc-300 mb-6">
            Start your free trial today and experience the power of Kleo.
          </p>
          <a 
            href="https://app.mykleo.ai/sign-up" 
            className="button flex justify-center items-center gap-2.5 py-3 px-6 rounded-md border border-[#f723f7] bg-[#f723f7] text-neutral-50 text-center font-['Inter'] text-sm font-semibold leading-[normal] mx-auto w-fit"
          >
            Start Your Free Trial
          </a>
        </div>
        
        {/* Related Use Cases */}
        {relatedUseCases.length > 0 && (
          <div className="mt-16">
            <h2 className="text-zinc-950 text-3xl font-semibold mb-6">See How Businesses Use This Feature</h2>
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
