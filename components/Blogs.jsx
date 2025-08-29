'use client'

import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

import { Card, CardDescription, CardHeader, CardTitle } from './ui/card'

const blogsData = [
  {
    id: 1,
    title: "Why is JavaScript important before learning React JS ?",
    description: "If you're planning to learn React JS, it's important to first understand why JavaScript plays such a....",
    image: "/blog/blog1.jpg",
    link: "https://rx-blogs.vercel.app/blog/688f648519bbcac0dd8564c8" 
  },
  {
    id: 2,
    title: "Why Next.js Offers More Features Than React.js ?",
    description: "When comparing Next.js and React.js, it’s important to remember that both serve different purposes...",
    image: "/blog/blog2.png",
    link: "https://rx-blogs.vercel.app/blog/6890dfa811d08d545b1d5ffd"            
  },
  {
    id: 3,
    title: "React vs React Native — What’s the Difference?",
    description: "React and React Native are two powerful tools created by Meta (formerly Facebook) that allow",
    image: "/blog/blog3.png",
    link: "https://rx-blogs.vercel.app/blog/68932bd47106b9e21f4ebb13" 
  },
  {
    id: 4,
    title: "Top 10 JavaScript Concepts Every Beginner Must Know",
    description: "If you're starting your journey in JavaScript, there are a few core concepts you must understand",
    image: "/blog/blog4.jpg",
    link: "https://rx-blogs.vercel.app/blog/6893452b7106b9e21f4ebc34"    
  },
  {
    id: 5,
    title: "The State of Frontend Development in 2025 , What You Should Learn Next ?",
    description: "The frontend development landscape in 2025 is more dynamic than ever. With continuous",
    image: "/blog/blog5.png",
    link: "https://rx-blogs.vercel.app/blog/6893468a7106b9e21f4ebc58"          
  },
]


const Blogs = () => {
  return (
    <section className="py-20">
      <div className="max-w-screen-xl mx-auto px-4">
         <h2 className="text-3xl md:text-4xl font-bold relative w-max flex items-center justify-between gap-x-3 before:bg-[image:url('/dots-light.svg')] dark:before:bg-[image:url('/dots-dark.svg')] before:bg-no-repeat before:bg-center before:w-[24px] before:h-[24px] mb-10 md:mb-14 text-center mx-auto">
          Blogs
        </h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {blogsData.map((blog, index) => (
  <SwiperSlide key={index}>
    <Link href={blog.link} className="block h-full">
      <Card className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-[#fefbac] dark:bg-[#121212] h-full flex flex-col cursor-pointer">
        <CardHeader className="p-0">
          <Image
            src={blog.image}
            alt={blog.title}
            width={500}
            height={250}
            className="w-full h-[200px] object-cover"
          />
        </CardHeader>
        <div className="p-5 flex flex-col justify-between flex-grow">
          <CardTitle className="text-lg md:text-xl font-semibold mb-2">
            {blog.title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
            {blog.description}
          </CardDescription>
        </div>
      </Card>
    </Link>
  </SwiperSlide>
))}

        </Swiper>
      </div>
    </section>
  )
}

export default Blogs
