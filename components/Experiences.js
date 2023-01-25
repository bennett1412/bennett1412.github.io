import Image from 'next/image'
import React from 'react'

const Experiences = () => {
    return (
        <section id='experiences' className='experience relative bg-teal-light-1 h-screen'>
            <h2 className='text-2xl text-center'>Experiences</h2>
            <Image
                className='absolute -bottom-[100px]'
                alt='layers'
                width={800}
                height={130}
                src='/layers2.svg'
            />
        </section>
    )
}

export default Experiences