import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import HomeDemo from './components/HomeDemo';
import Details from './components/Details';
// import Contact from './components/Contact';
// import NotFound from './components/NotFouond';
import Photos from "./components/Photos";
function App() {
  return (
    <React.Fragment>
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={HomeDemo}></Route>
          <Route path="/fotos" component={Photos}></Route>
          <Route path="/projects" component={Projects}></Route>
          <Route path="/demo" component={HomeDemo}></Route>
          <Route path="/details/:projectID" component={Details}></Route>
        {/* <Route path="/contact" component={Contact}></Route> */}
        {/* <Route component={NotFound}></Route> */}
      </Switch>

      {/* Maybe add modal */}
    </React.Fragment>
  );
}

export default App;
