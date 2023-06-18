import './App.css';
import { HashRouter,Routes,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Nav from './Components/Nav'
import Home from './Components/Home';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className='container-fluid'>
      
      <HashRouter>
      <Nav />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Projects' element={<Projects />} />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
