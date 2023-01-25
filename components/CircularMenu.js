import { useState } from 'react';
import { MdPermIdentity, MdWork } from 'react-icons/md'
import { BsCodeSlash } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import clsx from 'clsx';
// import {
//     CircleMenu,
//     CircleMenuItem,
//     TooltipPlacement,
// } from "react-circular-menu";
import { Planet } from 'react-planet';
import MenuButtons from './minorComponents/MenuButtons';
const CircularMenu = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='fixed left-[50%] bottom-[10%] gap-1'>
            {open && <div className={clsx({ 'transition-all relative grid place-items-center': true, 'flex flex-col items-center gap-y-5': false })}>
                <MenuButtons><MdPermIdentity /></MenuButtons>
                <MenuButtons><MdPermIdentity /></MenuButtons>
                <MenuButtons><MdPermIdentity /></MenuButtons>
            </div>}
            <button onClick={() => setOpen(!open)} className='p-5 bg-teal-700 rounded-full'>
                <AiOutlineMenu />
            </button>
        </div>
    )
}

export default CircularMenu