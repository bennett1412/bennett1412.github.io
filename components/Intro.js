import Image from 'next/image'
import React from 'react'
import ImageComponent from './minorComponents/ImageComponent'
import { SiLinkedin, SiTwitter, SiGithub, SiGmail } from 'react-icons/si';
import { GrDocumentDownload } from 'react-icons/gr';
import { FaFileDownload } from 'react-icons/fa';
const Intro = () => {
    return (
        <section id='about' className='relative h-screen'>
            <div className='m-3 p-3 rounded-md flex flex-col gap-y-4 items-center'>
                <div style={{
                    fontWeight: '400',
                    fontSize: '50px',
                    lineHeight: '60px',
                }} className='text-[#8bb82d] text-5xl text-center font-Varela'>
                    Hey, I&apos;m Bennett
                </div>
                <div className='w-40 h-50 grid items-center md:scale-110'>
                    <div className="tk-blob" style={{
                        ['--fill']: '#041925',
                        ['--time']: '12s',
                        ['--amount']: '10',
                        gridArea: '1 / 1 / 1 / 1'
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={160} height={180} viewBox="0 0 747.2 726.7">
                            <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>                        </svg>
                    </div>
                    <div className="tk-blob" style={{
                        ['--fill']: '#041925',
                        ['--time']: '15s',
                        ['--amount']: '5',
                        gridArea: '1 / 1 / 1 / 1'
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={160} height={180} viewBox="0 0 747.2 726.7">
                            <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z"></path>                        </svg>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img style={{ gridArea: '1 / 1 / 1 / 1' }} alt='profile-pic' className={'w-[90px] h-auto rounded-full justify-self-center z-10'} src={'/coat_profile_pic.jpg'} />
                </div>
                <div className='text-center font-Poppins text-xl'>
                    A full stack web developer based in Melbourne, Australia.
                    <p className='font-bold ' >Transforming ideas into reality, one project at a time.</p>
                </div>
                <div className='flex gap-x-3'>
                    <a rel="noopener noreferrer" target={'_blank'} href='https://www.linkedin.com/in/bennett-b-madavana-1a6b631b0/'><SiLinkedin className='hover-glow' size={25} /></a>
                    <a rel="noopener noreferrer" target={'_blank'} href='https://github.com/bennett1412/'><SiGithub className='hover-glow' size={25} /></a>
                    <a rel="noopener noreferrer" target={'_blank'} href='https://twitter.com/MadavanaB/'><SiTwitter size={25} className='hover-glow' /></a>
                    <a rel="noopener noreferrer" target={'_blank'} title='bennettmadavana@gmail.com' href='mailto:bennettmadavana@gmail.com'><SiGmail className='hover-glow' size={25} /></a>
                    <a rel="noopener noreferrer" target={'_blank'} title='Download Resume' href='/resume_v0.2.pdf'><FaFileDownload className='hover-glow' size={23} /></a>

                    {/* <a rel="noopener noreferrer" target={'_blank'} title='/resume' href='mailto:bennettmadavana@gmail.com'><SiGmail className='hover:lemon-shadow' size={25} /></a> */}
                </div>

            </div>
        </section >
    )
}

export default Intro
