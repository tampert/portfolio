import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Dota from './routes/Dota';
import Code from './routes/Code';
import NotFound from './routes/NotFound.js'

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/dota" exact component={Dota} />
        <Route path="/code" exact component={Code} />
        <Route component={NotFound} />
      </Switch>
    </div>
    </Router>
  );
}


// const Interests = () => {
//   return (
//     <div className='route'>Interest route</div>
//   )
// }


export default App;
