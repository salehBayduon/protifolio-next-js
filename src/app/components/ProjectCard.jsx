'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  const { id, title, desc, img, tags, url = '#' } = project

  return (
    <motion.article
      role="article"
      aria-labelledby={`project-${id}-title`}
      className=" rounded-lg overflow-hidden shadow-lg focus-within:ring-2 focus-within:ring-[var(--accent)]/40"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link href={url} aria-label={`Open ${title}`} className="block">
        <div className="relative  w-full h-50 md:h-50 ">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            className="group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-4 bg-gray-800/40">
          <h3 id={`project-${id}-title`} className={project.desc === "Service is currently unavailable" ? "text-red-500 font-semibold text-lg " : " text-white"}>
            {title}
          </h3>

          <p className={project.desc === "Service is currently unavailable" ? "text-red-500" : "text-white"}>
  {project.desc}
</p>

          <div className="mt-3 flex flex-wrap gap-2 text-xs ">
            {tags?.map((t) => (
              <span key={t} className="px-2 py-1 rounded">
<p className={project.desc === "Service is currently unavailable" ? "text-sm text-red-500" : "text-sm text-white"}>
                {t}</p>
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
