import React, { useRef, useEffect } from 'react'
import styles from '../../styles/card.module.css';
import { useInView } from 'react-intersection-observer';
const ExperienceCard = ({ role, companyName, time, techStack, points }) => {
    const { ref: cardRef, inView, entry } = useInView({
        threshold: 0.5
    });
    const face1 = useRef();
    const second = useRef();
    useEffect(() => {
        let facediv = face1.current;
        let secondDiv = second.current;
        if (inView) {
            facediv.style.height = '30%';
            facediv.style.lineHeight = '2rem';
            facediv.style.borderRadius = '15px 15px 0 0';
            secondDiv.style.height = '40%';
            secondDiv.style.borderRadius = '0px';
        } else {
            // facediv.style.height = '';
            // facediv.style.lineHeight = '';
            // facediv.style.borderRadius = '';
        }

    }, [inView])

    return (
        <div ref={cardRef} className='drop-shadow-md'>
            <div className='card'>

                <div ref={face1} className='face front'>
                    <div className='content'>
                        <h3 className='font-semibold role'>{role}</h3>
                        <p className='text-md strong company' >{companyName}</p>
                        <p className='italic time'>{time}</p>
                    </div>
                </div>
                <div ref={second} className='bg-black front-second JetbrainsMono'>
                    <ul className='list-disc'>
                        {points.map((point, i) => {
                            return <li key={i} >{point}</li>;
                        })}
                    </ul>
                </div>
                <div className='face behind'>
                    <div className='content'>
                        <h3 className='px-[8px]'>Tech Stack:</h3>
                        <div className='flex gap-1 flex-wrap'>
                            {techStack.map((skill, i) => <span key={i} className='skill'>{skill}</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ExperienceCard