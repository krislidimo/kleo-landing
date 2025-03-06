import ArrowUpRightIcon from "@/assets/landingPage/arrow-up-right.svg";
import GridBG from "@/assets/landingPage/gridBG.png";

export default function OpenaiCallout() {
    return (
      <div className="relative flex flex-col  items-center py-[50px] sm:py-[60px] md:py-[70px] px-4 sm:px-6 md:px-10 lg:px-40 max-w-[990px] w-full mx-auto mt-[60px] md:mt-[120px] min-h-[200px] md:min-h-[269px] bg-zinc-950 rounded-xl overflow-hidden">
        <img className="w-full h-full object-cover absolute left-0 top-0" src={GridBG.src} />
        <div className="flex flex-col justify-center items-center w-full gap-4 z-10">
          <div className="w-full max-w-[644px] text-center tracking-[-1.2px]">
            <span className="text-zinc-50 text-xl sm:text-2xl md:text-[27px] font-bold font-['BR Cobane'] leading-tight md:leading-10">Powered by </span>
            <span className="text-[#f723f7] text-xl sm:text-2xl md:text-[27px] font-bold font-['BR Cobane'] leading-tight md:leading-10">OpenAI</span>
            <span className="text-zinc-50 text-xl sm:text-2xl md:text-[27px] font-bold font-['BR Cobane'] leading-tight md:leading-10">'s most advanced models </span>
          </div>
          <div className="self-stretch text-center text-zinc-300 text-xs sm:text-sm font-normal font-['Inter'] leading-[1.6] sm:leading-[25.20px] tracking-[-0.16px]">
            Instantly create engaging, AI-tailored posts for your social channels. From fresh ideas to rewrites and <br className="hidden sm:block" /> translations, Kleo saves you hours while keeping your content sharp.
          </div>
        </div>
        
        {/* <div className="flex mt-[20px] sm:mt-[26px] md:mt-[30px] px-4 py-2 w-fit bg-zinc-50 rounded-md justify-center items-center gap-2.5 z-10">
          <div className="text-zinc-800 text-sm font-medium font-['Inter'] leading-normal">Learn more</div>
          <ArrowUpRightIcon />
        </div> */}
      </div>
    );
  }