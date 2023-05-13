import { useState } from "react"

//inner components
function NewItemForm({setNewItemButtonVisible, setNewItemFormVisible, setGradeData, categoryId, itemId, setItemId}) {
    //states: displays
    let [name, setName] = useState("name");
    let [score, setScore] = useState("your score");
    let [totalScore, setTotalScore] = useState("total score");
    //states: lengths
    let [nameLen, setNameLen] = useState("name".length);
    let [scoreLen, setScoreLen] = useState("your score".length);
    let [totalScoreLen, setTotalScoreLen] = useState("total score".length);

    return <div id="new-item-form">
        {/* Name */}
        <input
            onChange={(event) => {
                setName(event.target.value);
                setNameLen(Math.max(1, event.target.value.length));
            }}
            onFocus={() => {
                setName("");
                setNameLen(1);
            }} 
            size={nameLen} type="text" value={name}>
        </input>

        {/* Score */}
        <input
            onChange={(event) => {
                setScore(event.target.value);
                setScoreLen(Math.max(1, event.target.value.length));
            }}
            onFocus={() => {
                setScore("");
                setScoreLen(1);
            }} 
            size={scoreLen} type="text" value={score}>
        </input>
        
        {/* Total Score */}
        <input 
            onChange={(event) => {
                setTotalScore(event.target.value);
                setTotalScoreLen(Math.max(1, event.target.value.length));
            }}
            onFocus={() => {
                setTotalScore("");
                setTotalScoreLen(1);
            }}
            size={totalScoreLen} type="text" value={totalScore}>
        </input>

        {/* Submit Button */}
        <button
            onClick={() => {
                //add to gradeData by setGradeData
                setGradeData((prevGradeData) => {
                    prevGradeData[categoryId][2][itemId] = [name, score, totalScore];
                    return prevGradeData;
                })

                //update itemId
                setItemId(itemId + 1);

                //update button/form visibilities
                setNewItemButtonVisible(true);
                setNewItemFormVisible(false);
            }}>
            <p> Done </p>
        </button>
    </div>
}

export default NewItemForm;