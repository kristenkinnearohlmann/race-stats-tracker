import './App.css';
import Header from '../components/Header'
import Home from '../containers/Home'
import About from '../components/About'
import Races from '../containers/Races'
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
          <Route exact path="/about" component={About} />
          <Route exact path="/races" component={Races} />
        </main>
      </div>
    </Router>
  );
}

export default App
