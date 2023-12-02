import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import NavBar from '../common/navBar';
import { Providers } from '../store/provider';
import Footer from '../common/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DevPedia</title>
        <meta
          name='description'
          content='Find a lot of great blogs that allow you to evolve...'
        />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Providers>
        <header>
          <NavBar />
        </header>
        <Component {...pageProps} />
        <footer>
          <Footer />
        </footer>
      </Providers>
    </>
  );
}

export default MyApp;
