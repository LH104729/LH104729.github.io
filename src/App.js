import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/about' Component={About} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );

}

export default App;
