import { useState } from "react";
import Categories from "./Categories.js";
import Calculate from "./Calculate.js";
import './App.css';

function App() {
  //(categoryId) -> [name, weight, {(itemId) -> [name, score, totalScore]}]
  let [gradeData, setGradeData] = useState({});

  return <>
    {/* Header */}
    <div id="header">
      <h1> Grade Calculator </h1>
      <h1> | </h1>
      <a href="https://sewonkim0.github.io/SewonKim/">
        <h1> Back </h1>
      </a>
    </div>

    {/* Categories */}
    <Categories gradeData={gradeData} setGradeData={setGradeData} />

    {/* Calculate */}
    <Calculate gradeData={gradeData} />
  </>
}

export default App;