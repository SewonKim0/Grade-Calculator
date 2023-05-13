import { useState } from "react";
import Item from "./Item.js"
import NewItemForm from "./NewItemForm.js"

function Category(props) {
    //state: name, weight
    let [name, setName] = useState("name");
    let [weight, setWeight] = useState("weight (%)");
    let [nameLen, setNameLen] = useState("name".length);
    let [weightLen, setWeightLen] = useState("weight".length);
    //state: button/form visibility
    let [newItemButtonVisible, setNewItemButtonVisible] = useState(true);
    let [newItemFormVisible, setNewItemFormVisible] = useState(false);
    //state: item id
    let [itemId, setItemId] = useState(0);

    //props
    if (props === undefined) {
        return <p> Loading... </p>
    }
    let gradeData = props.gradeData;
    let setGradeData = props.setGradeData;
    let categoryId = props.categoryId;

    return <div id="category">
        {/* Header: (Name, Weight) */}
        <div id="category-header">

            {/* Name */}
            <input id="category-name" 
                onChange={(event) => {
                    //Update for category
                    setName(event.target.value);
                    setNameLen(Math.max(1, event.target.value.length));
                    
                    //Update for gradeData
                    setGradeData((prevGradeData) => {
                        prevGradeData[categoryId][0] = event.target.value;
                        return prevGradeData;
                    })
                }}
                onFocus={() => {
                    //Update for category
                    setName("");
                    setNameLen(1);

                    //Update for gradeData
                    setGradeData((prevGradeData) => {
                        prevGradeData[categoryId][0] = "";
                        return prevGradeData;
                    })
                }}
                type="text" value={name} size={nameLen}
            />
            <p> | </p>

            {/* Weight */}
            <input id="category-weight" 
                onChange={(event) => {
                    //update for category
                    setWeight(event.target.value);
                    setWeightLen(Math.max(1, event.target.value.length));

                    //update for gradeData
                    setGradeData((prevGradeData) => {
                        prevGradeData[categoryId][1] = event.target.value;
                        return prevGradeData;
                    })
                }} 
                onFocus={() => {
                    //update for category
                    setWeight("");
                    setWeightLen(1);

                    //update for gradeData
                    setGradeData((prevGradeData) => {
                        prevGradeData[categoryId][1] = "";
                        return prevGradeData;
                    })
                }}
                type="text" value={weight} size={weightLen}
            />
        </div>
        
        {/* Items */}
        <ul id="item-list"> {
            Object.entries(gradeData[categoryId][2]).map(([id, itemData]) => {
                return <Item 
                    gradeData={gradeData} 
                    setGradeData={setGradeData} 
                    categoryId={categoryId} 
                    itemId={id} 
                    key={id}
                />
            })
        } </ul>

        {/* New Item Button */}
        {newItemButtonVisible && <button id="new-item-button" 
            onClick={() => {
                //hide button
                setNewItemButtonVisible(false);
                //render form
                setNewItemFormVisible(true);
            }}>
            <p> New Item </p>
        </button>}
        
        {/* New Item Form */}
        {newItemFormVisible && <NewItemForm
            setNewItemButtonVisible={setNewItemButtonVisible}
            setNewItemFormVisible={setNewItemFormVisible}
            setGradeData={setGradeData}
            categoryId={categoryId}
            itemId={itemId}
            setItemId={setItemId}
        />}
    </div>
}

export default Category;