import BlogImage from "@/assets/landingPage/blog-image.png";
import HelpCenterImage from "@/assets/landingPage/help-center-image.png";
import VideoGuidesImage from "@/assets/landingPage/video-guides-image.png";

import Link from "next/link";
import Image from "next/image";

export default function ResourcesSection() {
    return (
      <div className="flex flex-col items-center mt-[80px] md:mt-[160px] max-w-[990px] mx-auto px-4 sm:px-6 lg:px-0 text-left">
        <div className="w-full text-center mb-[24px] md:mb-[34px]">
          <h2 className="text-zinc-950 text-[2rem] md:text-[2.8rem] font-semibold leading-[130%] md:leading-[150%] mb-[12px] tracking-[-1.1px]">Resources</h2>
          <p className="text-zinc-600 font-['Inter'] text-sm sm:text-base leading-[160%] tracking-[-0.16px]">Explore our resources to help you get started with Kleo and grow your business.</p>
        </div>
  
        <div className="flex flex-col md:flex-row items-center gap-[20px] md:gap-[10px] w-full">
          <div className="w-full md:grow md:shrink md:basis-0 p-3.5 bg-white shadow-sm shadow-zinc-200 rounded-xl border border-zinc-100 flex-col justify-start items-start gap-[18px]">
            <Image width={360} height={180} className="w-full lg:h-[180px] object-cover rounded-md" src={BlogImage.src} alt="Blog" />
            <div className="self-stretch p-2.5 mt-[18px] flex-col justify-start items-start gap-[22px] flex">
              <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch text-zinc-700 text-lg font-semibold font-['Inter'] leading-[28.80px] tracking-[-0.16px]">Blog</div>
                <div className="self-stretch text-zinc-600 text-sm font-normal font-['Inter'] leading-snug">
                  Discover expert strategies, best practices, and insider tips to elevate your social media presence.
                </div>
              </div>
              <Link href="https://blog.mykleo.ai" className="px-3 py-1.5 bg-zinc-800 rounded-md justify-center items-center gap-2.5 inline-flex">
                <div className="text-zinc-50 text-sm font-medium font-['Inter'] leading-normal">Read our blog</div>
              </Link>
            </div>
          </div>
  
          <div className="w-full md:grow md:shrink md:basis-0 p-3.5 bg-white shadow-sm shadow-zinc-200 rounded-xl border border-zinc-100 flex-col justify-start items-start gap-[18px]">
            <Image width={360} height={180} className="w-full lg:h-[180px] object-cover rounded-md" src={HelpCenterImage.src} alt="Help Center" />
            <div className="self-stretch p-2.5 mt-[18px] flex-col justify-start items-start gap-[22px] flex">
              <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch text-zinc-700 text-lg font-semibold font-['Inter'] leading-[28.80px] tracking-[-0.16px]">Help Center</div>
                <div className="self-stretch text-zinc-600 text-sm font-normal font-['Inter'] leading-snug">
                  Get instant answers to common questions and troubleshooting guides for all Kleo features.
                </div>
              </div>
              <Link href="https://support.mykleo.ai" className="px-3 py-1.5 bg-zinc-800 rounded-md justify-center items-center gap-2.5 inline-flex">
                <div className="text-zinc-50 text-sm font-medium font-['Inter'] leading-normal">Visit our help center</div>
              </Link>
            </div>
          </div>
  
          <div className="w-full md:grow md:shrink md:basis-0 p-3.5 bg-white shadow-sm shadow-zinc-200 rounded-xl border border-zinc-100 flex-col justify-start items-start gap-[18px]">
            <Image width={360} height={180} className="w-full lg:h-[180px] object-cover rounded-md" src={VideoGuidesImage.src} alt="Video Guides" />
            <div className="self-stretch p-2.5 mt-[18px] flex-col justify-start items-start gap-[22px] flex">
              <div className="self-stretch flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch text-zinc-700 text-lg font-semibold font-['Inter'] leading-[28.80px] tracking-[-0.16px]">Video Guides</div>
                <div className="self-stretch text-zinc-600 text-sm font-normal font-['Inter'] leading-snug">
                  Master Kleo's tools with bite-sized video tutorials and walkthroughs for every feature.
                </div>
              </div>
              <Link href="" className="flex justify-center items-center px-3 py-1.5 bg-zinc-400 cursor-not-allowed disabled:opacity-50 disabled:cursor-not-allowed rounded-md">
                <div className="text-zinc-50 text-sm font-medium font-['Inter'] leading-normal select-none">Coming soon</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }