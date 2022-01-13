import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import DetailView from "./components/detail/DetailView.jsx";
import AboutUs from "./components/about/About";
import EditComponent from "./components/edit/EditComponent";
import CreateComponent from "./components/create/CreateComponent";
import Home from "./components/home/Home";
import AboutMNNIT from "./components/mnnit/AboutMNNIT";
import Header from "./components/header/Header";
import Login from "./components/account/Login";
import Signup from "./components/account/Signup";

function App() {
  // const themes = localStorage.getItem("theme");
  // themes ? console.log("theme is ", themes) : console.log("No theme");
  return (
    <Router>
      <Header />

      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>

          <Route exact path="/aboutMnnit">
            <AboutMNNIT />
          </Route>
          <Route exact path="/create">
            <CreateComponent />
          </Route>
          <Route exact path="/update/:id">
            <EditComponent />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/details/:id">
            <DetailView />
          </Route>

          <Route exact path="/contact">
            <AboutMNNIT />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
