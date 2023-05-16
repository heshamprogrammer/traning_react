import './App.css';
import Header from './comp/Header';
import Footer from './comp/Footer';
import { Helmet, HelmetProvider } from 'react-helmet-async';



const Link = () => {
  return (
    <>
      <Header />
      <HelmetProvider>
        <Helmet>
          <title>Link Page</title>
          {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
        </Helmet>
      </HelmetProvider>
      <h1>Link</h1>
      <Footer />
    </>
  );
}

export default Link;

