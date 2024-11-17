import logo from './logo.svg';
import './App.css';
import FrontPage from './components/FrontPage';
import About from './components/About';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About/>}/>
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
