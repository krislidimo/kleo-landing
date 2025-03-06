import ConnectSocials from "@/assets/landingPage/connect-socials.svg";
import AutomateTags from "@/assets/landingPage/automate-tags.svg";
import OptimizePosts from "@/assets/landingPage/optimize-posts.svg";

import Link from "next/link";
export default function IntelligenceSection() {
    return (
      <div className="w-full bg-zinc-50/80 py-[60px] mt-[60px] md:py-[60px] border-t border-b border-zinc-200">
        <div className="flex flex-col max-w-[990px] w-full mx-auto px-4 sm:px-6">
          <div className="w-full mb-[30px] md:mb-[40px]">
            <h2 className="text-zinc-950 text-[2rem] md:text-[2.8rem] font-semibold leading-[130%] md:leading-[150%] mb-[12px] tracking-[-0.9px]">Your Complete AI Social Suite</h2>
            <p className="text-zinc-600 font-['Inter'] text-sm sm:text-base leading-[160%] tracking-[-0.16px]">
              One powerful platform that connects all your social networks in a unified workspace. <br className="hidden md:block" /> 
              From content creation to performance analytics, work smarter across every aspect <br className="hidden md:block" /> 
              of your social media presence
            </p>
          </div>
    
          <div className="flex flex-col justify-around md:flex-row justify-center gap-6 items-center w-full text-left mt-6">
            <div className="w-full md:w-auto overflow-visible">
              <ConnectSocials className="overflow-visible mx-auto h-auto w-auto" />
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <div className="text-zinc-950 text-xl md:text-2xl font-semibold font-['BR Cobane'] leading-[28.80px] tracking-[-1.1px]">Connect your socials</div>
              <div className="text-zinc-600 text-sm md:text-base font-normal font-['Inter'] leading-relaxed tracking-[-0.16px]">
                Connect and manage all your major social media <br className="hidden md:block" />
                platforms in one place. Simplify your workflow and <br className="hidden md:block" />
                focus on growing your online presence with ease.
              </div>
              <Link href="https://app.mykleo.ai/signup" className="h-[34px] px-4 py-2 mt-2 bg-zinc-950 rounded-md shadow-sm text-center text-neutral-50 text-xs font-semibold font-['Inter']">Get connected</Link>
            </div>
          </div>
    
          <div className="flex justify-around flex-col-reverse md:flex-row items-center gap-6 mt-[60px] md:mt-[116px] w-full text-left">
            <div className="flex flex-col justify-start items-start gap-1">
              <div className="text-zinc-950 text-xl md:text-2xl font-semibold font-['BR Cobane'] leading-[28.80px] tracking-[-1.1px]">Automate your tags</div>
              <div className="text-zinc-600 text-sm md:text-base font-normal font-['Inter'] leading-relaxed tracking-[-0.16px]">
                Organize all your social content with smart <br className="hidden md:block" />
                categorization. Easily sort, manage, and find what <br className="hidden md:block" />
                you need to streamline your content strategy.
              </div>
              <Link href="https://app.mykleo.ai/signup" className="h-[34px] px-4 py-2 mt-2 bg-zinc-950 rounded-md shadow-sm text-center text-neutral-50 text-xs font-semibold font-['Inter']">Organize your posts</Link>
            </div>
            <div className="overflow-visible mx-auto">
              <AutomateTags className="w-full " />
            </div>
          </div>
    
          <div className="flex flex-col items-center justify-center lg:justify-around gap-8 md:flex-row  mt-[60px] md:mt-[124px] w-full text-left">
            <div className="overflow-visible mx-auto">
              <OptimizePosts className="w-full " />
            </div>

            <div className="flex flex-col justify-start items-start gap-1">
              <div className="inline-flex items-center mb-2 h-[25px] px-3 py-1 bg-[#f723f7]/5 rounded-[100px] border border-[#f723f7] gap-1">
                <div className="text-center text-[#f723f7] text-sm font-normal font-['Inter']">Coming soon</div>
              </div>
              <div className="text-zinc-950 text-xl md:text-2xl font-semibold font-['BR Cobane'] leading-[28.80px] tracking-[-1.1px]">Optimize your posts</div>
              <div className="text-zinc-600 text-sm md:text-base font-normal font-['Inter'] leading-relaxed tracking-[-0.16px]">
                Boost your reach with AI-optimized posting times. <br className="hidden md:block" />
                Schedule content when your audience is most active <br className="hidden md:block" />
                for maximum engagement.
              </div>
              <Link href="https://app.mykleo.ai/signup" className="h-[34px] px-4 py-2 mt-2 bg-zinc-950 rounded-md shadow-sm text-center text-neutral-50 text-xs font-semibold font-['Inter']">Optimize posting times</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }