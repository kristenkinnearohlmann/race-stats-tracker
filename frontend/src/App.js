import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <div>
          <p>
            <img src={logo} className="app-logo" alt="logo" /><span>Race Stats Tracker</span>
          </p>
        </div>
      </header>
      <main className="app-main">
        <p>
          Main content goes here
        </p>
      </main>
    </div>
  );
}

export default App;
