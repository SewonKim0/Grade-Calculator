import Category from "./Category.js";
import { useState } from "react";

function Categories(props) {
    //category id
    let [categoryId, setCategoryId] = useState(0);

    //props
    if (props === undefined) {
        return <p> Loading... </p>;
    }
    let gradeData = props.gradeData;
    let setGradeData = props.setGradeData;

    return <div id="categories">
        {/* Category List*/}
        <div>
            {Object.entries(gradeData).map(([id, data]) => {
                return <Category 
                    gradeData={gradeData} 
                    setGradeData={setGradeData} 
                    categoryId={id} 
                    key={id}
                />
            })}
        </div>

        {/* New Category Button */}
        <button 
            id="new-category-button"
            onClick={() => {
                //add new category
                setGradeData({...gradeData, [categoryId]: ["name", "weight (%)", {}]});
                //update categoryId
                setCategoryId(categoryId + 1);
            }}>
            <p> + New Category </p>
        </button>

        {/* Remove All Categories Button */}
        <button 
            id="remove-categories-button"
            onClick={() => {
                //remove all categories
                setGradeData({});
            }}>
            <p> - Remove Categories </p>
        </button>
    </div>
}

export default Categories;