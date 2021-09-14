import React, {useState, useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Mainjs from './compoAdd/Mainjs';
import CardDetail from "./compoAdd/CardDetail";

import './compoAdd/stylenek.css';

function App() {

  /* fetch data */
  const [data, setData] = useState([]);

  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setData(data.splice(0,6)));
  }, [])
  /* fetc data end */

  return (
    <Router>
      <Route exact path="/">
        <Mainjs data={data}/>
      </Route>
      <Route path="/cards/:username">
          <CardDetail data={data}/>
      </Route>
    </Router>
  );
}

export default App;
