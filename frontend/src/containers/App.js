import './App.css';
// import logo from '../logo.svg'
import Header from '../components/Header'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Header />
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
