import KleoLogo from "@/assets/kloe-logo.svg";
import Link from "next/link";
import Image from "next/image";

// Import social media icons
import InstagramLogo from "@/assets/landingPage/social-icons/instagram-logo.svg";
import FacebookLogo from "@/assets/landingPage/social-icons/facebook-logo.svg";
import XLogo from "@/assets/landingPage/social-icons/x-logo.svg";
import LinkedinLogo from "@/assets/landingPage/social-icons/linkedin-logo.svg";
import ThreadsLogo from "@/assets/landingPage/social-icons/threads-logo.svg";
import GoogleLogo from "@/assets/landingPage/social-icons/google-logo.svg";

export default function Footer() {
  const companyLinks = [
    { title: "About us", href: "#" },
    { title: "Pricing & Plans", href: "/pricing" },
    { title: "Contact Us", href: "/contact" },
    { title: "Affiliate Program", href: "#" },
    { title: "Partners", href: "#" },
    { title: "Careers", href: "#" },
  ];

  const resourcesLinks = [
    { title: "Help Center", href: "#" },
    { title: "Community", href: "#" },
    { title: "Blogs", href: "#", externalLink: true },
    { title: "Feedback", href: "#" },
    { title: "Accessibility", href: "#" },
  ];

  const legalLinks = [
    { title: "Privacy Policy", href: "#", externalLink: true },
    { title: "Terms of Service", href: "#" },
  ];

  const ExternalLinkIcon = () => (
    <svg className="inline-block ml-1" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 1V2H9.29L1 10.29L1.71 11L10 2.71V8.5H11V1H3.5Z" fill="currentColor"/>
    </svg>
  );

  return (
    <footer className="border-t border-zinc-200 mt-[60px] sm:mt-[80px] md:mt-[100px] w-full">
      <div className="max-w-[990px] mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-0">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div className="flex flex-col col-span-2 sm:col-span-2 md:col-span-1">
            <KleoLogo />
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="#" aria-label="Instagram" className="flex items-center justify-center w-9 h-9 p-2 rounded-md border border-zinc-200 text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 transition-colors">
                <InstagramLogo className="w-full h-full" />
              </Link>
              <Link href="#" aria-label="Facebook" className="flex items-center justify-center w-9 h-9 p-2 rounded-md border border-zinc-200 text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 transition-colors">
                <FacebookLogo className="w-full h-full" />
              </Link>
              <Link href="#" aria-label="Twitter/X" className="flex items-center justify-center w-9 h-9 p-2 rounded-md border border-zinc-200 text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 transition-colors">
                <XLogo className="w-full h-full" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="flex items-center justify-center w-9 h-9 p-2 rounded-md border border-zinc-200 text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 transition-colors">
                <LinkedinLogo className="w-full h-full" />
              </Link>
              <Link href="#" aria-label="Threads" className="flex items-center justify-center w-9 h-9 p-2 rounded-md border border-zinc-200 text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 transition-colors">
                <ThreadsLogo className="w-full h-full" />
              </Link>
              <Link href="#" aria-label="Google" className="flex items-center justify-center w-9 h-9 p-2 rounded-md border border-zinc-200 text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 transition-colors">
                <GoogleLogo className="w-full h-full" />
              </Link>
            </div>
            <p className="text-sm text-zinc-500 mt-4">&copy; 2025 Kleosi Inc.</p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-medium mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-medium mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              {resourcesLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
                  >
                    {link.title}
                    {link.externalLink && <ExternalLinkIcon />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-medium mb-3 sm:mb-4">Legal</h3>
            <ul className="space-y-2 sm:space-y-3">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
                  >
                    {link.title}
                    {link.externalLink && <ExternalLinkIcon />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};