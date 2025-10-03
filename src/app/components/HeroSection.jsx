'use client'

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <section id='hero' className=" mt-12 md:min-h-[70vh] flex items-center animate-fadeIn text-[var(--text)] bg-cover bg-center ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        <div>
          <h3 className="text-[var(--accent)] font-semibold text-3xl" style={{ animationDelay: '80ms' }}>Hi, I'm</h3>
          <h1 className="text-xl md:text-xl font-bold leading-tight mt-2 animate-slideUp" style={{ animationDelay: '160ms' }}>
            <TypeAnimation
              sequence={[
                'Saleh Bayduon ..',
                1500, 
                'Computer Engineer',
                2000,
                ', Web Developer',
                1000, 
                ', Data analyst',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className="mt-6 text-[var(--text-muted)] max-w-xl animate-slideUp" style={{ animationDelay: '300ms' }}>
          I specialize in designing and developing web interfaces, complemented by strong skills in computer systems, programming, digital circuits, control systems, and data saince and analysis. </p>
          
          {/* Social links */}
          <div className="flex mt-12 space-x-6">
            <a href="https://www.linkedin.com/in/saleh-bayduon-206661381/" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-blue-600 hover:bg-gradient-to-r hoverbg-gradient-to-br from-blue-700 hover:to-blue-800  hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a href="https://www.facebook.com/saleh.baydoun.1" aria-label="Facebook" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-blue-700 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.991 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047V9.413c0-3.007 1.792-4.669 4.532-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.953.925-1.953 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.064 24 12.073z"/>              </svg>
            </a>

            <a href="https://github.com/salehBayduon" aria-label="GitHub" className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>

            <a
              href="https://wa.me/+963936577642"
              aria-label="WhatsApp"
              className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>              </svg>
            </a>

          </div>
          <div className="mt-8 flex gap-4  ">
            <a href="#contact" className="inline-block bg-[var(--text)] text-[var(--bg)] bg-gradient-to-r from-brand to-accent px-5 py-3 rounded-full font-medium shadow-lg transform transition-transform hover:-translate-y-1">Hire Me</a>
            <a href="/Saleh_Bayduon.pdf" download="Saleh_Bayduon.pdf" className=" bg-[var(--bg)] inline-block border border-[var(--border)] px-5 py-3 rounded-full transition-colors  transform transition-transform hover:-translate-y-1 ">Download CV</a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end ">
          <div className="w-95 h-110 rounded-xl">
            <div className="relative w-full h-full rounded-b-4xl overflow-hidden ">
              <Image src="/3.png" alt="avatar" fill sizes="(max-width: 768px) 40vw, 30vw" style={{objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
