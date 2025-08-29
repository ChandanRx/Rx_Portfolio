"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { path: '/', name: 'home' },
  { path: '/projects', name: 'my projects' },
  { path: '/contact', name: 'contact' }
]

const Nav = ({ containerStyle, linkStyle, underlineStyle }) => {
  const path = usePathname()

  return (
    <nav className={`${containerStyle} flex items-center gap-4`}>
      {links.map((link, index) => {
        const isActive = link.path === path

        return (
          <div key={index} className="relative px-6">
            <Link href={link.path} className={`capitalize ${linkStyle}`}>
              {link.name}
            </Link>
            {isActive && (
              <motion.span
                layoutId="underline"
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                className={`absolute left-0 bottom-0 w-full h-0.5 ${underlineStyle}`}
              />
            )}
          </div>
        )
      })}
    </nav>
  )
}

export default Nav
