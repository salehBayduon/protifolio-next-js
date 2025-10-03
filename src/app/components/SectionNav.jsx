'use client'

import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import { motion, AnimatePresence } from 'framer-motion'

export default function SectionNav() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const sectionsRef = useRef({})

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const [showNavbar, setShowNavbar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);
const SCROLL_THRESHOLD = 100;

  useEffect(() => {
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) sectionsRef.current[s.id] = el
    })

    const observerOptions = { root: null, rootMargin: '0px', threshold: [0.2, 0.5, 0.8] }
    let currentActive = null

    const io = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible.length > 0) {
        const id = visible[0].target.id
        if (id !== currentActive) {
          currentActive = id
          setActive(id)
        }
      }
    }, observerOptions)

    Object.values(sectionsRef.current).forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  function handleNavClick(e, id) {
    e.preventDefault()
    setDrawerOpen(false)
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActive(id)
  }


  const controlNavbar = () => {
    const currentScrollY = window.scrollY;
  
    if (currentScrollY < SCROLL_THRESHOLD) {
      setShowNavbar(true); // قبل المسافة المحددة → نظهر دائماً
    } else {
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // النزول → نخفي
      } else {
        setShowNavbar(true);  // الصعود → نعرض
      }
    }
  
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);


  return (
    <div>
      <nav className={` fixed p-2 top-0 left-0 w-full z-50 shadow-md  fixed top-0 left-0 w-full z-50 shadow-md bg-[var(--gradient)]/90 transition-transform duration-500' ${
    showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
   style={{ background: "var(--gradient)" , opacity: 0.9 }}>
    <div className=" container flex items-center justify-between h-16 "   style={{
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='2' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'repeat'
  }}>

          <div className="flex items-center gap-4">
            <Link href="/" className="hidden md:block md:text-2xl text-xl font-bold tracking-wider text-[var(--text)] drop-shadow-[0_0_5px_#ffffff] drop-shadow-[0_0_10px_#ffffff] drop-shadow-[0_0_20px_#ffffff] drop-shadow-[0_0_40px_#ffffff]">Saleh's Portfolio</Link>
            <Link href="/" className="block md:hidden md:text-2xl text-xl font-bold tracking-wider text-[var(--text)] drop-shadow-[0_0_5px_#ffffff] drop-shadow-[0_0_10px_#ffffff] drop-shadow-[0_0_20px_#ffffff] drop-shadow-[0_0_40px_#ffffff]">Portfolio</Link>
          </div>

          <div className="hidden md:flex items-center gap-6 ">
            {sections.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={(e) => handleNavClick(e, s.id)}
                className={`relative px-2 py-1 transition-colors drop-shadow-[0_0_5px_#ffffff] drop-shadow-[0_0_10px_#ffffff] drop-shadow-[0_0_20px_#ffffff] drop-shadow-[0_0_40px_#ffffff]" hover:text-[var(--accent)] ${active === s.id ? 'text-[var(--accent)] ' : 'text-[var(--text)] '}`}
                aria-current={active === s.id ? 'page' : undefined}
              >
                {s.label}
                <span className={`absolute left-0 -bottom-1 h-0.5 w-full transition-all bg-[var(--accent)]  ${active === s.id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button onClick={() => setDrawerOpen(true)} aria-label="Open menu" className="p-2 rounded bg-[var(--bg-card)]">
              <span className="block w-5 h-[2px] bg-[var(--text)] mb-1" />
              <span className="block w-5 h-[2px] bg-[var(--text)] mb-1" />
              <span className="block w-5 h-[2px] bg-[var(--text)]" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-[var(--bg)]/80 " onClick={() => setDrawerOpen(false)} />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.28 }}
              className="absolute right-0 top-0 bottom-0 w-1/3 md:w-1/3 bg-[var(--bg-card)] p-6 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between mb-6 ">
                <div className="text-xl font-bold text-[var(--text)]">Menu</div>
                <button onClick={() => setDrawerOpen(false)} aria-label="Close menu" className="p-2 rounded bg-[var(--bg-alt)]">✕</button>
              </div>

              <nav className="flex-1">
                <ul className="flex bg-s flex-col gap-4 ">
                  {sections.map((s) => (
                    <li className='text-[var(--text)] drop-shadow-[0_0_5px_#ffffff] drop-shadow-[0_0_10px_#ffffff] drop-shadow-[0_0_20px_#ffffff] drop-shadow-[0_0_40px_#ffffff] hover:text-[var(--accent)]' key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={(e) => handleNavClick(e, s.id)}
                        className={`block text-lg px-2 py-2 rounded ${active === s.id ? 'text-[var(--accent)] bg-[var(--bg-alt)]' : 'text-[var(--text-muted)] hover:bg-[var(--bg-alt)]'}`}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-6 border-t border-[var(--border)] pt-4">
                <div className="flex items-center justify-between flex-col gap-4">
                  <a href="https://wa.me/+963936577642" aria-label="WhatsApp" className="text-[var(--text-muted)] drop-shadow-[0_0_5px_#ffffff] drop-shadow-[0_0_10px_#ffffff] drop-shadow-[0_0_20px_#ffffff] drop-shadow-[0_0_40px_#ffffff] hover:text-green-500">WhatsApp</a>
                  <a href="https://github.com/salehBayduon" aria-label="GitHub" className="text-[var(--text-muted)] drop-shadow-[0_0_5px_#ffffff] drop-shadow-[0_0_10px_#ffffff] drop-shadow-[0_0_20px_#ffffff] drop-shadow-[0_0_40px_#ffffff] hover:text-gray-400">GitHub</a>
                  <a href="https://www.facebook.com/saleh.baydoun.1" aria-label="Facebook" className="text-[var(--text-muted)] drop-shadow-[0_0_5px_#ffffff] drop-shadow-[0_0_10px_#ffffff] drop-shadow-[0_0_20px_#ffffff] drop-shadow-[0_0_40px_#ffffff] hover:text-blue-600">Facebook</a>
                  <a href="https://www.linkedin.com/in/saleh-bayduon-206661381/" aria-label="LinkedIn" className="text-[var(--text-muted)] drop-shadow-[0_0_5px_#ffffff] drop-shadow-[0_0_10px_#ffffff] drop-shadow-[0_0_20px_#ffffff] drop-shadow-[0_0_40px_#ffffff] hover:text-blue-500">LinkedIn</a>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
  }
