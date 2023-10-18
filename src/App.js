import React from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Main";
import Project from "./components/Project";
import Features from "./components/Features";
import "./css/master.css";

export const TEXT_COLLAPSE_OPTIONS = {
  collapse: true, // default state when component rendered
  collapseText: "... show more", // text to show when collapsed
  expandText: "show less", // text to show when expanded
  minHeight: 50, // component height when closed
  maxHeight: 450, // expanded to
  textStyle: {
    // pass the css for the collapseText and expandText here
    color: "rgb(19, 100, 53)",
    cursor: "pointer",
  },
};
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
