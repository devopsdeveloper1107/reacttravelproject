//import logo from './logo.svg';
//import './App.css';

import { Routes, Route} from 'react-router-dom';
import Header from "./Components/Common/Header";
import Home from "./Components/Home";
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Footer from "./Components/Common/Footer";
import Categorymenu from './Components/Categorymenu';
import Pagenotfound from './Components/Pagenotfound';


function App() {
  return (
    <div className="App">
       <Header/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/aboutus" element={<Aboutus/>} />
            <Route path="/:url" element={<Categorymenu/>} />
            <Route path="/contactus" element={<Contactus/>} />    
            <Route path="*" element={<Pagenotfound/>} />     
          </Routes>       

       <Footer/>
    </div>
  );
}

export default App;
