import './App.css';
import { Header } from './components/header/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import AboutMNNIT from './components/mnnit/AboutMNNIT';
import AboutUs from './components/about/About';
import Component from './components/CreateComponent/Component';
import EditComponent from './components/EditComponent/EditComponent';
import Home from './components/home/Home';
function App() {
  return (
    <div className="App">
      <Router>
    <Header />
    <Switch>
      <Route exact path ='/aboutMnnit'>
      <AboutMNNIT />
      </Route>
      <Route exact path ='/create'>
      <Component/>
      </Route>
      <Route exact path ='/edit'>
      <EditComponent/>
      </Route>
      <Route eaxct path ='/about'>
      <AboutUs />
      </Route>

      <Route exact path ='/contact'>
      <AboutMNNIT />
      </Route>

 <Route exact path ='/'>
      <Home />
      </Route>


    </Switch>
    
    </Router>
    </div>
  );
}
export default App;
