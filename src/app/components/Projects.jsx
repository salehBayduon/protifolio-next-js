'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import ProjectCard from './ProjectCard'
import { projects } from '../lib/Projects';
import { div } from 'framer-motion/client';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 0.9, 0.2, 1] } }
}

export default function Projects() {
  return (
    <section id="projects" data-aos="fade-up" data-aos-delay="200" className="container py-12 text-[var(--text)]">
      <SectionHeader title="Projects" subtitle="Selected projects — interactive, responsive, and production-ready." />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {projects.map((p) => (
          <motion.div key={p.id} variants={item}>
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
