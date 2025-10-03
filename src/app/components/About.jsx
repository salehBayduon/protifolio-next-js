'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { id: "projects", label: "GPA", value: 89.7 },
    { id: "users", label: "Coding challenges", value: 100 },
    { id: "awards", label: "Years of experience", value: 2 },
  ];

  // Simple count-up logic for stats
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((s, i) => {
      const duration = 900; // ms
      const steps = 30;
      const increment = Math.max(1, Math.floor(s.value / steps));
      return setInterval(() => {
        setCounts(prev => {
          const next = [...prev];
          next[i] = Math.min(s.value, next[i] + increment);
          return next;
        });
      }, Math.round(duration / steps));
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section id="about" className=" bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left - Image + badges */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/3 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:scale-105"
          >
            {/* Replace with next/image or img tag pointing to user's avatar */}
            <div className="relative md:w-64 md:h-72 w-40 h-40 rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
              <img
                alt="avatar"
                src="/99.jpg"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Front-End Developer</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">Engineering + Design + Data</p>
            </div>

            <div className="mt-4 flex gap-2">
            </div>
          </motion.div>

          {/* Right - Text and Skills */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="w-full md:w-2/3"
          >
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-2xl">
                A passionate Front-End Developer blending engineering precision with creative design. I build fast, accessible, and delightful interfaces using React, Next.js, TypeScript and Tailwind CSS.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="leading-relaxed">I specialize in designing responsive web interfaces. With a background in Computer and Control Engineering, I combine problem-solving skills with modern web technologies to deliver production-ready apps.</p>
                <p className="leading-relaxed">I apply data-science thinking to front-end problems — clear visualizations, performant data pipelines, and thoughtful UX for complex flows.</p>

              </div>

              {/* Skills card grid */}
              <div className="grid grid-cols-2 gap-3 ">
                {[
                  { label: 'C++ & C#' },
                  { label: 'HTML & CSS ' },
                  { label: 'JavaScript' },
                  { label: 'TypeScript' },
                  { label: 'React.js' },
                  { label: 'Next.js' },
                  { label: 'Tailwind CSS' },
                  { label: 'OOP' },
                  { label: 'MySQL' },
                  { label: 'Git & GitHub' }
                ].map((s) => (
                  <div key={s.label} className="transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#cc9a00]/80  p-3 rounded-lg bg-white dark:bg-gray-900 shadow-sm border border-gray-50 dark:border-gray-800 flex items-center justify-center">
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 bg-gradient-to-r from-white/40 to-gray-50 dark:from-gray-900/40 dark:to-gray-800/40 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
                {stats.map((s, i) => (
                  <div key={s.id} className="text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-[#cc9a00]">
                    {counts[i]}{s.id === 'projects' ? '%' : ''}{s.id === 'users' ? '+' : ''}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      
      </div>
    </section>
  );
}
