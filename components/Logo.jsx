import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <h1
        className={`
          inline-block select-none font-extrabold tracking-widest font-[cursive]
          text-4xl md:text-5xl cursor-pointer
          transform -rotate-6 transition-transform duration-500

          bg-gradient-to-r 
            from-yellow-400 via-yellow-300 to-yellow-500
          text-transparent bg-clip-text

          dark:from-yellow-600 dark:via-yellow-500 dark:to-yellow-700
          dark:hover:from-yellow-400 dark:hover:via-yellow-300 dark:hover:to-yellow-500

          hover:rotate-6
        `}
        aria-label="Homepage"
      >
        rx13
      </h1>
    </Link>
  )
}

export default Logo
