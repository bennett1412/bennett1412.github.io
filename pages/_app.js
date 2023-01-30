import '../styles/globals.css';
import Layout from '../components/layout'
import '../styles/blobz.min.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}