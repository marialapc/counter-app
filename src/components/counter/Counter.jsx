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
            <h1 className="counter__title">Contador</h1>
            <h2 className="counter__count">{count}</h2>
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
            {count === maxValue && <p className="counter__message">Has alcanzado el límite</p>}             
        </div>
    )
}

export default Counter;