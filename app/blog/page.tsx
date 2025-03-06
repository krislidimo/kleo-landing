import { blogPosts, blogCategories } from '@/lib/blog-content';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Social Media Management Blog | Kleo',
  description: 'Expert insights, tips, and strategies for leveraging AI in your social media management workflow.',
  openGraph: {
    title: 'AI Social Media Management Blog | Kleo',
    description: 'Expert insights, tips, and strategies for leveraging AI in your social media management workflow.',
    url: 'https://mykleo.ai/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Social Media Management Blog | Kleo',
    description: 'Expert insights, tips, and strategies for leveraging AI in your social media management workflow.',
  },
};

export default function BlogPage() {
  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <div className="flex flex-col w-full max-w-[990px] mx-auto py-16">
      <h1 className="text-zinc-950 text-[2.8rem] font-semibold leading-[150%] mb-[12px]">
        Kleo Blog
      </h1>
      <p className="text-zinc-600 font-['Inter'] leading-[160%] mb-10">
        Expert insights, tips, and strategies for leveraging AI in your social media management workflow.
      </p>
      
      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-12">
        <Link 
          href="/blog" 
          className="px-4 py-2 bg-zinc-900 text-white rounded-full text-sm font-medium"
        >
          All Posts
        </Link>
        {blogCategories.map((category) => (
          <Link 
            key={category.id}
            href={`/blog/category/${category.slug}`}
            className="px-4 py-2 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-full text-sm font-medium transition-colors"
          >
            {category.name}
          </Link>
        ))}
      </div>
      
      {/* Featured Post */}
      {sortedPosts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-zinc-950 text-2xl font-semibold mb-6">Featured Post</h2>
          <Link 
            href={`/blog/${sortedPosts[0].slug}`}
            className="block p-8 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-colors"
          >
            <div className="mb-4 text-sm text-zinc-600">
              {formatDate(sortedPosts[0].publishDate)} • {sortedPosts[0].readTime} min read
            </div>
            <h3 className="text-zinc-950 text-3xl font-semibold mb-3">{sortedPosts[0].title}</h3>
            <p className="text-zinc-600 mb-4">{sortedPosts[0].excerpt}</p>
            <div className="flex items-center mt-6">
              <div className="w-10 h-10 bg-zinc-300 rounded-full mr-3"></div>
              <div>
                <p className="text-zinc-900 font-semibold">{sortedPosts[0].author.name}</p>
                <p className="text-zinc-600 text-sm">{sortedPosts[0].author.title}</p>
              </div>
            </div>
          </Link>
        </div>
      )}
      
      {/* All Posts */}
      <div>
        <h2 className="text-zinc-950 text-2xl font-semibold mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sortedPosts.slice(1).map((post) => (
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
      </div>
      
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
