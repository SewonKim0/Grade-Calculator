import { useState, useRef } from "react";
import Categories from "./Categories.js";
import Calculate from "./Calculate.js";
import './App.css';

function App() {
  let [grades, setGrades] = useState([]);

  return <>
    {/* Header */}
    <div id="header">
      <h1> Grade Calculator </h1>
      <h1> | </h1>
      <a href="https://sewonkim0.github.io/SewonKim/"> <h1> Back </h1> </a>
    </div>

    {/* Categories */}
    <Categories updateGradeData={(data) => {
      setGrades(data);
      alert(grades);
    }} />

    {/* Calculate */}
    <Calculate grades={grades} />
  </>
}

export default App;
