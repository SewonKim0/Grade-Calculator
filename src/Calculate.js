import { useState, useRef } from "react";

//<Calculate>
function Calculate({grades}) {
//display text ref
let textRef = useRef();

return <div id="calculate">
    {/* Calculate Button */}
    <button
    onClick={() => {
        let total = 0;
        for (let entry of grades) {
        let itemTotal = 0;
        for (let item of entry[1]) {
            itemTotal += parseInt(item);
        }
        let itemAvg = itemTotal / entry[1].length;

        alert(itemAvg);
        }
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