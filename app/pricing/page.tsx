"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/sections/header";
import { 
  Brain, 
  Calendar, 
  Upload, 
  MessageCircle,
  Check,
  ChevronDown,
  Star,
  X,
  Zap, 
  BarChart3, 
  Users, 
  Layers, 
  Settings,
  LifeBuoy,
  Sparkles
} from "lucide-react";

// Import social icons
import FacebookIcon from '@/assets/landingPage/social-icons/grayscale/Facebook.svg';
import InstagramIcon from '@/assets/landingPage/social-icons/grayscale/Instagram.svg';
import XIcon from '@/assets/landingPage/social-icons/grayscale/X.svg';
import LinkedInIcon from '@/assets/landingPage/social-icons/grayscale/LinkedIn.svg';
import GoogleIcon from '@/assets/landingPage/social-icons/grayscale/Google.svg';
import PinterestIcon from '@/assets/landingPage/social-icons/grayscale/Pinterest.svg';

import CtaSection from '@/components/sections/cta';

// Feature section data
type FeatureItem = {
  name: string;
  freeValue: string | React.ReactNode;
  proValue: string | React.ReactNode;
  description?: string;
};

type FeatureSection = {
  id: string;
  title: string;
  icon: React.ReactNode;
  freeLabel: string;
  proLabel: string;
  features: FeatureItem[];
};

