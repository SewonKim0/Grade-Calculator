import { useState, useRef } from "react";

//<Calculate>
function Calculate({gradeData}) {
    //display text ref
    let textRef = useRef();

    //function check: (-+09.) (one . allowed)
    function check(str) {
        //edge case: empty string
        if (str === "") {
            return false;
        }

        let validChars = "-+1234567890.";
        let pointCount = 0;

        for (let i = 0; i < str.length; i++) {
            let currChar = str[i];
            if (currChar === ".") {
                pointCount++;
                if (pointCount === 2) {
                    return false;
                }
            } else if (validChars.includes(currChar)) {
                //
            } else {
                return false;
            }
        }

        return true;
    }

    //(categoryId) -> [name, weight, {(itemId) -> [name, score, totalScore]}]
    return <div id="calculate">
        {/* Calculate Button */}
        <button
            onClick={() => {
                //check: weights
                for (let categoryId in gradeData) {
                    if (!check(gradeData[categoryId][1])) {
                        textRef.current.textContent = "Error: Invalid category weight value";
                        return;
                    }
                }
                //check: scores
                for (let categoryId in gradeData) {
                    let categoryData = gradeData[categoryId][2];
                    for (let itemId in categoryData) {
                        let score = categoryData[itemId][1];
                        if (!check(score)) {
                            textRef.current.textContent = "Error: Invalid item score";
                            return;
                        }
                    }
                }
                //check: totalScores
                for (let categoryId in gradeData) {
                    let categoryData = gradeData[categoryId][2];
                    for (let itemId in categoryData) {
                        let totalScore = categoryData[itemId][2];
                        if (!check(totalScore)) {
                            textRef.current.textContent = "Error: Invalid item total score";
                            return;
                        }
                    }
                }

                //calculate grade
                let total = 0;
                for (let categoryId in gradeData) {
                    //get weight
                    let weight = gradeData[categoryId][1];
                    //get category average
                    let categoryScore = 0;
                    let categoryTotalScore = 0;
                    for (let itemId in gradeData[categoryId][2]) {
                        let itemData = gradeData[categoryId][2][itemId];
                        categoryScore += parseFloat(itemData[1]);
                        categoryTotalScore += parseFloat(itemData[2]);
                    }
                    
                    //edge case: 0 total
                    if (categoryTotalScore === 0) {
                        continue;
                    }
                    //add to category total
                    total += (weight * 0.01) * (categoryScore / categoryTotalScore);
                }

                //display
                textRef.current.textContent = "Score: " + total;
            }}
        >
        <p> Calculate </p>
        </button>

        {/* Calculate Display */}
        <div>
            <p ref={textRef}>
                ...
            </p>
        </div>
    </div>
}

export default Calculate;