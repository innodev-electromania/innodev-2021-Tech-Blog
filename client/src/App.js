import './App.css';
import { Header } from './components/header/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import AboutMNNIT from './components/mnnit/AboutMNNIT';
import AboutUs from './components/about/About';
import CreateComponent from './components/create/CreateComponent';
import EditComponent from './components/edit/EditComponent';
import Home from './components/home/Home';
import DetailView from './components/detail/DetailView.jsx';
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
      <CreateComponent/>
      </Route>
      <Route exact path ='/edit'>
      <EditComponent/>
      </Route>
      <Route exact path ='/about'>
      <AboutUs />
      </Route>
      <Route exact path ='/details'>
        <DetailView />
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
