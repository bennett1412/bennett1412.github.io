import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { TbView360 } from 'react-icons/tb';

const ProjectCard = ({ title, body, icons, github, live }) => {
    return (
        <div className='w-[16rem] min-h-[20rem] bg-black-dark p-6 rounded-lg flex flex-col gap-y-8 z-10 project-card'>
            <h3 className='title'>{title}</h3>
            <p className='body'>{body}</p>
            <div className='flex items-center gap-x-2'>
                <p>Tools used: </p>
                <span className='flex items-center gap-x-2'>
                    {icons.map((Icon, i) => <Icon key={i} />)}
                </span>
            </div>
            <div className='flex gap-x-3'>
                {github && <a href={github}><AiOutlineGithub size={30} /></a>}
                {live && <a href={live}><TbView360 color='white' size={30} /></a>}
            </div>
        </div>
    )
}

export default ProjectCard