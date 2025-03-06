"use client";
import {BackgroundGradientAnimation} from "@/components/background-gradient-animation";
import Link from "next/link";
import { useState, useEffect } from "react";

interface CtaSectionProps {
  className?: string;
  containerClassName?: string;
  width?: string;
}

export default function CtaSection({ 
  className = "",
  containerClassName = "max-w-[990px] mt-[60px] md:mt-[120px]",
  width = ""
}: CtaSectionProps) {
    const [isAnimationLoaded, setIsAnimationLoaded] = useState(false);
    
    // Simulate animation loading with a slight delay
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsAnimationLoaded(true);
      }, 800); // Delay showing animation to ensure it's fully loaded
      
      return () => clearTimeout(timer);
    }, []);
    
    return (
        <div className={`shadow-lg bg-[#1a1a2e] h-[200px] sm:h-[230px] md:h-[260px] mx-auto rounded-xl relative overflow-hidden ${containerClassName}`} style={{ width: width || '100%' }}>

          
          {/* Static content that will always be visible */}
          <div className={`flex flex-col items-center justify-center absolute w-full h-full px-4 sm:px-6 md:px-8 z-[5] transition-opacity duration-500 ${isAnimationLoaded ? 'opacity-0' : 'opacity-100'} ${className}`}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-4 tracking-[-1.2px] md:tracking-[-2.4px] text-center">
              Join the AI Social Revolution
            </h2>
            <p className="text-zinc-200 mb-4 sm:mb-6 tracking-[0.3px] text-sm sm:text-base text-center">
              Experience the future of social media management
            </p>
            <Link 
              href="https://app.mykleo.ai/sign-up" 
              className="group px-3 py-1.5 bg-zinc-50 rounded-md justify-center items-center gap-2.5 inline-flex 
                transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-white hover:to-blue-50
                hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] 
                active:scale-95 active:shadow-inner"
            >
              <div className="px-4 text-zinc-900 text-sm font-medium font-['Inter'] leading-normal transition-colors duration-300 ease-in-out
                bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text group-hover:text-transparent">Start Your Journey</div>
            </Link>
          </div>
          
          {/* Animated background that will be hidden until loaded */}
          <div className={`absolute w-full h-full top-0 left-0 transition-opacity duration-500 ${isAnimationLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <BackgroundGradientAnimation
              containerClassName="w-full h-full absolute top-0 left-0 rounded-xl"
              className={`flex flex-col items-center justify-center z-10 absolute w-full h-full px-4 sm:px-6 md:px-8 ${className}`}
              gradientBackgroundStart="#1a1a2e"
              gradientBackgroundEnd="#16213e"
              firstColor="70, 120, 255"
              secondColor="111, 74, 217"
              thirdColor="64, 185, 231"
              fourthColor="142, 45, 226"
              fifthColor="25, 118, 210"
              pointerColor="111, 76, 255"
              blendingValue="screen"
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 sm:mb-4 tracking-[-1.2px] md:tracking-[-2.4px] text-center">
                Join the AI Social Revolution
              </h2>
              <p className="text-zinc-200 mb-4 sm:mb-6 tracking-[0.3px] text-sm sm:text-base text-center">
                Experience the future of social media management
              </p>
              <Link 
                href="https://app.mykleo.ai/sign-up" 
                className="group px-3 py-1.5 bg-zinc-50 rounded-md justify-center items-center gap-2.5 inline-flex 
                  transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-white hover:to-blue-50
                  hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] 
                  active:scale-95 active:shadow-inner"
              >
                <div className="px-4 text-zinc-900 text-sm font-medium font-['Inter'] leading-normal transition-colors duration-300 ease-in-out
                  bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text group-hover:text-transparent">Start Your Journey</div>
              </Link>
            </BackgroundGradientAnimation>
          </div>
        </div>
    );
  }