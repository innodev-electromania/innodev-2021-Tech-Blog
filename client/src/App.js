import './App.css';
import { Header } from './components/header/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import AboutMNNIT from './components/mnnit/AboutMNNIT';
import AboutUs from './components/about/AboutUs';
import Home from './components/home/Home';
function App() {
  return (
    <div className="App">
      <Router>
    <Header />
    <Switch>
      <Route path ='/aboutMnnit'>
      <AboutMNNIT />
      </Route>
      <Route path ='/about'>
      <AboutUs />
      </Route>

      <Route path ='/contact'>
      <AboutMNNIT />
      </Route>

 <Route path ='/'>
      <Home />
      </Route>


    </Switch>
    
    </Router>
    </div>
  );
}
export default App;
