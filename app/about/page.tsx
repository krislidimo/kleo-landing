import Image from 'next/image';
import Link from 'next/link';
import CtaSection from '@/components/sections/cta';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Alexandra Chen',
      role: 'Co-Founder & CEO',
      image: '/team/alexandra.jpg',
      bio: 'Former social media director with 10+ years of experience at leading agencies. Alex founded Kleo to solve the challenges she experienced firsthand in scaling social media operations.',
    },
    {
      name: 'Marcus Williams',
      role: 'Co-Founder & CTO',
      image: '/team/marcus.jpg',
      bio: 'AI researcher and engineer with a background in NLP. Marcus leads our technical team, focusing on building AI models that truly understand brand voice and audience engagement.',
    },
    {
      name: 'Sophia Rodriguez',
      role: 'Head of Product',
      image: '/team/sophia.jpg',
      bio: 'Product leader with experience at both startups and enterprise companies. Sophia ensures Kleo delivers an intuitive and powerful experience for teams of all sizes.',
    },
    {
      name: 'David Kumar',
      role: 'Head of AI Research',
      image: '/team/david.jpg',
      bio: 'PhD in Machine Learning with specialization in generative models. David leads our AI research efforts to continuously improve Kleo\'s content generation capabilities.',
    },
  ];

  const investors = [
    { name: 'Horizon Ventures', logo: '/investors/horizon.svg' },
    { name: 'Blue Summit Capital', logo: '/investors/bluesummit.svg' },
    { name: 'TechFund Partners', logo: '/investors/techfund.svg' },
    { name: 'Future Collective', logo: '/investors/futurecollective.svg' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
                Our Mission
              </h1>
              <p className="text-xl text-zinc-600 mb-8">
                Empowering brands to create authentic connections through AI-enhanced social media management.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-zinc-600">
                  <p>
                    Kleo was born out of frustration with existing social media tools that didn't evolve 
                    with the rapidly changing digital landscape. In 2022, our founders Alexandra and Marcus 
                    saw an opportunity to reimagine social media management for the AI era.
                  </p>
                  <p>
                    What began as a simple idea to automate repetitive social media tasks has evolved into 
                    a comprehensive platform that helps brands maintain their authentic voice while scaling 
                    their social media presence.
                  </p>
                  <p>
                    Today, Kleo serves thousands of businesses ranging from growing startups to Fortune 500 
                    companies, all looking to create meaningful connections with their audience without 
                    sacrificing authenticity or efficiency.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 mix-blend-multiply" />
                <Image 
                  src="/about/team-working.jpg" 
                  alt="The Kleo team collaborating" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Our Values</h2>
              <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                The principles that guide our product decisions, our team culture, and our relationship with customers.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-3">Authentic Innovation</h3>
                <p className="text-zinc-600">
                  We believe technology should enhance human creativity, not replace it. Our AI tools are designed to 
                  amplify your brand's unique voice, not generate generic content.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-3">Team Empowerment</h3>
                <p className="text-zinc-600">
                  Social media is a team sport. We build tools that foster collaboration, streamline approvals, 
                  and ensure consistent brand voice across distributed teams.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 mb-3">Impact-Driven</h3>
                <p className="text-zinc-600">
                  We measure success by the results our customers achieve. Our platform is built to deliver 
                  measurable engagement, growth, and ROI for social media efforts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                The passionate minds behind Kleo who are dedicated to revolutionizing social media management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden border border-zinc-200">
                  <div className="aspect-[4/3] relative bg-zinc-100">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/10 to-purple-600/10 mix-blend-multiply" />
                    {/* Note: These are placeholder images. You would need to add actual team photos */}
                    <div className="w-full h-full flex items-center justify-center text-zinc-400">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-zinc-900">{member.name}</h3>
                    <p className="text-sm text-indigo-600 mb-3">{member.role}</p>
                    <p className="text-zinc-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Investors Section */}
        <section className="py-16 md:py-24 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Backed By</h2>
              <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                We're fortunate to have the support of leading investors who believe in our vision.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {investors.map((investor, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className="h-12 w-32 bg-zinc-200 rounded flex items-center justify-center text-zinc-500">
                    {/* These are placeholder logos. You would need to add actual investor logos */}
                    {investor.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join the team section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-zinc-900 mb-6">Join Our Team</h2>
              <p className="text-lg text-zinc-600 mb-8">
                We're always looking for talented individuals who are passionate about AI, social media, and building products that make a difference.
              </p>
              <Link href="/careers" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                View Open Positions
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CtaSection />
      </main>
    </div>
  );
}
