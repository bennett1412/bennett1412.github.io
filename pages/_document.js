import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* open graph meta tags */}
        <meta name="author" content="Bennett Baby Madavana" />
        <meta property="og:title" content="Bennett Baby Madavana - Software Developer Portfolio" />
        <meta
          property="og:description"
          content="Explore the portfolio of Bennett Baby Madavana, a Software Developer based in Melbourne, Australia. Skilled in JavaScript, Python, React.js, and more."
        />
        <meta property="og:image" content="https://www.bennett1412.tech/android-chrome-512x512" />
        <meta property="og:url" content="https://www.bennett1412.tech" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bennett Baby Madavana - Software Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Bennett Baby Madavana, a Software Developer based in Melbourne, Australia. Skilled in JavaScript, Python, React.js, and more."
        />
        <meta
          name="twitter:image"
          content="https://www.bennett1412.tech/android-chrome-512x512"
        />
        <meta name="description" content="Showcasing my skills as a web developer. Discover my latest projects and see my work in action." />
        <meta name="keywords" content="Bennett Baby Madavana, Bennett, web development, portfolio, web developer, HTML, CSS, JavaScript, responsive design, front-end development, UI/UX design, projects, skills, experience, hire" />
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
