import React from 'react';
import { Camera, Code, Pen, Film, ChevronDown, Play } from 'lucide-react';

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-10 text-center px-4 space-y-8">
          <img 
            src="https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/Untitled-1-removebg-preview-46nPaSNW7KuDai5vSEmq05bsyBkIyi.png"
            alt="Astraeus Media Logo"
            className="w-32 h-32 mx-auto mb-8"
          />
          <h1 className="text-7xl md:text-9xl font-bold mb-4 tracking-tight font-century-gothic">
            ASTRAEUS | MEDIA
          </h1>
          <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto opacity-80 tracking-wide">
            Crafting digital excellence through film, design, and innovation
          </p>
          <ChevronDown className="w-8 h-8 mx-auto mt-16 animate-bounce opacity-50" />
        </div>
      </header>

      {/* Services Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-24 tracking-tight font-century-gothic">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <ServiceCard 
              icon={<Film className="w-8 h-8" />}
              title="Film Making"
              description="Cinematic storytelling that captures your vision with precision and artistry."
            />
            <ServiceCard 
              icon={<Camera className="w-8 h-8" />}
              title="Creative Design"
              description="Visual solutions that communicate your message with impact and elegance."
            />
            <ServiceCard 
              icon={<Pen className="w-8 h-8" />}
              title="Content Writing"
              description="Compelling narratives that engage and inspire your audience."
            />
            <ServiceCard 
              icon={<Code className="w-8 h-8" />}
              title="Web Development"
              description="Custom digital experiences built with modern technologies."
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-24 tracking-tight font-century-gothic">Featured Work</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Featured Film Project */}
            <div className="group relative aspect-video rounded-2xl overflow-hidden bg-gray-900">
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/cVYADU53pRw"
                title="A Letter to my Childhood"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                <Play className="w-16 h-16 mb-4" />
                <h3 className="text-2xl font-bold mb-2">A Letter to my Childhood</h3>
                <p className="text-white/70">Short Film</p>
              </div>
            </div>

            {/* Featured Web Project */}
            <div className="group relative aspect-video rounded-2xl overflow-hidden">
              <img 
                src="https://txawaxvwy4ijlqqh.public.blob.vercel-storage.com/bg-wI6Tzi4ACLEW2ccPe3d2e22mrQiS0e.jpg"
                alt="Edmun 2.0"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-8">
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 tracking-tight font-century-gothic">Let's Create Together</h2>
          <p className="text-xl font-light mb-16 opacity-80">Transform your vision into reality with Astraeus | Media</p>
          <button className="bg-white text-black px-12 py-5 text-lg font-medium rounded-full hover:bg-opacity-90 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm opacity-50">© 2024 Astraeus | Media. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-8 text-center group cursor-pointer">
      <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center border border-white/10 rounded-2xl group-hover:border-white/30 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4 font-century-gothic">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

export default App;