import logo from './logo.svg';
import './App.css';
import FrontPage from './components/FrontPage';
import About from './components/About';
import Books from './components/Books';
import Poems from './components/Poems';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/poems" element={<Poems/>}/>
      </Routes>
    </Router>


    // <div className="App">
    //   <header className="App-header">
    //     {/*<img src={logo} className="App-logo" alt="logo" />*/}
        
    //     <FrontPage/>
        
    //   </header>
    // </div>
  
    );
}

function Home (){
  return (
    <>
      <FrontPage />
    </>
  );
}

export default App;
