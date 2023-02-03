import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Bennett&apos;s Portfolio</title>
            </Head>
            <main id='test' className='text-white relative z-1 h-full'>{children}</main>
        </>
    )
}