import { useRef, useState } from 'react';
import { MdPermIdentity, MdWork } from 'react-icons/md'
import { BsCodeSlash } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import clsx from 'clsx';
import Navlink from './Navlink';
import { IoMdClose } from 'react-icons/io'
const CircularMenu = () => {
    const [open, setOpen] = useState(false);
    const navref = useRef([]);
    const linkList = [
        {
            icon: <MdPermIdentity />,
            href: '#about',
            tooltip: 'About'
        },
        {
            icon: <MdWork />,
            href: '#experiences',
            tooltip: 'Experience'
        },
        {
            icon: <BsCodeSlash />,
            href: '#projects',
            tooltip: 'Projects'
        },

    ]
    const handleLinks = (e) => {
        setOpen(!open)
        const nav = navref.current;
        let gap;
        nav.forEach((link, index) => {
            if (link.style.bottom == '0px') {
                if (index == 0)
                    gap = 60;
                else
                    gap = 60 + 45 * (index);
                link.style.bottom = `${gap}px`;
            } else {
                link.style.bottom = '0px';
            }
        })
    }
    return (
        <div className='fixed horizontal-center bottom-[10%] gap-2 w-[3.5rem] z-20'>
            {linkList.map((link, index) => {
                return (
                    <a
                        title={link.tooltip}
                        key={link.href}
                        ref={ele => navref.current[index] = ele}
                        className={'absolute horizontal-center bg-teal-800 p-2 transition-all navlink drop-shadow-md hover:bg-white hover:text-dark-primary'}
                        style={{ bottom: '0px' }}
                        href={link.href}
                    >
                        {link.icon}
                    </a>
                )
            })
            }
            <button
                onClick={handleLinks}
                className={clsx({
                    'absolute bg-teal-700 horizontal-center bottom-0 flex justify-center items-center rounded-full transition-all': true,
                    'drop-shadow-md': true,
                    'h-[2.5rem] w-[2.5rem]': !open,
                    'h-[3.5rem] w-[3.5rem]': open
                })}
            >
                {open ? <IoMdClose /> : <AiOutlineMenu />}
            </button>
        </div>
    )
}

export default CircularMenu