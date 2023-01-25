import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <nav className="flex gap-x-5 sticky top-0 z-10 p-5 text-white bg-dark-primary">
            <Link className='border-b- hover:border-b-orange-50' href={'#'} >Home</Link>
            <Link href={'#'} >Experience</Link>
            <Link href={'#'} >Projects</Link>
        </nav>
    )
}

export default Navbar