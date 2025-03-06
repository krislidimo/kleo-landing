import KleoAssistantBento from "@/assets/landingPage/kleo-assistant-bento.svg";
import BrandVoiceBento from "@/assets/landingPage/brand-voice-bento.svg";
import SmartPromptsBento from "@/assets/landingPage/smart-prompts-bento.svg";
import BulkContentBento from "@/assets/landingPage/bulk-content-bento.svg";


export default function ProductivitySection() {
    return (
      <div className="flex flex-col w-full max-w-[990px] mx-auto mt-[60px] md:mt-[116px] px-4 sm:px-6 text-left">
          <h2 className="text-zinc-950 text-[2rem] md:text-[2.8rem] font-semibold leading-[130%] md:leading-[150%] mb-[12px]">AI-Enhanced Efficiency</h2>
          <p className="text-zinc-600 font-['Inter'] text-sm sm:text-base leading-[160%] tracking-[-0.16px]">
            Kleo is your AI companion that revolutionizes social media management, learning <br className="hidden md:block" /> 
            and adapting to your brand's unique voice while automating the heavy lifting.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[30px] md:mt-[40px]">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col justify-between h-auto md:h-[269px] w-full bg-zinc-100 border border-zinc-200 rounded-xl overflow-hidden">
                <BrandVoiceBento className="w-full h-full" />
                <div className="pl-[20px] md:pl-[28px] pb-[20px] md:pb-[28px]">
                  <div className="mb-[4px] text-zinc-950 text-xl md:text-2xl font-['Inter'] font-semibold leading-[28.80px]">
                    Your Own Brand Voices
                  </div>
                  <div className="text-zinc-600 text-sm md:text-base font-['Inter'] leading-relaxed">
                    AI that captures and maintains your unique brand voice across all social channels.
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-between h-auto md:h-[269px] w-full bg-zinc-100 border border-zinc-200 rounded-xl overflow-hidden">
                <BulkContentBento className="w-full h-full" />
                <div className="pl-[20px] md:pl-[28px] pb-[20px] md:pb-[28px]">
                  <div className="mb-[4px] text-zinc-950 text-xl md:text-2xl font-['Inter'] font-semibold leading-[28.80px]">
                    Bulk AI Content Creation
                  </div>
                  <div className="text-zinc-600 text-sm md:text-base font-['Inter'] leading-relaxed">
                    Generate weeks of platform-specific content in minutes while maintaining consistent messaging.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-between h-auto md:h-[558px] bg-zinc-900 rounded-xl overflow-hidden">
              <KleoAssistantBento className="w-full h-full" />
              <div className="pl-[20px] md:pl-[28px] pb-[20px] md:pb-[28px]">
                <div className="inline-flex items-center mb-2 h-[25px] px-3 py-1 bg-[#f723f7]/5 rounded-[100px] border border-[#f723f7] gap-1 ">
                    <div className="text-center text-[#f723f7] text-sm font-normal font-['Inter']">Updated</div>
                </div>
  
                <div className="mb-[4px] text-neutral-50 text-xl md:text-2xl font-['Inter'] font-semibold leading-[28.80px]">
                  Meet Kleo Assistant
                </div>
                <div className="text-neutral-400 text-sm md:text-base font-['Inter'] leading-relaxed">
                  Your AI partner that learns your brand's tone and style, providing real-time content suggestions and optimization.
                </div>
              </div>
            </div>
            
            <div className="relative h-auto md:h-[130px] flex flex-col md:flex-row justify-between items-center col-span-1 md:col-span-2 bg-zinc-100 border border-zinc-200 rounded-xl overflow-hidden">
              <div className="pl-[20px] md:pl-[28px] py-[20px] md:py-0">
                <div className="mb-[4px] text-zinc-950 text-xl md:text-2xl font-['Inter'] font-semibold leading-[28.80px]">
                  Custom Smart Prompts
                </div>
                <div className="text-zinc-600 text-sm md:text-base font-['Inter'] leading-relaxed">
                  Custom-tailored prompt templates that ensure <br className="hidden md:block" /> 
                  consistent, on-brand content generation.
                </div>
              </div>
              <SmartPromptsBento className="w-full md:w-auto h-[150px] md:h-full" />
            </div>
          </div>
      </div>
    );
  }