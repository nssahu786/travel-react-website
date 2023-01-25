import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Layouts/Header';
import Footer from './Component/Layouts/Footer';
import Home from './Component/Home/Home';
import Rooms from './Component/Pages/Rooms/Rooms';
import Ameneties from './Component/Pages/Ameneties/Ameneties';
import Contact from './Component/Pages/Contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element = {<Home/>} />
            <Route path="/rooms" element = {<Rooms/>} />
            <Route path="/amenities" element = {<Ameneties/>} />
            <Route path="/contact" element = {<Contact/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
