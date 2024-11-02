import logo from './logo.svg';
import './App.css';
import FrontPage from './components/FrontPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        
        <FrontPage/>
        
      </header>
    </div>
  );
}

export default App;
