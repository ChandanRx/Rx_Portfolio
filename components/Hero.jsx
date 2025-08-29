"use client"

import {
  RiArrowDownSLine,
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
} from 'react-icons/ri'
import Link from 'next/link'
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'

import Socials from './Socials'
import DevImg from './DevImg'
import Badge from './Badge'

const Hero = () => {
  return (
    <section
      className='relative overflow-hidden py-12 md:py-16 xl:py-24 min-h-[84vh] xl:pt-28 
      bg-[#fefbac] bg-[url("/hero/hero-bg.svg")] bg-no-repeat bg-bottom bg-cover 
      dark:bg-black dark:bg-none'
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className='flex flex-col-reverse xl:flex-row items-center xl:items-start justify-between gap-8'>
          
          {/* LEFT TEXT CONTENT */}
          <div className='text-center xl:text-left flex flex-col items-center xl:items-start max-w-xl mx-auto xl:mx-0'>
            <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>
              Fullstack Developer
            </div>
            <h1 className='text-4xl md:text-5xl xl:text-[64px] xl:leading-[70px] tracking-[-1px] md:tracking-[-2px] font-bold'>
              Hello, My Name is Chandan Pargi
            </h1>
            <p className='text-base md:text-lg text-muted-foreground mt-4 font-light mb-8'>
              Passionate about building fullstack web applications using React, Node, and MongoDB. I turn complex problems into elegant solutions with clean code and beautiful UI.
            </p>

            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href="/contact">
                <Button className="gap-x-2 cursor-pointer text-white">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2 cursor-pointer text-white">
                Download CV <Download size={18} />
              </Button>
            </div>

            <Socials
              containerStyles="flex gap-x-4 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          {/* RIGHT IMAGE + SVG SHAPES */}
          <div className='hidden xl:flex relative w-full justify-end pr-2'>
            <div className="relative w-[400px] h-[360px] shrink-0">
              {/* SVG Blob Background */}
              <div className='absolute -top-4 -right-2 w-[320px] h-[320px] z-0 bg-[url("/shape-2A.svg")] dark:bg-[url("/hero/shape-2-dark.svg")] bg-no-repeat bg-contain' />

              {/* Floating Badges */}
              <Badge
                containerStyles="absolute top-[20%] -left-[4.5rem]"
                icon={<RiBriefcase4Fill />}
                endCountNum={1}
                badgeText='Year Of Experience'
              />
              <Badge
                containerStyles="absolute top-[78%] -left-[1rem]"
                icon={<RiTodoFill />}
                endCountNum={32}
                badgeText='Finished Projects'
              />
              <Badge
                containerStyles="absolute top-[55%] -right-6"
                icon={<RiTeamFill />}
                endCountNum={5}
                badgeText='Happy Clients'
              />

            
              <DevImg
                containerStyles="bg-[url('/shape-1A.svg')]  w-[320px] h-[320px] aspect-[1/1] bg-contain mx-auto bg-no-repeat relative bg-bottom"
                imgSrc='/hero/hero.png'
              />
            </div>
          </div>
        </div>


        <div className='hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  )
}

export default Hero;