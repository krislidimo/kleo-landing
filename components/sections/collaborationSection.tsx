import TeamCollaboration from "@/assets/landingPage/team-collaboration.svg";

import CalendarIcon from "@/assets/landingPage/Icons/calendar-icon.svg";
import PointerIcon from "@/assets/landingPage/Icons/pointer-icon.svg";
import PictureIcon from "@/assets/landingPage/Icons/picture-icon.svg";
import ChatIcon from "@/assets/landingPage/Icons/chat-icon.svg";

export default function CollaborationSection() {
    return (
      <div className="flex flex-col items-center mt-[60px] md:mt-[116px] px-4 sm:px-6 text-left">
        <div className="max-w-[990px] w-full mx-auto text-center mb-[40px] md:mb-[60px]">
          <h2 className="text-zinc-950 text-[2rem] md:text-[2.8rem] font-semibold leading-[130%] md:leading-[150%] mb-[12px]">Team Synergy, Simplified</h2>
          <p className="text-zinc-600 font-['Inter'] text-sm sm:text-base leading-[160%] tracking-[-0.16px]">
            Bring your team together with intuitive tools designed for seamless collaboration.<br className="hidden sm:block" />
            Keep everyone aligned and moving in the same direction.
          </p>
        </div>
  
        <div className="relative flex justify-center items-center w-full overflow-hidden rounded-xl">
          <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-white to-transparent z-10" />
          <TeamCollaboration className=" " />
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-white to-transparent z-10" />
        </div>
  
        <div className="max-w-[990px] mt-[40px] md:mt-[62px] mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-[70px] gap-y-8 items-start justify-between">
          {/* Feature 1 */}
          <div className="flex flex-col justify-center items-start gap-3 p-4 sm:p-0 bg-white/50 sm:bg-transparent rounded-lg sm:rounded-none">
            <CalendarIcon className="h-8 w-8" />
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="text-zinc-950 text-xl md:text-2xl font-semibold font-['BR Cobane'] leading-[28.80px] tracking-[-1.1px]">Shared Calendar</div>
              <div className="w-full text-zinc-600 text-sm md:text-base font-normal font-['Inter'] leading-relaxed tracking-[-0.16px]">Work in sync with your team to schedule posts for your brand.</div>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col justify-center items-start gap-3 p-4 sm:p-0 bg-white/50 sm:bg-transparent rounded-lg sm:rounded-none">
            <PointerIcon className="h-8 w-8" />
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="text-zinc-950 text-xl md:text-2xl font-semibold font-['BR Cobane'] leading-[28.80px] tracking-[-1.1px]">Team Workspaces</div>
              <div className="w-full text-zinc-600 text-sm md:text-base font-normal font-['Inter'] leading-relaxed tracking-[-0.16px]">Create dedicated spaces for different brands</div>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col justify-center items-start gap-3 p-4 sm:p-0 bg-white/50 sm:bg-transparent rounded-lg sm:rounded-none">
            <PictureIcon className="h-8 w-8" />
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="text-zinc-950 text-xl md:text-2xl font-semibold font-['BR Cobane'] leading-[28.80px] tracking-[-1.1px]">Smart Asset Library</div>
              <div className="w-full text-zinc-600 text-sm md:text-base font-normal font-['Inter'] leading-relaxed tracking-[-0.16px]">AI-tagged content management for quick access.</div>
            </div>
          </div>
          
          {/* Feature 4 */}
          <div className="flex flex-col justify-center items-start gap-3 p-4 sm:p-0 bg-white/50 sm:bg-transparent rounded-lg sm:rounded-none">
            <ChatIcon className="h-8 w-8" />
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="text-zinc-950 text-xl md:text-2xl font-semibold font-['BR Cobane'] leading-[28.80px] tracking-[-1.1px]">Shared Chat History</div>
              <div className="w-full text-zinc-600 text-sm md:text-base font-normal font-['Inter'] leading-relaxed tracking-[-0.16px]">Keep everyone in sync with a unified conversation history with Kleo.</div>
            </div>
          </div>
        </div>
      </div>
    );
  }