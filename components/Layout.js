import Navbar from './Navbar'
import Footer from './Footer'
// import video from '/lucid_flow.mp4';

export default function Layout({ children }) {
    return (
        <>
            {/* <Navbar /> */}
            <main id='test' className='text-white relative z-1 h-full'>{children}</main>
            {/* <Footer /> */}
        </>
    )
}