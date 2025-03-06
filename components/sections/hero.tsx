import HeroBG from "@/assets/landingPage/heroBG.svg";
import HeroBGPNG from "@/assets/landingPage/heroBG.png";
import RightArrow from "@/assets/landingPage/right-arrow.svg";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center px-4 sm:px-6 mt-[40px] md:mt-[84px]">
      {/* <img src={HeroBGPNG.src} alt="Hero Background" className="fixed inset-0 -z-10 w-screen h-screen object-cover" /> */}
      <div className="fixed inset-0 -z-10 w-screen h-screen">
        {/* <HeroBG className="min-w-full min-h-full object-cover" /> */}
        {/* Gradient overlay */}
        {/* <div className="absolute inset-0 
        
        bg-gradient-to-r from-white via-transparent to-white
        bg-gradient-to-t from-white via-transparent via-100%
        ">
        </div> */}
      </div>

      <h1 className="w-full max-w-[620px] text-zinc-950 text-center text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] font-semibold leading-[130%] md:leading-[150%] mb-[12px]">
        AI-Powered Social Media<br className="hidden sm:block" /> Management
      </h1>
      <p className="w-full max-w-[796px] text-zinc-600 text-center font-['Inter'] text-sm sm:text-base leading-[160%]">
        Transform your social media workflow with AI-driven <br className="hidden sm:block" /> insights, scheduling, and analytics - all in one collaborative space.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-1 mt-[24px] sm:mt-[34px] mb-[30px]">
        <Link href="https://app.mykleo.ai/sign-up" className="w-full sm:w-auto button flex justify-center items-center gap-2.5 py-2 px-4 rounded-md border border-[#f723f7] bg-[#f723f7] text-neutral-50 text-center font-['Inter'] text-xs font-semibold leading-[normal]">
            Start your 7-day free trial
        </Link>
        <Link href="/pricing" className="w-full sm:w-auto button-1 flex justify-center items-center gap-1 py-2 px-4 rounded-md">
            <div className="text-zinc-950 text-center font-['Inter'] text-xs font-semibold leading-[normal]">Find your plan</div>
            <RightArrow />
        </Link>
      </div>
      <div className="w-full max-w-[1000px] h-[300px] sm:h-[400px] md:h-[570px] rounded-[16px] border-[6px] border-zinc-200 bg-zinc-900" />
    </div>
  );
}