import "./App.css";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Main from "./comp/Main";
import img1 from "./comp/image/github-photo.jpg";
import { Helmet, HelmetProvider } from 'react-helmet-async';




function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Helmet>
          <title>App Page</title>
        </Helmet>
      </HelmetProvider>
      <Header />
      <main className="main">
        <Main
          logo={img1}
          title="hesham"
          desc="my name is hesham, frontend developer and software engneer"
        />
        <Main
          logo={img1}
          title="hesham"
          desc="my name is hesham, frontend developer and software engneer"
        />
        <Main
          logo={img1}
          title="hesham"
          desc="my name is hesham, frontend developer and software engneer"
        />
        <Main
          logo={img1}
          title="hesham"
          desc="my name is hesham, frontend developer and software engneer"
        />
        <Main
          logo={img1}
          title="hesham"
          desc="my name is hesham, frontend developer and software engneer"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
