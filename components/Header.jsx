"use client"

import { useEffect, useState } from "react"
import Logo from "./Logo"
import MobileView from "./MobileView"
import Nav from "./Nav"
import ThemeToggler from "./ThemeToggler"
import { usePathname } from "next/navigation"

const Header = () => {
  const [header, setHeader] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`${
        header ? "py-4 bg-card shadow-lg dark:bg-card" : "py-6 bg-transparent"
      } sticky top-0 z-30 transition-all`}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center">
        <Logo />

         <div className="hidden xl:flex items-center gap-x-6">
            <Nav
              containerStyle="flex gap-x-8 items-center"
              linkStyle="relative hover:text-primary transition-all"
              underlineStyle="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
          </div>

          <div className="flex items-center gap-x-4 xl:hidden">
            <ThemeToggler />
            <MobileView />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
