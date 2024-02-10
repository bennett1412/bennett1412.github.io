import Image from 'next/image'
import React from 'react'



const ImageComponent = ({ src, className, alt }) => {
    return (
        <div className={className}>
            <Image
                className='block align-middle'
                fill
                src={src}
                alt={alt}
            />
        </div>
    )
}

export default ImageComponent