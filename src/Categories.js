import Category from "./Category.js";
import { useState } from "react";

function Categories() {
//Categories obj
let [categoryList, setCategoryList] = useState([]);

return <>
<div id="categories">
    {/* Category List*/}
    <div>
    {categoryList}
    </div>

    {/* New Category Button */}
    <button 
    id="new-category-button"
    onClick={() => {
        //add to category list
        setCategoryList([...categoryList,
        <Category />  
        ]);
    }}>
    <p> + New Category </p>
    </button>

    {/* Remove All Categories Button */}
    <button 
    id="remove-categories-button"
    onClick={() => {
        //clear category list
        setCategoryList([]);
    }}>
    <p> - Remove Categories </p>
    </button>
</div>
</>
}

export default Categories;