const featureSections: FeatureSection[] = [
  {
    id: 'ai',
    title: 'AI Features',
    icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-[#f723f7]" />,
    freeLabel: 'Basic',
    proLabel: 'Advanced',
    features: [
      { 
        name: "Kleo AI Assistant", 
        freeValue: "❌", 
        proValue: "✅", 
        description: "AI assistant to help create and optimize your content" 
      },
      { 
        name: "Credits", 
        freeValue: "1,000", 
        proValue: "400,000", 
        description: "AI tokens used for content generation" 
      },
      { 
        name: "AI Content Creation", 
        freeValue: "✅", 
        proValue: "✅", 
        description: "Create fresh content with AI" 
      },
      { 
        name: "AI Content Optimization", 
        freeValue: "✅", 
        proValue: "✅", 
        description: "Improve your content with AI suggestions" 
      },
      { 
        name: "AI Caption writing", 
        freeValue: "✅", 
        proValue: "✅", 
        description: "Generate engaging captions with AI" 
      },
      { 
        name: "AI Hashtag recommendations", 
        freeValue: "✅", 
        proValue: "✅", 
        description: "Get relevant hashtag suggestions from AI" 
      },
      { 
        name: "AI Image generation", 
        freeValue: "✅", 
        proValue: "✅", 
        description: "Create images with AI based on your descriptions" 
      },
      { 
        name: "AI Auto-tagging", 
        freeValue: "✅", 
        proValue: "✅", 
        description: "Intelligently add tags to organize your content" 
      }
    ]
  },
  {
    id: 'pub',
    title: 'Publishing',
    icon: <Calendar className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-[#f723f7]" />,
    freeLabel: 'Basic',
    proLabel: 'Advanced',
    features: [
      { name: "Single post creation", freeValue: "✅", proValue: "✅", description: "Create and publish individual posts" },
      { name: "Multi post creation", freeValue: "15", proValue: "15", description: "Create multiple posts at once" },
      { name: "Bulk scheduling", freeValue: "✅", proValue: "✅", description: "Schedule multiple posts in advance" },
      { name: "Post Drafting", freeValue: "✅", proValue: "✅", description: "Save posts as drafts before publishing" },
      { name: "Multi-social publishing", freeValue: "✅", proValue: "✅", description: "Publish to multiple platforms at once" },
      { name: "Media gallery", freeValue: "✅", proValue: "✅", description: "Store and organize your media files" },
      { name: "Multimedia publishing", freeValue: "✅", proValue: "✅", description: "Publish various types of media content" },
      { name: "Built-in image editor", freeValue: "✅", proValue: "✅", description: "Edit images directly within the platform" },
      { name: "Location tagging", freeValue: "✅", proValue: "✅", description: "Add location data to your posts" },
      { name: "Campaign tagging", freeValue: "✅", proValue: "✅", description: "Organize posts by campaigns" },
      { name: "Digital asset & content library", freeValue: "✅", proValue: "✅", description: "Store and manage your digital assets" },
      { name: "Organize tags", freeValue: "✅", proValue: "✅", description: "Create a structured tagging system for your content" },
      { name: "Mentions", freeValue: "✅", proValue: "✅", description: "Tag and mention other profiles in your social posts" },
      { name: "Link shortening", freeValue: "✅", proValue: "✅", description: "Automatically shorten links for better engagement tracking" }
    ]
  },
  {
    id: 'int',
    title: 'Integrations',
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-[#f723f7]" />,
    freeLabel: 'Standard',
    proLabel: 'Advanced',
    features: [
      { name: "Facebook", freeValue: "✅", proValue: "✅", description: "Connect your Facebook pages and groups" },
      { name: "Instagram", freeValue: "✅", proValue: "✅", description: "Manage your Instagram feed, stories, and reels" },
      { name: "Twitter/X", freeValue: "✅", proValue: "✅", description: "Schedule tweets and monitor engagement" },
      { name: "Pinterest", freeValue: "✅", proValue: "✅", description: "Design and publish pins optimized for discovery" },
      { name: "LinkedIn", freeValue: "✅", proValue: "✅", description: "Post professional content optimized for LinkedIn" },
      { name: "Google Business", freeValue: "✅", proValue: "✅", description: "Manage your Google Business profile and posts" }
    ]
  },
  {
    id: 'team',
    title: 'Team',
    icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-[#f723f7]" />,
    freeLabel: '1 Member',
    proLabel: 'Unlimited',
    features: [
      { name: "Collaboration tools", freeValue: "❌", proValue: "✅", description: "Invite team members to collaborate on content" },
      { name: "Workspaces", freeValue: "1", proValue: "Unlimited", description: "Create separate workspaces for different teams or clients" }
    ]
  },
  {
    id: 'support',
    title: 'Support',
    icon: <LifeBuoy className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-[#f723f7]" />,
    freeLabel: 'Limited',
    proLabel: 'Priority',
    features: [
      { name: "Email Support", freeValue: "✅", proValue: "✅", description: "Get help via email" },
      { name: "Priority Support", freeValue: "❌", proValue: "✅", description: "Get faster response and dedicated support" }
    ]
  }
];

export default function PricingPage() {
  // State for billing cycle, channels, and members
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [channels, setChannels] = useState(1);
  const [members, setMembers] = useState(1);
  
  // State for expanded feature descriptions - store in a Map with section and index as key
  const [expandedFeatures, setExpandedFeatures] = useState<Record<string, boolean>>({});
  
  // State for collapsed sections
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({
    'ai': false,
    'pub': false,
    'int': false,
    'support': false,
    'team': false
  });
  
  // State for expanded FAQs
  const [expandedFaqs, setExpandedFaqs] = useState(new Set());

  // Function to toggle section collapse
  const toggleSection = (section: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  // Function to toggle description visibility
  const toggleDescription = (section: string, index: number) => {
    const key = `${section}-${index}`;
    setExpandedFeatures(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  // Check if a feature description is expanded
  const isExpanded = (section: string, index: number) => {
    const key = `${section}-${index}`;
    return !!expandedFeatures[key];
  };
  
  // Base price per channel
  const baseMonthlyPrice = 18;
  
  // Calculate price based on selections
  const calculatePrice = () => {
    let price = baseMonthlyPrice * channels;
    
    // Add $5 per additional member after the first one
    if (members > 1) {
      price += (members - 1) * 5;
    }
    
    // Apply yearly discount (16.67% discount - equivalent to 2 months free)
    if (billingCycle === 'yearly') {
      price = price * 10 / 12;
    }
    
    return price.toFixed(0);
  };
  
  // Handle channel increment/decrement
  const incrementChannels = () => {
    // Limit the maximum number of channels to 6
    if (channels < 6) {
      setChannels(channels + 1);
    }
  };
  
  const decrementChannels = () => {
    if (channels > 1) {
      setChannels(channels - 1);
    }
  };
  
  // Handle members increment/decrement
  const incrementMembers = () => {
    setMembers(members + 1);
  };
  
  const decrementMembers = () => {
    if (members > 1) {
      setMembers(members - 1);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plans for everyone's needs</h1>
          <p className="text-lg text-zinc-600 max-w-[600px] mx-auto">
            Kleo AI-first approach revolutionizes your content creation process. Effortlessly create, schedule, and post across all major social media platforms
          </p>
        </div>

        {/* Billing Toggle and Controls Section */}
        <div className="flex flex-col items-center gap-6">
          {/* Pricing Controls */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
            {/* Billing Cycle */}
            <div className="flex flex-col items-center">
              <div className="text-sm text-zinc-600 mb-2">Billing Cycle</div>
              <div className="flex bg-zinc-100 rounded-md p-1 w-[200px] relative overflow-hidden">
                {/* Animated sliding background */}
                <div 
                  className="absolute inset-y-1 w-[46%] bg-white rounded shadow-sm transition-all duration-300 ease-in-out"
                  style={{
                    left: billingCycle === 'monthly' ? '6px' : '50%'
                  }}
                />
                <button 
                  onClick={() => setBillingCycle('monthly')}
                  className={`flex-1 py-1.5 text-sm font-medium rounded z-10 transition-colors duration-300 ${
                    billingCycle === 'monthly' 
                      ? 'text-zinc-900' 
                      : 'text-zinc-500 hover:text-zinc-700'
                  }`}
                >
                  Monthly
                </button>
                
                <button 
                  onClick={() => setBillingCycle('yearly')}
                  className={`flex-1 py-1.5 text-sm font-medium rounded z-10 transition-colors duration-300 ${
                    billingCycle === 'yearly' 
                      ? 'text-zinc-900' 
                      : 'text-zinc-500 hover:text-zinc-700'
                  }`}
                >
                  Yearly
                </button>
              </div>
              <span className="text-xs text-[#f723f7] font-medium mt-2 transition-all duration-300">
                {billingCycle === 'yearly' ? '🎉 You get 2 months free with yearly!' : '🎉 Get 2 months free with yearly'}
              </span>
            </div>

            {/* Number of Channels */}
            <div className="flex flex-col items-center">
              <div className="text-sm text-zinc-600 mb-2">Number of Channels</div>
              <div className="flex items-center justify-between bg-zinc-100 rounded-md shadow-sm p-1 w-[160px]">
                <button 
                  onClick={decrementChannels}
                  className="w-9 h-9 flex items-center justify-center bg-white rounded-md text-zinc-500 hover:text-zinc-700 transition-colors"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="w-9 text-center font-medium">{channels}</div>
                <button 
                  onClick={incrementChannels}
                  className={`w-9 h-9 flex items-center justify-center bg-white rounded-md ${
                    channels >= 6 ? 'text-zinc-300 cursor-not-allowed' : 'text-zinc-500 hover:text-zinc-700 cursor-pointer'
                  } transition-colors`}
                >
                  <ChevronDown className="w-4 h-4 transform rotate-180" />
                </button>
              </div>
              <div className="flex gap-3 mt-2">
                <Link href="#" className="text-zinc-400 hover:text-zinc-600 transition-colors">
                  <FacebookIcon width={20} height={20} />
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-zinc-600 transition-colors">
                  <InstagramIcon width={20} height={20} />
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-zinc-600 transition-colors">
                  <XIcon width={20} height={20} />
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-zinc-600 transition-colors">
                  <PinterestIcon width={20} height={20} />
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-zinc-600 transition-colors">
                  <LinkedInIcon width={20} height={20} />
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-zinc-600 transition-colors">
                  <GoogleIcon width={20} height={20} />
                </Link>
              </div>
            </div>

            {/* Number of Team Members */}
            <div className="flex flex-col items-center">
              <div className="text-sm text-zinc-600 mb-2">Number of Team Members</div>
              <div className="flex items-center justify-between bg-zinc-100 rounded-md shadow-sm p-1 w-[160px]">
                <button 
                  onClick={decrementMembers}
                  className="w-9 h-9 flex items-center justify-center bg-white rounded-md text-zinc-500 hover:text-zinc-700 transition-colors"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="w-9 text-center font-medium">{members}</div>
                <button 
                  onClick={incrementMembers}
                  className="w-9 h-9 flex items-center justify-center bg-white rounded-md text-zinc-500 hover:text-zinc-700 cursor-pointer transition-colors"
                >
                  <ChevronDown className="w-4 h-4 transform rotate-180" />
                </button>
              </div>
              <span className="text-xs text-zinc-400 mt-2">$5/month per additional member</span>
            </div>
          </div>

          {/* Promo and Price Info */}
          <div className="flex flex-col items-center">
            <div className="text-xs text-zinc-400 mt-4 transition-all duration-300">
              
            </div>
          </div>
        </div>

        {/* Beta Pricing Notice - Repositioned and Restyled */}
        <div className="max-w-[1200px] w-[66%] mx-auto mt-6 mb-6 bg-zinc-50 border border-zinc-200 rounded-lg p-3 text-center">
          <p className="text-sm text-zinc-900 font-medium flex items-center justify-center gap-2">
            <Star className="h-4 w-4 text-[#f723f7]" />
              Current pricing is in beta and subject to change
            <Star className="h-4 w-4 text-[#f723f7]" />
          </p>
        </div>

        {/* Pricing Section with 3 columns - EXACTLY matching feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1200px] mx-auto">
          {/* Compare Plans Column */}
          <div className="col-span-1 flex flex-col justify-center items-start pr-12">
            <h2 className="text-3xl font-bold text-zinc-800 mb-4">Compare our plans.</h2>
            <p className="text-zinc-600">Choose the plan that's right for your business needs.</p>
          </div>

          {/* Free Plan - Column 2 */}
          <div className="col-span-1 border border-zinc-200 bg-zinc-50 rounded-xl p-6 flex flex-col relative overflow-hidden hover:shadow-md transition-all duration-300 h-full">
            <div className="absolute top-0 right-0 bg-zinc-500 text-white text-xs px-3 py-1 font-medium rounded-bl-md">
              Free Forever
            </div>
            <h3 className="text-xl font-bold mb-2 relative z-10">Free</h3>
            <div className="flex items-baseline mb-2">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-sm text-zinc-500 ml-1">
                /month
              </span>
            </div>
            <div className="text-xs text-zinc-500 mb-6 pb-2 border-b border-zinc-100">
              Perfect for individuals and small businesses
            </div>
            <ul className="mb-8 text-sm space-y-3 flex-grow">
              <li className="flex items-start text-zinc-500 line-through">
                <X className="w-4 h-4 text-zinc-400 mt-0.5 mr-2 flex-shrink-0" />
                <span>Kleo AI Assistant</span>
              </li>
              <li className="flex items-start">
                <Check className="w-4 h-4 text-zinc-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Connect up to 6 social channels</span>
              </li>
              <li className="flex items-start">
                <Check className="w-4 h-4 text-zinc-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>1 workspace</span>
              </li>
              <li className="flex items-start">
                <Check className="w-4 h-4 text-zinc-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>1 team member</span>
              </li>
              <li className="flex items-start">
                <Check className="w-4 h-4 text-zinc-500 mt-0.5 mr-2 flex-shrink-0" />
                <span>Community support</span>
              </li>
            </ul>
            <Link href="https://app.mykleo.ai/sign-up" className="bg-white border border-zinc-300 text-zinc-800 rounded-md py-2.5 px-4 text-sm font-medium hover:bg-zinc-50 hover:border-zinc-400 transition-all duration-300 mt-auto text-center group w-full">
              Get started <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Business Plan - Column 3 */}
          <div className="col-span-1 border border-purple-200 bg-white rounded-xl p-6 flex flex-col relative overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
            {/* Recommended Tag */}
            <div className="absolute top-0 right-0 bg-[#f723f7] text-white text-xs px-3 py-1 font-medium rounded-bl-md">
              Recommended
            </div>
            <h3 className="text-xl font-bold mb-2 relative z-10">Business</h3>
            <div className="flex items-baseline mb-2">
              <span className="text-3xl font-bold transition-all duration-300">
                ${calculatePrice()}
              </span>
              <span className="text-sm text-zinc-500 ml-1 transition-all duration-300">
                /{billingCycle === 'monthly' ? 'month' : 'month, billed yearly'}
              </span>
            </div>
            <div className="text-xs text-zinc-500 mb-6 pb-2 border-b border-zinc-100 transition-all duration-300">
              {channels === 1 && members === 1 
                ? 'for 1 channel and 1 member' 
                : channels === 1 
                  ? `for 1 channel and ${members} members` 
                  : `for ${channels} channels and ${members} ${members === 1 ? 'member' : 'members'}`}
            </div>
            <ul className="mb-8 text-sm space-y-3 flex-grow">
              <li className="flex items-start font-medium">
                <Check className="w-4 h-4 text-[#f723f7] mt-0.5 mr-2 flex-shrink-0" />
                <span className="flex items-center">
                  Kleo AI Assistant
                  <span className="ml-2 inline-flex px-2 py-0.5 text-[10px] rounded-full bg-[#f723f7]/10 text-[#f723f7]">Exclusive</span>
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-4 h-4 text-[#f723f7] mt-0.5 mr-2 flex-shrink-0" />
                <span>Connect up to {channels} {channels === 1 ? 'channel' : 'channels'}</span>
              </li>
              <li className="flex items-start">
                <Check className="w-4 h-4 text-[#f723f7] mt-0.5 mr-2 flex-shrink-0" />
                <span>Unlimited workspaces</span>
              </li>
              <li className="flex items-start">
                <Check className="w-4 h-4 text-[#f723f7] mt-0.5 mr-2 flex-shrink-0" />
                <span>Unlimited team members</span>
              </li>
              <li className="flex items-start">
                <Check className="w-4 h-4 text-[#f723f7] mt-0.5 mr-2 flex-shrink-0" />
                <span>Priority support</span>
              </li>
            </ul>
            <div className="mt-auto">
              <Link href="https://app.mykleo.ai/sign-up?plan=business" className="bg-[#f723f7] text-white rounded-md py-2.5 px-4 text-sm font-medium hover:bg-[#d620d6] shadow-sm hover:shadow-md transition-all duration-300 text-center group block">
                Try free for 7 days <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="max-w-[1200px] mx-auto mt-16 relative">
          {/* Background columns that align with the price cards */}
          <div className="absolute inset-0 grid grid-cols-3 gap-4 pointer-events-none">
            <div className="col-span-1"></div>
            <div className="col-span-1 bg-zinc-50 border border-zinc-200 rounded-lg h-full"></div>
            <div className="col-span-1 bg-white border border-purple-300 rounded-lg shadow-sm h-full"></div>
          </div>
            
          {/* Mobile background columns - visible on small screens */}
          {/* <div className="absolute inset-0 grid grid-cols-3 gap-1 sm:hidden pointer-events-none" style={{ top: '120px' }}>
            <div className="col-span-1"></div>
            <div className="col-span-1 bg-zinc-50 rounded-lg h-full"></div>
            <div className="col-span-1 bg-white border border-purple-200 rounded-lg shadow-sm h-full"></div>
          </div> */}
            
          <div className="grid grid-cols-3 gap-4 mb-8 pt-6 relative z-10">
            <div className="col-span-3 sm:col-span-1 flex justify-center sm:justify-start">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">Features</h3>
            </div>
            <div className="col-span-3 sm:col-span-1 flex justify-center">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">Free</h3>
            </div>
            <div className="col-span-3 sm:col-span-1 flex justify-center">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900">Business</h3>
            </div>
          </div>

          {/* Mobile headers for category names - more clear separation */}
          {/* <div className="block sm:hidden mb-4">
            <div className="text-center font-semibold text-lg text-[#f723f7] border-b pb-2">
              Feature Categories
            </div>
          </div> */}

          {featureSections.map((section, index) => (
            <React.Fragment key={section.id}>
              {/* Section Header */}
              <div className="grid grid-cols-3 gap-1 sm:gap-4 border-b border-zinc-100 pb-3 pt-8 mt-5 relative z-10 hover:bg-zinc-50/30 transition-colors duration-200 rounded-t-lg">
                <div className="col-span-1 flex items-center">
                  {section.icon}
                  <h4 className="text-sm sm:text-lg font-semibold text-zinc-900">{section.title}</h4>
                  <button 
                    onClick={() => toggleSection(section.id)} 
                    className={`ml-2 text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-md transition-all duration-300 ease-in-out flex items-center ${
                      collapsedSections[section.id] 
                      ? 'bg-zinc-100 text-zinc-600' 
                      : 'bg-[#f723f7] bg-opacity-10 text-[#f723f7]'
                    } hover:bg-[#f723f7] hover:text-white hover:shadow-sm`}
                  >
                    <span>{collapsedSections[section.id] ? 'Show' : 'Hide'}</span>
                    <ChevronDown 
                      className={`w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform duration-300 ease-in-out ${collapsedSections[section.id] ? '' : 'transform rotate-180'}`}
                    />
                  </button>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <div className="text-sm font-medium text-zinc-500">{section.freeLabel}</div>
                </div>
                <div className="col-span-1 flex items-center justify-center">
                  <div className="text-sm font-medium text-[#f723f7]">{section.proLabel}</div>
                </div>
              </div>

              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  collapsedSections[section.id] 
                  ? 'max-h-0 opacity-0 translate-y-[-8px]' 
                  : 'max-h-[1200px] opacity-100 translate-y-0'
                }`}
              >
                {section.features.map((feature, index) => (
                  <div 
                    key={`feature-${index}`} 
                    className="grid grid-cols-3 gap-1 sm:gap-4 py-2 sm:py-3 border-b border-zinc-100 cursor-pointer hover:bg-zinc-50 transition-colors duration-150 relative z-10"
                    onClick={() => toggleDescription(section.id, index)}
                  >
                    <div className="col-span-1 px-3 flex flex-col justify-center">
                      <div className="text-sm font-medium flex items-center">
                        <span className="text-xs sm:text-sm">{feature.name}</span>
                        <ChevronDown 
                          className={`w-3 h-3 sm:w-4 sm:h-4 ml-1 text-zinc-400 transition-transform duration-200 ${isExpanded(section.id, index) ? 'transform rotate-180' : ''}`} 
                        />
                      </div>
                      <div 
                        className={`mt-2 text-xs sm:text-sm text-zinc-500 overflow-hidden transition-all duration-300 ${
                          isExpanded(section.id, index) ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        {feature.description}
                      </div>
                    </div>
                    <div className="col-span-1 flex items-center justify-center">
                      {feature.freeValue === "❌" ? (
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400" />
                      ) : (
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#f723f7]" />
                      )}
                    </div>
                    <div className="col-span-1 flex items-center justify-center">
                      {feature.proValue === "✅" ? (
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#f723f7]" />
                      ) : (
                        <span className="text-xs sm:text-sm font-medium text-[#f723f7]">{feature.proValue}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Agency Section */}
        <div className="mt-8 border border-zinc-200 bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto">
          <div>
            <h3 className="text-lg font-bold">Agency</h3>
            <p className="text-sm text-zinc-500">Are you an agency? We are always developing custom features for you.</p>
          </div>
          <Link href="/contact" className="mt-4 md:mt-0 bg-white border border-zinc-300 text-zinc-800 rounded-md py-2 px-4 text-sm font-medium hover:bg-zinc-50 transition-colors">
            Get in touch
          </Link>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-[1200px] mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <p className="text-zinc-600 mt-2">Everything you need to know about our pricing and plans</p>
          </div>
          
          <div className="grid gap-4">
            {[
              {
                question: "Can I switch between monthly and yearly billing?",
                answer: "Yes, you can switch between monthly and yearly billing at any time. When switching to yearly, you'll get 2 months free. If you switch from yearly to monthly, the change will take effect at the end of your current billing cycle."
              },
              {
                question: "What counts as a channel?",
                answer: "A channel is any connected social media account. For example, one Facebook page, one Instagram account, or one Twitter account each count as one channel."
              },
              {
                question: "What happens if I need more than 6 channels?",
                answer: "If you need more than 6 channels, please contact our sales team for a custom enterprise plan that can accommodate your needs."
              },
              {
                question: "Can I cancel my subscription at any time?",
                answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to your paid features until the end of your current billing period."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 7-day free trial on our Business plan, so you can try before you buy. After that, we don't provide refunds for partial months or years of service."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support payment via PayPal."
              }
            ].map((faq, index) => (
              <div 
                key={`faq-${index}`} 
                className="border border-zinc-200 rounded-xl p-5 bg-white transition-all duration-200 hover:shadow-sm cursor-pointer"
                onClick={() => {
                  setExpandedFaqs(prev => {
                    const newSet = new Set(prev);
                    if (newSet.has(index)) {
                      newSet.delete(index);
                    } else {
                      newSet.add(index);
                    }
                    return newSet;
                  });
                }}
              >
                <div className="font-medium text-zinc-900 flex justify-between items-center">
                  <span>{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${
                      expandedFaqs.has(index) ? 'transform rotate-180' : ''
                    }`} 
                  />
                </div>
                <div 
                  className={`mt-2 text-sm text-zinc-600 overflow-hidden transition-all duration-300 ${
                    expandedFaqs.has(index) 
                      ? 'max-h-64 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 mb-10 max-w-[1200px] mx-auto">
          <CtaSection width="100%" containerClassName="" />
        </div>
      </main>
    </div>
  );
}