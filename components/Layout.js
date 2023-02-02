import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Bennett&apos;s Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Showcasing my skills as a web developer. Discover my latest projects and see my work in action." />
                <meta name="keywords" content="web development, portfolio, web developer, HTML, CSS, JavaScript, responsive design, front-end development, UI/UX design, projects, skills, experience, hire" />
            </Head>
            <main id='test' className='text-white relative z-1 h-full'>{children}</main>
        </>
    )
}