import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import CharacterDetail from "./component/CharacterDetail";
import About from "./component/About";
import Character from "./component/Character";
import data from "./data/data.json";
import { Switch, Route } from "react-router-dom";
import Footer from "./component/Footer";


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
          <CharacterDetail characters={charactersInfo} />
        </Route>

        <Route path="/characterDetail/:id">
          <Character characters={charactersInfo}></Character>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <h4>Ruta no encontrada</h4>
        </Route>
      </Switch>
      <Footer id="about" />
    </>
  );
}

export default App;
