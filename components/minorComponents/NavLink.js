import React from 'react'
import Link from 'next/link'

const NavLink = ({ children, href, ...props }) => {
    return (
        <Link href={href} {...props}>{children}</Link>
    )
}

export default NavLink