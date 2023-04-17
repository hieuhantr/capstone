import Header from './components/Header';
import Nav from './components/Nav';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ReservePage from './components/ReservePage'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
     <Header/>
     <Nav/>
          <Routes> 
    <Route path="/" element={<Main/>}></Route>
    <Route path="/about-me" element={<AboutPage/>}></Route>
    <Route path="/reserve" element={<ReservePage/>}></Route>
      </Routes>
     <Footer/>
    </>
  );
}

export default App;
