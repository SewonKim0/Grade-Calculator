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
                        textRef.textContent = "Error: Invalid category weight value";
                        return;
                    }
                }
                //check: scores
                //check: totalScores
                //calculate grade
                //display
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