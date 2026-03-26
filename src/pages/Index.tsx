import React, { useState } from 'react';
import { Camera, Code, Pen, Film, ChevronDown, Play, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import Hero3D from '@/components/Hero3D';

function Index() {
  const [showSocials, setShowSocials] = useState(false);
  const [isToggling, setIsToggling] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

    return (
      <>
        <Helmet>
          <title>Astraeus | Media - Creative Digital Agency</title>
          <meta name="description" content="Astraeus | Media is a creative digital agency specializing in film making, creative design, content writing, and web services. We craft digital excellence through innovation and expertise." />
          <meta property="og:title" content="Astraeus | Media - Creative Digital Agency" />
          <meta property="og:description" content="Astraeus | Media is a creative digital agency specializing in film making, creative design, content writing, and web services. We craft digital excellence through innovation and expertise." />
          <meta property="og:image" content="https://iili.io/39N2Eaj.png" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Astraeus | Media - Creative Digital Agency" />
          <meta name="twitter:description" content="Astraeus | Media is a creative digital agency specializing in film making, creative design, content writing, and web services." />
          <meta name="twitter:image" content="https://iili.io/39N2Eaj.png" />
        </Helmet>
        <div className="bg-black text-white min-h-screen">
       {/* Hero Section with 3D */}
        <Hero3D />

      {/* About Us Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 rounded-full border border-white/10 text-sm tracking-wider mb-4">
              ABOUT US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-century-gothic">
              Pioneering Digital Frontiers
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              At the intersection of creativity and technology, we forge digital experiences that transcend the ordinary. Our team of visionaries and creators work tirelessly to bring your ideas to life, pushing the boundaries of what's possible in the digital realm.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="glass-card rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold mb-2">2</h3>
                <p className="text-gray-400">Projects Delivered</p>
              </div>
              <div className="glass-card rounded-2xl p-6 text-center">
                <h3 className="text-3xl font-bold mb-2">100%</h3>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Services Section with 3D */}
       <Services3D />

      {/* Portfolio Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-24 tracking-tight font-century-gothic">Featured Work</h2>
          
           {/* Film Making Work */}
           <div id="film-work" className="mb-32">
             <h3 className="text-3xl font-bold mb-12 tracking-tight font-century-gothic">Film Making</h3>
             <div className="group relative aspect-video rounded-2xl overflow-hidden bg-gray-900">
               <iframe 
                 className="w-full h-full"
                 src="https://www.youtube.com/embed/cVYADU53pRw"
                 title="A Letter to my Childhood"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                 allowFullScreen
                 loading="lazy"
               />
               <div className="absolute inset-0 glass-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                 <Play className="w-16 h-16 mb-4" />
                 <h3 className="text-2xl font-bold mb-2">A Letter to my Childhood</h3>
                 <p className="text-white/70">Short Film</p>
               </div>
             </div>
           </div>

          {/* Web Development Work */}
          <div id="web-work" className="mb-32">
            <h3 className="text-3xl font-bold mb-12 tracking-tight font-century-gothic">Web Development</h3>
            <div className="group relative aspect-video rounded-2xl overflow-hidden">
             <img 
               src="https://iili.io/39NqQyJ.md.jpg"
               alt="Edmun 2.0"
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               loading="lazy"
             />
              <div className="absolute inset-0 glass-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-8">
                <h3 className="text-2xl font-bold mb-2">Edmun 2.0</h3>
                <p className="text-white/70 mb-4">Web Development</p>
                <a 
                  href="https://www.edmun.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          {/* Creative Design Work */}
          <div id="design-work" className="mb-32">
            <h3 className="text-3xl font-bold mb-12 tracking-tight font-century-gothic">Creative Design</h3>
            <div className="group relative aspect-video rounded-2xl overflow-hidden">
              <img 
                src="https://iili.io/39NqtTv.jpg"
                alt="Creative Design Showcase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 glass-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-8">
                <h3 className="text-2xl font-bold mb-2">Visual Storytelling</h3>
                <p className="text-white/70 mb-4">Creative Design</p>
              </div>
            </div>
          </div>

          {/* Content Writing Work */}
          <div id="content-work" className="mb-32">
            <h3 className="text-3xl font-bold mb-12 tracking-tight font-century-gothic">Content Writing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-4">Poetry</h4>
                <p className="text-gray-400 mb-6">Experience the art of words through our curated collection of poetry.</p>
                <a
                  href="https://astraeuspoetry.vercel.app/"
                  className="inline-block px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-opacity-90 transition-colors"
                >
                  Explore More
                </a>
              </div>
              <div className="glass-card rounded-2xl p-8 text-center">
                <p className="text-gray-400">More Content Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 tracking-tight font-century-gothic">Let's Create Together</h2>
          <p className="text-xl font-light mb-16 opacity-80">Transform your vision into reality with Astraeus | Media</p>
          <div className="relative inline-block">
              <button 
                className="glass-card px-12 py-5 text-lg font-medium rounded-full hover:bg-white hover:text-black transition-all duration-300"
                onClick={() => {
                  setIsToggling(true);
                  setTimeout(() => {
                    setShowSocials(!showSocials);
                    setIsToggling(false);
                  }, 300);
                }}
                disabled={isToggling}
                aria-label="Toggle social media links"
              >
                {isToggling ? 'Updating...' : 'Get in Touch'}
              </button>
            {showSocials && (
              <div className="absolute left-1/2 -translate-x-1/2 mt-4 p-2 glass-card rounded-2xl flex gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
                <a 
                  href="https://www.instagram.com/astraeus_media/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 hover:bg-white/10 rounded-xl transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/astraeus-media/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 hover:bg-white/10 rounded-xl transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://x.com/AstraeusMedia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 hover:bg-white/10 rounded-xl transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm opacity-50">© 2025 Astraeus | Media. All rights reserved.</p>
        </div>
       </footer>
     </div>
      </>
   );
 }

function ServiceCard({ icon, title, description, onClick, ariaLabel }) {
  return (
    <div 
      className="glass-card p-8 rounded-2xl text-center group cursor-pointer transition-all duration-300 hover:scale-105"
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border border-white/10 rounded-2xl group-hover:border-white/30 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 font-century-gothic">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

export default Index;