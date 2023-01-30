import { useRef, useState } from 'react';
import { MdPermIdentity, MdWork } from 'react-icons/md'
import { BsCodeSlash } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import clsx from 'clsx';
import Navlink from './minorComponents/Navlink';
const CircularMenu = () => {
    const [open, setOpen] = useState(false);
    const navref = useRef([]);
    const linkList = [
        {
            icon: <MdPermIdentity />,
            href: '#intro'
        },
        {
            icon: <MdPermIdentity />,
            href: '#intro'
        },
        {
            icon: <MdPermIdentity />,
            href: '#intro'
        },

    ]
    const handleLinks = (e) => {
        setOpen(!open);
        const nav = navref.current;
        console.log(navref.current)
        let gap;
        nav.forEach((link, index) => {
            console.log('running')
            console.log(link.style.bottom)
            if (link.style.gridArea == '') {
                link.style.gridArea = '1 / 1 / 1 / 1';
            } else {
                link.style.gridArea = '';
            }
            // if (link.style.bottom == '0px') {
            //     gap = 50 * (index + 1);
            //     link.style.bottom = `${gap}px`;
            // } else {
            //     link.style.bottom = '0px';
            // }
        })
    }
    return (
        <div
            style={{
                position: 'fixed',
                left: '50%',
                bottom: '10%',
                display: 'grid',
                gridTemplateRows: '2.5rem 1fr',
                transition: 'all 0.5s'
            }}
        >
            <button
                onClick={handleLinks}
                style={{
                    gridArea: '1 / 1 / 1 / 1',
                }}
                className={clsx({
                    'bg-teal-700 bottom-0 flex justify-center items-center rounded-full z-10': true,
                    'h-[2.5rem] w-[2.5rem]': !open,
                    'h-[3.5rem] w-[3.5rem]': open
                })}
            >
                <AiOutlineMenu />
            </button>
            {linkList.map((link, index) => {
                return (
                    <a
                        key={link.href}
                        ref={ele => navref.current[index] = ele}
                        className={'bg-teal-800 p-2 transition-all navlink'}
                        style={{
                            gridArea: '1 / 1 / 1 / 1'
                        }}
                        href={link.href}
                    >
                        {link.icon}
                    </a>
                )
            })
            }

        </div>
    )
}

export default CircularMenu