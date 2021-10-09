import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./component/NavBar";
import Home from "./component/Home";
import Detail from "./component/Detail";
import About from "./component/footer/about";
import Character from "./component/DetailParams";
import data from "./data/data.json";
import { Switch, Route } from "react-router-dom";
function App() {
  const [charactersInfo, setCharactersInfo] = useState([]);
  useEffect(() => {
    setCharactersInfo([...data.Characters]);
  }, []);
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home characters={charactersInfo} />
        </Route>
        <Route exact path="/characterDetail">
          <Detail characters={charactersInfo} />
        </Route>

        <Route path="/characterDetail/:id">
          <Character characters={charactersInfo}></Character>
        </Route>
        <Route path="*">
          <h4>Ruta no encontrada</h4>
        </Route>
      </Switch>
      <About id="about" />
    </>
  );
}

export default App;
