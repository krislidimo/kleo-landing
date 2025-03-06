import { MetadataRoute } from 'next';
import { useCases, industries, featurePages } from '@/lib/seo-content';
import { blogPosts, blogCategories } from '@/lib/blog-content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mykleo.ai';
  
  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/use-cases`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/features`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];
  
  // Use case routes
  const useCaseRoutes = useCases.map((uc) => ({
    url: `${baseUrl}/use-cases/${uc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  // Industry routes
  const industryRoutes = industries.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  // Feature routes
  const featureRoutes = featurePages.map((feat) => ({
    url: `${baseUrl}/features/${feat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  // Blog category routes
  const blogCategoryRoutes = blogCategories.map((category) => ({
    url: `${baseUrl}/blog/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));
  
  // Blog post routes
  const blogPostRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  
  return [...routes, ...useCaseRoutes, ...industryRoutes, ...featureRoutes, ...blogCategoryRoutes, ...blogPostRoutes];
}
