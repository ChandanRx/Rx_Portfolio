'use client'

import Link from 'next/link'
import { Button } from './ui/button'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Pagination } from 'swiper/modules'
import ProjectCard from './ProjectCard'

const projectData = [
  {
    image: '/work/1.png',
    category: 'MERN Stack',
    name: 'Alpha School Sports Portal',
    description: 'Manage student registrations, teams, and sports events with admin approval and gallery.',
    link: 'https://alphaschool-theta.vercel.app/',
    github: 'https://github.com/ChandanRx/Rx-Alphaschool-Portal'
  },
  {
    image: '/work/10.png',
    category: 'React.js',
    name: 'Rx Blogs',
    description: 'A blogging platform for sharing articles, tutorials, and project updates.',
    link: 'https://rx-blogs.vercel.app/',
    github: 'https://github.com/ChandanRx/Rx_Blogs_MERN'
  },
  {
    image: '/work/2.png',
    category: 'React.js',
    name: 'BrewBlend / Coffee Shop',
    description: 'A stylish coffee shop frontend with animated navbar and modern UI using Framer Motion.',
    link: '/',
    github: 'https://github.com/ChandanRx/BrewBlend'
  },
  {
    image: '/work/3.png',
    category: 'Next.js',
    name: 'PlaysGo',
    description: 'A platform to find players for your favorite games or post requests for players',
    link: 'https://playsgo.vercel.app',
    github: 'https://github.com/ChandanRx/Rx_PlaysGo'
  },
]


const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="max-w-screen-xl px-4 mx-auto flex flex-col xl:flex-row items-center xl:items-center justify-between gap-12">
        {/* Text Section */}
        <div className="max-w-[400px] text-center xl:text-left xl:max-w-[480px]">
          <h2 className="text-3xl md:text-4xl font-bold relative w-max flex items-center justify-center xl:justify-start gap-x-3 before:bg-[url('/dots-light.svg')] dark:before:bg-[url('/dots-dark.svg')] before:bg-no-repeat before:bg-center before:w-[24px] before:h-[24px] mb-2 mx-auto xl:mx-0">
            Latest Projects
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-6 font-light max-w-xl px-4 xl:px-0 mx-auto xl:mx-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link href="/projects">
            <Button className="mx-auto xl:mx-0">All Projects</Button>
          </Link>
        </div>

        {/* Slider Section */}
        <div className="w-full xl:w-[60%]">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 }
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.map((projects, index) => (
              <SwiperSlide key={index}>
                <ProjectCard projects={projects} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Work
