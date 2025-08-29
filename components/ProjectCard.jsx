import React from 'react'
import Image from 'next/image'
import { Card, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { Github, Link2Icon } from 'lucide-react'
import Link from 'next/link'

const ProjectCard = ({ projects }) => {
    return (
        <Card className="bg-white dark:bg-background group overflow-hidden relative p-0">
            <CardHeader className="p-0">
                <div className="relative w-full h-[280px] flex justify-center items-end bg-[#fefbac] dark:bg-secondary/40 xl:bg-[url('/work/project-bg-light.png')] xl:bg-[110%] xl:bg-no-repeat overflow-hidden">

                    <Badge className="uppercase text-sm font-medium absolute top-4 left-4 z-10">
                        {projects.category}
                    </Badge>

                    <Image
                        className="absolute bottom-0 shadow-2xl"
                        src={projects.image}
                        width={247}
                        height={250}
                        alt="project"
                        priority
                    />
                    <div className='flex gap-x-4'> 
                        <Link
                            href={projects.github}
                            className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
                        >
                            <Github className='text-white' />
                        </Link>
                    
                        <Link
                            href={projects.link}
                            className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200'
                        >
                            <Link2Icon className='text-white' />
                        </Link>
                    </div>
                </div>
            </CardHeader>

            <div className="px-8 py-6">
                <h4 className="text-xl font-bold">{projects.name}</h4>
                <p className="text-muted-foreground text-lg">{projects.description}</p>
            </div>
        </Card>
    )
}

export default ProjectCard
