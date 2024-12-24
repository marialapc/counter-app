import { useState } from "react";
import IncrementDecrementButtons from './IncrementDecrementButtons'
import ResetButton from './ResetButton'

const initialValue = 0;
const maxValue = 10;

const Counter = () => {
    const [count, setCount] = useState(initialValue);  

    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <IncrementDecrementButtons 
                count = {count}
                setCount = {setCount}
                initialValue = {initialValue}
                maxValue = {maxValue}
            />
            <ResetButton 
            setCount = {setCount}
            initialValue = {initialValue}
            />
                  
        </div>
    )
}

export default Counter;