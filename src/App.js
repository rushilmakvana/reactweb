// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import Blouse from "./Blouse";
import Dresses from "./Dresses";
import Kurti from "./Kurti";
import Gown from "./Gown";
// import { useEffect } from "react";
// import axios from "axios";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/blouses" component={Blouse} />
        <Route exact path="/dresses" component={Dresses} />
        <Route exact path="/kurtis" component={Kurti} />
        <Route exact path="/gowns" component={Gown} />
      </Switch>
    </>
  );
}

export default App;
