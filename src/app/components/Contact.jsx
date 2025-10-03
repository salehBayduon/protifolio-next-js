'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {

  return (
      <section id='contact' className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900/90 dark:to-gray-800/75 rounded-t-2xl shadow-xl p-8 pb-24 md:p-12 mb-12">
        <h2 className="text-3xl font-bold text-center text-white mb-12 relative">
          Contact Me
          <span className="block w-20 h-1 bg-gradient-to-r from-[#cc9a00] to-[#B87333] mx-auto mt-4 rounded-full"></span>
        </h2>

        {/* Contact info cards */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Link href={"tel:+966501234567"} className="block">
          <div className="bg-[#0b1220]/75 hover:bg-[#0b1220] p-6 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#cc9a00] to-[#B87333] flex items-center justify-center text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <p className="text-white underline">+963 936 577 642</p>
          </div>
        </Link>

        <Link href={"mailto:salehbayduon11@gmail.com"} className="block">
          <div className="bg-[#0b1220]/85 hover:bg-[#0b1220] p-6 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#cc9a00] to-[#B87333] flex items-center justify-center text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-white">salehbayduon11@gmail.com</p>
          </div>
        </Link>
          <div className="bg-[#0b1220]/85 hover:bg-[#0b1220] p-6 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#cc9a00] to-[#B87333] flex items-center justify-center text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
            <p className="text-white">Lattakia , Syria</p>
          </div>
        </div>
        <footer className="border-t border-[var(--border)] mt-20 py-6 font-medium ">
      <div className="container flex flex-col  md:flex-row items-center justify-between text-xl text-[var(--text-muted)] gap-4">
        <p className='text-[var(--text-muted)] drop-shadow-[0_0_5px_#ffffff] drop-shadow-[0_0_10px_#ffffff] drop-shadow-[0_0_20px_#ffffff] drop-shadow-[0_0_40px_#ffffff]'>         Saleh Bayduon</p>
        <div className=" md:ml-12 flex items-center gap-4">
        <a href="https://github.com/salehBayduon" aria-label="GitHub" className="text-[var(--text-muted)] drop-shadow-[0_0_5px_#ffffff] drop-shadow-[0_0_10px_#ffffff] drop-shadow-[0_0_20px_#ffffff] drop-shadow-[0_0_40px_#ffffff] hover:text-[var(--accent)]">GitHub</a>
                  <a href="https://www.facebook.com/saleh.baydoun.1" aria-label="Facebook" className="text-[var(--text-muted)] drop-shadow-[0_0_5px_#ffffff] drop-shadow-[0_0_10px_#ffffff] drop-shadow-[0_0_20px_#ffffff] drop-shadow-[0_0_40px_#ffffff] hover:text-[var(--accent)]">Facebook</a>
                  <a href="https://www.linkedin.com/in/saleh-bayduon-206661381/" aria-label="LinkedIn" className="text-[var(--text-muted)] drop-shadow-[0_0_5px_#ffffff] drop-shadow-[0_0_10px_#ffffff] drop-shadow-[0_0_20px_#ffffff] drop-shadow-[0_0_40px_#ffffff] hover:text-[var(--accent)]">LinkedIn</a>
                 </div>
      <div className=" ">
        <div className=' drop-shadow-[0_0_5px_#ffffff] drop-shadow-[0_0_10px_#ffffff] drop-shadow-[0_0_20px_#ffffff] drop-shadow-[0_0_40px_#ffffff]'>© {new Date().getFullYear()} All Rights Reserved</div>
      </div>
      </div>
    </footer>
      </section>  
)}
    