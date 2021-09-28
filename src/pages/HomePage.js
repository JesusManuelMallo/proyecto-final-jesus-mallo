import logo from './logo2.png';
import './App.css';

function HomePage() {
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Welcome to Where Am I</code>
          </p>
          <a
            className="App-link"
            href={"./index.js"}
            target="_blank"
            rel="noopener noreferrer"
          >
            ENTER
          </a>
        </header>
      </div>
    );
  }
  
  export default HomePage;
  