import React, { useRef, useEffect } from 'react'
import styles from '../../styles/card.module.css';
import { useInView } from 'react-intersection-observer';
const ExperienceCard = ({ role, companyName, time, skills }) => {
    const { ref: cardRef, inView, entry } = useInView({
        threshold: 1
    });
    const face1 = useRef();
    useEffect(() => {
        console.log('viewing now')
        let facediv = face1.current;
        if (inView) {
            // facediv.style.height = '50%';
            // facediv.style.lineHeight = '1.5rem';
            // facediv.style.borderRadius = '15px 15px 0 0';
        } else {
            // facediv.style.height = '';
            // facediv.style.lineHeight = '';
            // facediv.style.borderRadius = '';
        }

    }, [inView])

    return (
        <div ref={cardRef} className='drop-shadow-md'>
            <div className='card'>

                <div ref={face1} className='face face2'>
                    <div className='content'>
                        <h3 className='font-semibold role'>{role}</h3>
                        <p className='text-md strong company' >{companyName}</p>
                        <p className='italic time'>{time}</p>
                    </div>
                </div>
                <div className='face face1 '>
                    <div className='content'>
                        <h3 className='px-[8px]'>Skills:</h3>
                        <div className='flex gap-1 flex-wrap'>
                            {skills.map((skill, i) => <span key={i} className='skill'>{skill}</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceCard