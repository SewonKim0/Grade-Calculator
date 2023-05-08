import { useState } from "react";

function Category() {
//states: name, weight
let [name, setName] = useState("name");
let [weight, setWeight] = useState("weight (%)");
let [nameLen, setNameLen] = useState("name".length);
let [weightLen, setWeightLen] = useState("weight".length);
//states: items
let [items, setItems] = useState([]);
let [newItemButtonVisible, setNewItemButtonVisible] = useState(true);
let [newItemFormVisible, setNewItemFormVisible] = useState(false);

//inner components
function NewItemForm() {
    //states: displays
    let [name, setName] = useState("name");
    let [score, setScore] = useState("your score");
    let [totalScore, setTotalScore] = useState("total score");
    //states: lengths
    let [nameLen, setNameLen] = useState("name".length);
    let [scoreLen, setScoreLen] = useState("your score".length);
    let [totalScoreLen, setTotalScoreLen] = useState("total score".length);

    //onChange: update
    const updateName = (event) => {
    setName(event.target.value);
    setNameLen(Math.max(1, event.target.value.length));
    };
    const updateScore = (event) => {
    setScore(event.target.value);
    setScoreLen(Math.max(1, event.target.value.length));
    };
    const updateTotalScore = (event) => {
    setTotalScore(event.target.value);
    setTotalScoreLen(Math.max(1, event.target.value.length));
    };
    //onFocus: clear
    const clearName = () => {
    setName("");
    setNameLen(1);
    };
    const clearScore = () => {
    setScore("");
    setScoreLen(1);
    };
    const clearTotalScore = () => {
    setTotalScore("");
    setTotalScoreLen(1);
    };

    return <div id="new-item-form">
    <input onChange={updateName} onFocus={clearName} size={nameLen} type="text" value={name}></input>
    <input onChange={updateScore} onFocus={clearScore} size={scoreLen} type="text" value={score}></input>
    <input onChange={updateTotalScore} onFocus={clearTotalScore} size={totalScoreLen} type="text" value={totalScore}></input>
    <button onClick={() => {newItemFormSubmit(name, score, totalScore)}}> <p> Done </p> </button>
    </div>
}

//name change
function nameChange(event) {
    setName(event.target.value);
    setNameLen(Math.max(1, event.target.value.length));
}
//weight change
function weightChange(event) {
    setWeight(event.target.value);
    setWeightLen(Math.max(1, event.target.value.length));
}
//name focus
function nameFocus() {
    setName("");
    setNameLen(1);
}
//weight focus
function weightFocus() {
    setWeight("");
    setWeightLen(1);
}

//new item create form
function newItemCreate() {
    //hide button
    setNewItemButtonVisible(false);
    //render form
    setNewItemFormVisible(true);
}
//new item form submit
function newItemFormSubmit(name, score, totalScore) {
    //if duplicate name: stop
    for (let entry of items) {
    if (name == entry[0]) {
        alert("Cannot have duplicate names");
        return;
    }
    }
    //if colon in name: stop
    if (name.includes(":")) {
    alert("Cannot have colon in name");
    return;
    }
    //show button
    setNewItemButtonVisible(true);
    //hide form
    setNewItemFormVisible(false);
    //add to items
    setItems( [...items, [name, score, totalScore]] );
}

return <div id="category">
    {/* Header: (Name, Weight) */}
    <div id="category-header">
    {/* Name */}
    <input 
    id="category-name" 
    onChange={nameChange} 
    onFocus={nameFocus}
    type="text" 
    value={name} 
    size={nameLen}
    />
    <p> | </p>
    {/* Weight */}
    <input 
    id="category-weight" 
    onChange={weightChange} 
    onFocus={weightFocus}
    type="text" 
    value={weight} 
    size={weightLen}
    />
    </div>
    
    {/* Items */}
    <ul id="item-list"> {items.map(([name, score, totalScore]) => 
    <li>
        {/* Text Content */}
        <p> {name + ": (" + score + " / " + totalScore + ")"} </p>
        {/* Delete Icon */}
        <svg viewBox="0 0 100 100" width="20px" height="20px">
        <rect x="0" y="0" width="100" height="100" fill="red" opacity="1" rx="20" ry="20" />
        <line x1="20" y1="20" x2="80" y2="80" stroke="white" stroke-width="10" />
        <line x1="80" y1="20" x2="20" y2="80" stroke="white" stroke-width="10" />
        {/* Selector */}
        <rect 
            id="selector" 
            onClick={(event) => {
            //get own name
            let nameLabel = event.target.parentNode.parentNode.children[0].textContent;
            let name = nameLabel.substring(0, nameLabel.indexOf(":")).trim();
            //make new list without name
            let newList = [];
            for (let entry of items) {
                let entryName = entry[0].trim();
                if (entryName != name) {
                newList.push(entry);
                }
            }
            //set new list
            setItems(newList);
            }} 
            x="0" y="0" width="100" height="100" fill="white" opacity="0" rx="20" ry="20" />
        </svg>
    </li>
    )} </ul>

    {/* New Item Button/Form */}
    {newItemButtonVisible && <button id="new-item-button" onClick={newItemCreate}> <p> New Item </p> </button>}
    {newItemFormVisible && <NewItemForm />}
</div>
}

export default Category;