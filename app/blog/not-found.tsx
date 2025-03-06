import Link from 'next/link';

export default function BlogNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4">
      <h1 className="text-zinc-950 text-4xl font-semibold mb-4">Blog Post Not Found</h1>
      <p className="text-zinc-600 text-lg mb-8 text-center max-w-md">
        The blog post you're looking for doesn't exist or may have been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/blog"
          className="px-6 py-3 bg-[#f723f7] text-white rounded-md font-medium text-center"
        >
          Browse All Articles
        </Link>
        <Link 
          href="/"
          className="px-6 py-3 bg-zinc-100 text-zinc-800 rounded-md font-medium text-center"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
