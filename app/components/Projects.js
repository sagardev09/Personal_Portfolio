import React from 'react'
import projectsData from '../data/Projectsdata'
import { ProjectCard } from './ProjectCard'

const Projects = () => {
    return (
        <div className='p-8 max-w-[1400px] mx-auto'>
            <h1 className='text-white uppercase font-semibold text-2xl mb-8'>Some of the Projects</h1>
            <div className='flex items-center gap-10 flex-wrap'>
                {projectsData.map((item) => {
                    return (
                        <ProjectCard img={item.img} desc={item.description} name={item.projectName} link={item.liveLink} github={item.githubLink} key={item?.githubLink} />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects