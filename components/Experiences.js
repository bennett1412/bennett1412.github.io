import Image from 'next/image'
import React from 'react'
import ExperienceCard from './minorComponents/ExperienceCard'
import ImageComponent from './minorComponents/ImageComponent'

const Experiences = () => {
    return (
        <section id='experiences' className='experience relative bg-teal-light-1 min-h-screen flex flex-col items-center gap-y-8'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={'w-screen bottom-[100%] absolute h-auto'} alt={'layers'} src='layers1.svg' />
            <h2 className='text-2xl text-center h-10'>Experiences</h2>
            <div className='flex flex-col p-5 justify-center items-center gap-8 md:flex-row md:gap-x-8 flex-wrap'>
                <ExperienceCard
                    role={'Software Engineering Intern'}
                    companyName={<a rel="noopener noreferrer" target={'_blank'} href='https://www.contentturbine.com/'>Content Turbine</a>}
                    time={'Aug 2022 - Oct 2022'}
                    techStack={['React', 'Redux', 'Tiptap', 'Python']}
                    points={[
                        <>Developed the frontend for ContentTurbine AI platform, using React.js.</>,
                        <>Created a rich text editor using Tiptap framework with Grammarly-like error highlighting and correction and comments feature.</>
                    ]}
                />
                <ExperienceCard
                    role={'Full-stack Developer Intern'}
                    companyName={<a rel="noopener noreferrer" target={'_blank'} href='https://www.tghtech.com/'>TGH Tech</a>}
                    time={'May 2022 - July 2022'}
                    techStack={['React', 'Redux', 'Node/Express.js', 'Firebase', 'AWS Cognito']}
                    points={[
                        <>Developed the REST API for <a rel="noopener noreferrer" target={'_blank'} href='https://www.boringbots.com/'>Boring Bots</a>. </>,
                        <>Added web push notifications using Firebase Cloud Messaging to VCTech platform.</>,
                        <>Built the REST API for <a rel="noopener noreferrer" target={'_blank'} href='https://dev.thesocialtown.in/'>The Social Town</a> and used integrated AWS Cognito. </>
                    ]}
                />
                <ExperienceCard
                    role={'Flutter Developer Intern'}
                    companyName={<a rel="noopener noreferrer" target={'_blank'} href='https://cmtyhelp.com/'>CmtyHelp</a>}
                    time={'Jan 2022 - April 2022'}
                    techStack={['Flutter', 'Firebase']}
                    points={[
                        'Worked in a team of three to develop an app that lets businesses join CmtyHelp and offer incentives.',
                        <>Designed the UI for two screens and implemented them.</>,
                        <>Integrated it with the CmtyHelp main app.</>
                    ]}
                />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={'w-screen top-[100%] md:top-[96%]  absolute h-auto z-20'} alt={'layers'} src='layers2.svg' />
        </section>
    )
}

export default Experiences