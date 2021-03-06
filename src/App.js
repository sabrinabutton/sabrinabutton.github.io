import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Features from "./components/Features";

export default function App() {
  const App = () => (
    <body background="transparent">
     <Nav />
      <Switch>
         <Route exact path="/" component={Home} /> 
         <Route exact path="/home" component={Home} /> 
         {/* <Route path="/projects" component={Projects}/> */}
         {/*<Route path="/features" component={Features}/>*/}
      </Switch>
    </body>
  );

  return (
    <Switch>
      <App />
    </Switch>
  );
}

