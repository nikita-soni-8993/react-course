import { useState } from "react"

function Counter(){

    let [counter, setCounter] = useState(0);

    let addCounter = ()=> setCounter(counter+1);
    let removeCounter = () =>setCounter(counter-1)
    return(
        <>
            <div>Counter: {counter}</div>
            <button onClick={addCounter}>Add: {counter}</button>
            <button onClick={removeCounter}>Remove: {counter}</button>
        </>
    )
}

export default Counter