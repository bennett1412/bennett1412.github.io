import { useCallback, useEffect, useRef } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { TbView360 } from 'react-icons/tb';
import { useInView } from 'react-intersection-observer';

const ProjectCard = ({ title, body, icons, github, live }) => {

    const card = useRef();
    const { ref: inViewRef, inView, entry } = useInView({
        threshold: 0.8
    });
    useEffect(() => {
        let cardDiv = card.current;
        if (inView) {
            cardDiv.style.opacity = 1;
        }

    }, [inView])
    const setRefs = useCallback(
        (node) => {
            card.current = node;
            inViewRef(node);
        },
        [inViewRef],
    );
    return (
        <div ref={setRefs} className='w-[16rem] h-[20rem] opacity-0 bg-black-dark p-4 rounded-lg flex flex-col justify-between gap-y-4 z-10 project-card'>
            <h3 className='title h-[5rem] basis-2/6'>{title}</h3>
            <p className='body basis-2/6'>{body}</p>
            <div className='basis-1/6 flex items-center gap-x-2'>
                <p>Tech Stack: </p>
                <span className='flex items-center gap-x-2'>
                    {icons.map((Icon, i) => <Icon key={i} />)}
                </span>
            </div>
            <div className='basis-1/6 flex gap-x-3'>
                {github && <a className='hover:lemon-shadow' href={github}><AiOutlineGithub size={30} /></a>}
                {live && <a className='hover:lemon-shadow' href={live}><TbView360 color='white' size={30} /></a>}
            </div>
        </div>
    )
}

export default ProjectCard