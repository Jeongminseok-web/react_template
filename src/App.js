import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import ScrollToTop from 'react-scroll-to-top';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />

          <Route path="/signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>

        <Footer />
        <ScrollToTop
          smooth
          width="20"
          height="20"
          color="black"
          style={{
            backgroundColor: 'yellow',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
