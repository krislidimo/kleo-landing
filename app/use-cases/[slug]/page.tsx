import { useCases } from '@/lib/seo-content';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Generate static params for all use cases
export async function generateStaticParams() {
  return useCases.map((useCase) => ({
    slug: useCase.id,
  }));
}

// Generate metadata for each page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const useCase = useCases.find((uc) => uc.id === params.slug);
  
  if (!useCase) {
    return {
      title: 'Not Found | Kleo',
      description: 'The page you are looking for does not exist.',
    };
  }
  
  return {
    title: useCase.metaTitle,
    description: useCase.metaDescription,
    openGraph: {
      title: useCase.metaTitle,
      description: useCase.metaDescription,
      type: 'website',
      url: `https://mykleo.ai/use-cases/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: useCase.metaTitle,
      description: useCase.metaDescription,
    }
  };
}

export default function UseCasePage({ params }: { params: { slug: string } }) {
  const useCase = useCases.find((uc) => uc.id === params.slug);
  
  if (!useCase) {
    notFound();
  }
  
  // Find related use cases (excluding current one)
  const relatedUseCases = useCases
    .filter((uc) => uc.id !== useCase.id)
    .slice(0, 2);
  
  // Structured data for rich results
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: useCase.title,
    description: useCase.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
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
          <Link href="/use-cases" className="text-zinc-500 hover:text-zinc-700">Use Cases</Link>
          <span className="mx-2 text-zinc-500">/</span>
          <span className="text-zinc-900">{useCase.title}</span>
        </nav>
        
        <h1 className="text-zinc-950 text-[2.8rem] font-semibold leading-[150%] mb-[12px]">
          {useCase.title}
        </h1>
        <p className="text-zinc-600 font-['Inter'] leading-[160%] mb-10 text-lg">
          {useCase.description}
        </p>
        
        {/* Features Section */}
        <div className="mt-12">
          <h2 className="text-zinc-950 text-3xl font-semibold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCase.features.map((feature, index) => (
              <div key={index} className="p-6 bg-zinc-100 rounded-xl">
                <p className="text-zinc-950 font-semibold">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="mt-16">
          <h2 className="text-zinc-950 text-3xl font-semibold mb-6">Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCase.benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-zinc-100 rounded-xl">
                <p className="text-zinc-950 font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* FAQs Section */}
        <div className="mt-16">
          <h2 className="text-zinc-950 text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {useCase.faqs.map((faq, index) => (
              <div key={index} className="p-6 bg-zinc-100 rounded-xl">
                <h3 className="text-zinc-950 text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-zinc-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 p-10 bg-zinc-900 rounded-xl text-center">
          <h2 className="text-white text-3xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-zinc-300 mb-6">
            Join thousands of businesses using Kleo to transform their social media presence.
          </p>
          <a 
            href="https://app.mykleo.ai/sign-up" 
            className="button flex justify-center items-center gap-2.5 py-3 px-6 rounded-md border border-[#f723f7] bg-[#f723f7] text-neutral-50 text-center font-['Inter'] text-sm font-semibold leading-[normal] mx-auto w-fit"
          >
            {useCase.ctaText}
          </a>
        </div>
        
        {/* Related Use Cases */}
        {relatedUseCases.length > 0 && (
          <div className="mt-16">
            <h2 className="text-zinc-950 text-3xl font-semibold mb-6">Related Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedUseCases.map((relatedUseCase) => (
                <Link 
                  href={`/use-cases/${relatedUseCase.id}`} 
                  key={relatedUseCase.id}
                  className="p-8 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-colors"
                >
                  <h3 className="text-zinc-950 text-xl font-semibold mb-3">{relatedUseCase.title}</h3>
                  <p className="text-zinc-600">{relatedUseCase.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
