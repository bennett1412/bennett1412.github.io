import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Showcasing my skills as a web developer. Discover my latest projects and see my work in action." />
        <meta name="keywords" content="web development, portfolio, web developer, HTML, CSS, JavaScript, responsive design, front-end development, UI/UX design, projects, skills, experience, hire" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
        <link href="https://fonts.googleapis.com/css2?&family=Inter&family=JetBrains+Mono&family=Poppins&family=Varela&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
