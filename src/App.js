import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Gotham-Bold.otf';
import './App.css';

import {Routes , Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './component/Footer';

function App() {


  return (


    <div className="App">
    
      <Routes>
          <Route path='/' element={ <Home /> } exact />
          <Route path="about" element={ <About />} exact  />
          <Route path="services" element={ <Services />} exact  />
          <Route path="contact" element={ <Contact />} exact  />
      </Routes>
      <Footer />     
    </div>
   
  );
}

export default App;
