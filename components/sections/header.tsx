"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import KleoLogo from "@/assets/kloe-logo.svg";


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    // Check scroll position immediately on mount
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className={`sticky flex justify-between items-center mx-auto py-3 px-4 sm:px-6 md:px-8 transition-all duration-300 rounded-lg z-20 bg-white/70 backdrop-blur-md
        ${isScrolled ? 
          'top-[16px] w-[95%] max-w-[920px] shadow-md' : 
          'top-[10px] w-[95%] max-w-[990px]'
        } 
        `}>
      <div className="flex items-center gap-2 md:gap-6">
        <Link href="/">
          <KleoLogo className="w-[94px] h-[24px] ml-0.5" />
        </Link>
        <div className="hidden md:flex items-center gap-1 text-sm">
          <Link className="flex justify-center items-center gap-2.5 py-[6px] px-[12px] rounded-full hover:bg-zinc-100 transition-colors duration-200 text-zinc-950 text-sm font-medium leading-[normal]" href="/product">Product</Link>
          <Link className="flex justify-center items-center gap-2.5 py-[6px] px-[12px] rounded-full hover:bg-zinc-100 transition-colors duration-200 text-zinc-950 text-sm font-medium leading-[normal]" href="/pricing">Pricing</Link>
          <Link className="flex justify-center items-center gap-2.5 py-[6px] px-[12px] rounded-full hover:bg-zinc-100 transition-colors duration-200 text-zinc-950 text-sm font-medium leading-[normal]" href="/about">About</Link>
          <Link className="flex justify-center items-center gap-2.5 py-[6px] px-[12px] rounded-full hover:bg-zinc-100 transition-colors duration-200 text-zinc-950 text-sm font-medium leading-[normal]" href="/support">Support</Link>
          <Link className="flex justify-center items-center gap-2.5 py-[6px] px-[12px] rounded-full hover:bg-zinc-100 transition-colors duration-200 text-zinc-950 text-sm font-medium leading-[normal]" href="/contact">Contact</Link>
        </div>
      </div>
      
      {/* Desktop navigation */}
      <div className="hidden md:flex items-center gap-1">
        <Link className="flex justify-center items-center gap-2.5 py-2 px-4 rounded-md text-zinc-950 hover:text-zinc-950/80 transition-colors duration-100 cursor-pointer text-center text-xs font-semibold leading-[normal]" href="https://app.mykleo.ai">
          Sign in
        </Link>
        <Link href="https://app.mykleo.ai/sign-up" className="flex justify-center items-center gap-2.5 py-2 px-4 rounded-md border border-[#f723f7] bg-[#f723f7] cursor-pointer text-neutral-50 text-center text-xs font-semibold leading-[normal] " >
          Get Started
        </Link>
      </div>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden relative flex items-center justify-center w-10 h-10 rounded-md hover:bg-zinc-100"
        onClick={toggleMobileMenu}
      >
        <div className="relative w-5 h-4">
          <span className={`absolute top-0 left-0 w-5 h-0.5 bg-zinc-900 transform transition-transform duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 translate-y-[0.42rem]' : ''}`}></span>
          <span className={`absolute top-[0.45rem] left-0 w-5 h-0.5 bg-zinc-900 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`absolute bottom-0 left-0 w-5 h-0.5 bg-zinc-900 transform transition-transform duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 -translate-y-[0.42rem]' : ''}`}></span>
        </div>
      </button>
      
      {/* Mobile menu */}
      <div 
        className={`absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg mt-1 py-4 px-6 md:hidden
          transform transition-all duration-300 ease-in-out
          ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}
        `}
      >
        <div className="flex flex-col space-y-4">
          <Link className="text-zinc-950 text-sm font-medium" href="/product">Product</Link>
          <Link className="text-zinc-950 text-sm font-medium" href="/pricing">Pricing</Link>
          <Link className="text-zinc-950 text-sm font-medium" href="/about">About</Link>
          <Link className="text-zinc-950 text-sm font-medium" href="/support">Support</Link>
          <Link className="text-zinc-950 text-sm font-medium" href="/contact">Contact</Link>
          <div className="flex flex-col space-y-2 pt-2 border-t border-zinc-100">
            <Link className="text-zinc-950 text-sm font-medium" href="https://app.mykleo.ai/sign-in">Sign in</Link>
            <Link href="https://app.mykleo.ai/sign-up" className="flex justify-center items-center gap-2.5 py-2 px-4 rounded-md border border-[#f723f7] bg-[#f723f7] cursor-pointer text-neutral-50 text-center text-xs font-semibold leading-[normal]">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}