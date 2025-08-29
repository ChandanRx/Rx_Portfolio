'use client'
import ProjectCard from '@/components/ProjectCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useState } from 'react'

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
    image: '/work/3.png',
    category: 'Next.js',
    name: 'PlaysGo',
    description: 'A platform to find players for your favorite games or post requests for players',
    link: 'https://playsgo.vercel.app',
    github: 'https://github.com/ChandanRx/Rx_PlaysGo'
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
    image: '/work/5.png',
    category: 'React.js',
    name: 'Nexora',
    description: 'a e-commerce web app by using react and used two dummy products api',
    link: 'https://rxaurashop.vercel.app/',
    github: 'https://github.com/ChandanRx/Rx_Nexora'
  },
  {
    image: '/work/6.png',
    category: 'React.js',
    name: 'ShareFilesy',
    description: 'A file-sharing web app deployed on Vercel for easy uploading and sharing of files.',
    link: 'https://sharefilesy.vercel.app/',
    github: 'https://github.com/ChandanRx/Rx_Sharifly_Client'
  },
  {
    image: '/work/13.jpg',
    category: 'React.js',
    name: 'Fitness App',
    description: 'A fitness app where users can see exercise of all body parts .',
    link: '/',
    github: 'https://github.com/ChandanRx/Fitness-App'
  },
  {
    image: '/work/9.png',
    category: 'React.js',
    name: 'Rx Flix',
    description: 'A Movie info platform for giving start and add it to your watchlist with using omdb API',
    link: 'https://rx-blogs.vercel.app/',
    github: 'https://github.com/ChandanRx/Rx_Blogs_MERN'
  },

  {
    image: '/work/12.jpg',
    category: 'React.js',
    name: 'Expendigo',
    description: 'An expense tracker app with transaction history, filters, and localStorage integration.',
    link: '/',
    github: 'https://github.com/ChandanRx/Rx_Expendigo_ReactNative'
  },
  {
    image: '/work/7.png',
    category: 'React.js',
    name: 'Country Scope',
    description: 'it is a site where you can find any countries basic details and falgs',
    link: 'https://brewblend.vercel.app/',
    github: 'https://github.com/ChandanRx/Rx_BrewBlend_Coffee_Shop'
  },
  {
    image: '/work/14.webp',
    category: 'React.js',
    name: 'Food Delivery App',
    description: 'A React Native app for browsing restaurants, placing orders, and tracking deliveries.',
    link: '/',
    github: 'https://github.com/ChandanRx/Food_Delivery_App'
  },
  {
    image: '/work/4.png',
    category: 'React.js',
    name: 'Rx Nexus',
    description: 'A game search app to find games, view details, and track favorites using React Native.',
    link: 'https://rxnexus13.vercel.app/',
    github: 'https://github.com/ChandanRx/RxNexus_Games'
  },
  {
    image: '/work/11.png',
    category: 'React.js',
    name: 'Expensify',
    description: 'A Expense tracker react app for managing your expenses it has very good UI with using graph',
    link: 'https://rx-expensify.vercel.app/',
    github: 'https://github.com/ChandanRx/Rx_Expensify'
  },


]


const uniqueCategories = ["all projects", ...new Set(projectData.map((item) => item.category))]

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories)
  const [category, setCategory] = useState('all projects')

  const filteredProjects = projectData.filter((project) => {
    return category === 'all projects' ? project : project.category === category;
  })
  return (
    <section className='min-h-screen pt-12'>
      <div className='max-w-screen-xl mx-auto px-4'>
        <h2 className="text-3xl md:text-4xl font-bold relative w-max flex items-center justify-between gap-x-3 before:bg-[url('/dots-light.svg')] dark:before:bg-[url('/dots-dark.svg')] before:bg-no-repeat before:bg-center before:w-[24px] before:h-[24px] mb-10 md:mb-14 text-center mx-auto">
          All Projects
        </h2>

        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:mx-w-[640px] mb-12 mx-auto md:border dark:border-none '>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              )
            })}
          </TabsList>
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard projects={project} />
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects