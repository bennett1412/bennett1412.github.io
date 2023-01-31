import Image from 'next/image'
import React from 'react'
import ExperienceCard from './minorComponents/ExperienceCard'
import ImageComponent from './minorComponents/ImageComponent'

const Experiences = () => {
    return (
        <section id='experiences' className='experience relative bg-teal-light-1 min-h-screen flex flex-col items-center gap-y-8'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={'w-screen bottom-[100%] absolute h-auto'} alt={'layers'} src='/layers1.svg' />
            <h2 className='text-2xl text-center h-10'>Experiences</h2>
            <ExperienceCard
                role={'Software Engineering Intern'}
                companyName={'Content Turbine'}
                time={'Aug 2022 - Oct 2022'}
                skills={['React', 'Redux', 'Tiptap', 'Python']}
            />
            <ExperienceCard
                role={'Full-stack Developer Intern'}
                companyName={'TGH Tech'}
                time={'May 2022 - July 2022'}
                skills={['React', 'Redux', 'Node/Express.js', 'Firebase', 'AWS Cognito']}
            />
            <ExperienceCard
                role={'Flutter Developer Intern'}
                companyName={'CmtyHelp'}
                time={'Jan 2022 - April 2022'}
                skills={['Flutter', 'Firebase']}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={'w-screen top-[100%] absolute h-auto z-20'} alt={'layers'} src='/layers2.svg' />
        </section>
    )
}

export default Experiences