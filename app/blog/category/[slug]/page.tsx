import { blogPosts, blogCategories } from '@/lib/blog-content';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Generate static params for all blog categories
export function generateStaticParams() {
  return blogCategories.map((category) => ({
    slug: category.slug,
  }));
}

// Generate metadata for each category page
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = blogCategories.find((cat) => cat.slug === params.slug);
  
  if (!category) {
    return {
      title: 'Category Not Found | Kleo Blog',
      description: 'The requested blog category could not be found.',
    };
  }
  
  return {
    title: `${category.name} | Kleo Blog`,
    description: category.description,
    openGraph: {
      title: `${category.name} | Kleo Blog`,
      description: category.description,
      url: `https://mykleo.ai/blog/category/${category.slug}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category.name} | Kleo Blog`,
      description: category.description,
    },
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = blogCategories.find((cat) => cat.slug === params.slug);
  
  if (!category) {
    notFound();
  }
  
  // Filter posts by category
  const categoryPosts = blogPosts.filter((post) => post.category === category.id);
  
  // Sort posts by date (newest first)
  const sortedPosts = [...categoryPosts].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="flex flex-col w-full max-w-[990px] mx-auto py-16">
      {/* Breadcrumbs */}
      <div className="text-sm text-zinc-600 mb-8">
        <Link href="/" className="hover:text-zinc-900">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/blog" className="hover:text-zinc-900">Blog</Link>
        <span className="mx-2">›</span>
        <span className="text-zinc-900">{category.name}</span>
      </div>
      
      <h1 className="text-zinc-950 text-[2.8rem] font-semibold leading-[150%] mb-[12px]">
        {category.name}
      </h1>
      <p className="text-zinc-600 font-['Inter'] leading-[160%] mb-10">
        {category.description}
      </p>
      
      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-12">
        <Link 
          href="/blog" 
          className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-full text-sm font-medium transition-colors"
        >
          All Posts
        </Link>
        {blogCategories.map((cat) => (
          <Link 
            key={cat.id}
            href={`/blog/category/${cat.slug}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              cat.id === category.id 
                ? 'bg-zinc-900 text-white' 
                : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800'
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>
      
      {/* Posts */}
      {sortedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedPosts.map((post) => (
            <Link 
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block p-6 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-colors"
            >
              <div className="mb-3 text-sm text-zinc-600">
                {formatDate(post.publishDate)} • {post.readTime} min read
              </div>
              <h3 className="text-zinc-950 text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-zinc-600 mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center mt-4">
                <div className="w-8 h-8 bg-zinc-300 rounded-full mr-2"></div>
                <p className="text-zinc-900 text-sm font-semibold">{post.author.name}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h3 className="text-zinc-900 text-xl font-semibold mb-2">No posts found</h3>
          <p className="text-zinc-600">There are currently no posts in this category.</p>
        </div>
      )}
      
      {/* Newsletter Signup */}
      <div className="mt-16 p-10 bg-zinc-900 rounded-xl text-center">
        <h2 className="text-white text-3xl font-semibold mb-4">Stay Updated</h2>
        <p className="text-zinc-300 mb-6 max-w-xl mx-auto">
          Subscribe to our newsletter to receive the latest insights on AI social media management, tips, and Kleo product updates.
        </p>
        <div className="flex max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-4 py-3 rounded-l-md focus:outline-none"
          />
          <button className="px-6 py-3 bg-[#f723f7] text-white rounded-r-md font-medium">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
