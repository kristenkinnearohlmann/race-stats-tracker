import './App.css';
import Header from '../components/Header'
import Home from '../components/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Header />
        </header>
        <main className="app-main">
          <Route exact path="/" component={Home} />
        </main>
      </div>
    </Router>
  );
}

export default App;
