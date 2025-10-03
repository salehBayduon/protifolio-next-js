import './globals.css'
import SectionNav from './components/SectionNav'
import CursorShadow from './components/CursorShadow'
import localFont from "next/font/local";


const myFont = localFont({
    src: "../fonts/Quicksand/Quicksand-VariableFont_wght.ttf",
});

export const metadata = {
title: 'Saleh Bayduon - Portfolio',
description: 'A modern portfolio built with Next.js & Tailwind'
}


export default function RootLayout({ children }) {
return (
<html lang="en">
<link rel="icon" href="/icon.svg" type="image/svg+xml" />

<body className={myFont.className}>
<CursorShadow/>
<div className='relative min-h-screen'>
<div className=' inset-0 bg-black/20 z-0' >
<SectionNav />
<main className="pt-20 relative z-20 ">{children}</main>
</div>
</div>
</body>
</html>
)
}