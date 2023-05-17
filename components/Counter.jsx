import { useState } from "react";

// function Counter({initVal}) {
    // let [currVal, adjust] = useState(initVal);
//     function increment() {
//         console.log(`time to increment`);
        // adjust((prevCounter) => prevCounter + 1);
//         adjust((prevCounter) => prevCounter + 1);
//     }
    
//     function decrement() {
//         console.log(`time to decrement`);
//         adjust((prevCounter) => prevCounter - 1);
//         adjust((prevCounter) => prevCounter - 1);
//     }
//     // let [initVal, change] = useState[initVal];
    // return (
    //     <div className="container">
    //         <button onClick={(currVal) => decrement(currVal)}>-</button>
    //         {currVal}
    //         <button onClick={(currVal) => increment(currVal)}>+</button>
    //     </div>
    // )
    
// }

// function Counter({initVal}) {
//     let [lebron, adjust] = useState({item: "apple", amount: 0});
//     function addCart() {
//         adjust((prevLebron) => ({ ...prevLebron, amount: prevLebron.amount + 1 }));
//     }
//     function minusCart() {
//         adjust((prevLebron) => ({ ...prevLebron, amount: prevLebron.amount - 1 }));
//     }
    

    // return (
    //     <div className="container">
    //         <button onClick={minusCart}>-</button>
    //         we have {lebron.amount} apples
    //         <button onClick={addCart}>+</button>
    //     </div>
    // )
// }

function Counter({initVal}) {
    //our arr variable is initialised as an empty array as seen in the paramenter inside the useState
    //the function we use to make changes is called adjust
    let [arr, adjust] = useState([]);
    function addVal() {
        adjust((prevArr) => [...prevArr, "+"]);

    }

    function deleteVal () {
        adjust((prevArr) => ([...prevArr, "-"]));
    }
    return (
        <div className="container">
            <button onClick={deleteVal}>-</button>
            <button onClick={addVal}>+</button>
            {arr}
        </div>
    )
}


export default Counter;
