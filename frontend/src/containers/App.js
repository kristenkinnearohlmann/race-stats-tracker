import './App.css';
import Header from '../components/Header'
import RaceNew from '../containers/RaceNew'
import Races from '../containers/Races'
import About from '../components/About'
import Home from '../containers/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Header />
        </header>
        <main className="app-main">
          <Route exact path="/races/new" component={RaceNew} />
          <Route exact path="/races" component={Races} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
        </main>
      </div>
    </Router>
  );
}

export default App
