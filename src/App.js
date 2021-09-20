import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'

import Navbar from "./components/Navbar"

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route component={ Home } path='/' exact />
        <Route component={ Resume } path='/resume' />
        <Route component={ Projects } path='/projects' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
