import Image from 'next/image'
import React from 'react'
import ExperienceCard from './minorComponents/ExperienceCard'
import ImageComponent from './minorComponents/ImageComponent'

const Experiences = () => {
    return (
        <section id='experiences' className='experience relative bg-teal-light-1 min-h-screen flex flex-col items-center gap-y-2'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={'w-screen bottom-[100%] absolute h-auto'} alt={'layers'} src='/layers1.svg' />
            <h2 className='text-2xl text-center h-10'>Experiences</h2>
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={'w-screen top-[100%] absolute h-auto z-5'} alt={'layers'} src='/layers2.svg' />
        </section>
    )
}

export default Experiences