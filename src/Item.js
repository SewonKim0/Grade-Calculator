import { useState } from "react";

function Item(props) {
    //props
    if (props === undefined) {
        return <p> Loading... </p>;
    }
    let {gradeData, setGradeData, categoryId, itemId} = props;

    //item info
    let category = gradeData[categoryId];
    let name = category[2][itemId][0];
    let score = category[2][itemId][1];
    let totalScore = category[2][itemId][2];

    return <li>
        {/* Text Content */}
        <p> {`${name}: (${score} / ${totalScore})`} </p>

        {/* Delete Icon */}
        <svg viewBox="0 0 100 100" width="20px" height="20px">
            {/* Icon */}
            <rect x="0" y="0" width="100" height="100" fill="red" opacity="1" rx="20" ry="20" />
            <line x1="20" y1="20" x2="80" y2="80" stroke="white" strokeWidth="10" />
            <line x1="80" y1="20" x2="20" y2="80" stroke="white" strokeWidth="10" />

            {/* Selector */}
            <rect 
                id="selector" 
                onClick={() => {
                    //remove from categories
                    setGradeData((prev) => {
                        let gradeData = {...prev};
                        delete gradeData[categoryId][2][itemId];
                        return gradeData;
                    });
                }} 
                x="0" y="0" width="100" height="100" fill="white" opacity="0" rx="20" ry="20" />
        </svg>
    </li>
}

export default Item;