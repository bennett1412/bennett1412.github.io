import React from 'react'
import ProjectCard from './ProjectCard'
import { SiReact, SiJavascript, SiHtml5, SiDjango, SiSqlite, SiPython, SiPhp } from 'react-icons/si';
const Projects = () => {
    return (
        <section id='projects' className='min-h-screen relative bg-lemon-green pt-[6.5rem]  '>
            <h1 className='text-2xl font-semibold text-center text-black-dark'>Projects</h1>
            <div className='flex flex-col gap-y-5 justify-center items-center p-5 min-h-[30rem]'>
                <ProjectCard
                    title={'Django-Blog-App'}
                    body={'A blog application made using the django framework'}
                    icons={[SiDjango, SiSqlite]}
                    github={'https://github.com/bennett1412/Django-Blog-App'}
                    live={'http://baconguy.pythonanywhere.com/blog/'}
                />
                <ProjectCard
                    title={'Snakes-on-the-screen'}
                    body={'A chrome extension that lets you play classic snake on top of most web pages'}
                    icons={[SiJavascript, SiHtml5]}
                    github={'https://github.com/bennett1412/snakes-on-a-screen'}
                    live={'https://addons.mozilla.org/en-US/firefox/addon/snakes-on-a-screen/'}
                />
                <ProjectCard
                    title={'Library Management System'}
                    body={'A simple library management system made using LAMP stack and style with tailwindCSS'}
                    icons={[SiPhp, SiHtml5]}
                    github={'https://github.com/bennett1412/library-management-system'}
                />
                <ProjectCard
                    title={'TweetHook'}
                    body={'A Twitter bot that sends a twitter to you as dm to save it'}
                    icons={[SiPython]}
                    github={'https://github.com/bennett1412/library-management-system'}
                />
            </div>
            <img src='/layers3.svg' alt='layers' className='absolute top-[88%] w-screen' />
        </section>
    )
}

export default Projects