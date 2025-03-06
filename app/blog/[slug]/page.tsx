import { blogPosts, blogCategories, BlogPost } from '@/lib/blog-content';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Kleo Blog',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://mykleo.ai/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishDate,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.metaDescription,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  // Get category details
  const category = blogCategories.find((cat) => cat.id === post.category);
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Get related posts
  const relatedPosts = post.relatedPosts 
    ? blogPosts.filter(p => post.relatedPosts?.includes(p.slug))
    : [];
  
  return (
    <div className="flex flex-col w-full max-w-[800px] mx-auto py-16">
      {/* Breadcrumbs */}
      <div className="text-sm text-zinc-600 mb-8">
        <Link href="/" className="hover:text-zinc-900">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/blog" className="hover:text-zinc-900">Blog</Link>
        <span className="mx-2">›</span>
        <Link href={`/blog/category/${category?.slug || ''}`} className="hover:text-zinc-900">
          {category?.name || 'Category'}
        </Link>
        <span className="mx-2">›</span>
        <span className="text-zinc-900">{post.title}</span>
      </div>
      
      {/* Post Header */}
      <div className="mb-10">
        <h1 className="text-zinc-950 text-[2.8rem] font-semibold leading-[130%] mb-6">
          {post.title}
        </h1>
        
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-zinc-300 rounded-full mr-4"></div>
          <div>
            <p className="text-zinc-900 font-semibold">{post.author.name}</p>
            <p className="text-zinc-600 text-sm">{post.author.title}</p>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-zinc-600">
          <span>{formatDate(post.publishDate)}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} min read</span>
          <span className="mx-2">•</span>
          <Link 
            href={`/blog/category/${category?.slug || ''}`}
            className="text-[#f723f7] hover:underline"
          >
            {category?.name || 'Category'}
          </Link>
        </div>
      </div>
      
      {/* Post Content */}
      <div className="prose prose-lg max-w-none mb-16">
        <div dangerouslySetInnerHTML={{ 
          __html: post.content
            .replace(/^# .+$/m, '') // Remove the first h1 as we already display it
            .replace(/^## (.+)$/gm, '<h2>$1</h2>')
            .replace(/^### (.+)$/gm, '<h3>$1</h3>')
            .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
            .replace(/^- (.+)$/gm, '<li>$1</li>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#f723f7] hover:underline">$1</a>')
        }} />
      </div>
      
      {/* Tags */}
      <div className="mb-16">
        <h3 className="text-zinc-900 font-semibold mb-3">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link 
              key={tag}
              href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className="px-3 py-1 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-full text-sm transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
      
      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mb-16">
          <h2 className="text-zinc-950 text-2xl font-semibold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link 
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className="block p-6 bg-zinc-100 rounded-xl hover:bg-zinc-200 transition-colors"
              >
                <h3 className="text-zinc-950 text-xl font-semibold mb-2">{relatedPost.title}</h3>
                <p className="text-zinc-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                <div className="text-sm text-zinc-600">
                  {formatDate(relatedPost.publishDate)} • {relatedPost.readTime} min read
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      {/* Newsletter Signup */}
      <div className="p-8 bg-zinc-900 rounded-xl text-center">
        <h2 className="text-white text-2xl font-semibold mb-4">Enjoyed this article?</h2>
        <p className="text-zinc-300 mb-6 max-w-xl mx-auto">
          Subscribe to our newsletter to receive more insights on AI social media management.
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
      
      {/* Back to Blog */}
      <div className="mt-10 text-center">
        <Link 
          href="/blog"
          className="text-[#f723f7] font-medium hover:underline"
        >
          ← Back to all articles
        </Link>
      </div>
    </div>
  );
}
