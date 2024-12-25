import { useState } from "react";
import IncrementDecrementButtons from '../buttons/IncrementDecrementButtons'
import ResetButton from '../buttons/ResetButton'
import './counter.scss'

const initialValue = 0;
const maxValue = 10;

const Counter = () => {
    const [count, setCount] = useState(initialValue);  

    return (
        <div className="counter">
            <h1>Counter</h1>
            <h2>{count}</h2>
            <IncrementDecrementButtons 
                count={count}
                setCount={setCount}
                initialValue={initialValue}
                maxValue={maxValue}
            />
            <ResetButton 
                setCount={setCount}
                initialValue={initialValue}
            />
            {count === maxValue && <p>Has alcanzado el límite</p>}             
        </div>
    )
}

export default Counter;