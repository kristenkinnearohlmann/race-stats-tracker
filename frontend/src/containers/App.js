import './containers.css'
import Header from '../components/Header'
import RaceNew from '../containers/RaceNew'
import Races from '../containers/Races'
import About from '../components/About'
import Home from '../containers/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Header />
        </header>
        <main className="app-main">
          <Switch>
            <Route exact path="/races/new" component={RaceNew} />
            <Route path="/races" render={routerProps => <Races {...routerProps} />} />
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App
