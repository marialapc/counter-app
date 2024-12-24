import { useState } from "react";

const initialValue = 0;
const maxValue = 10;

const Counter = () => {
    const [count, setCount] = useState(initialValue);  
    
    const increment = () => {
        if(count < maxValue) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if (count > initialValue) {
            setCount(count - 1)
        }
    }

    const reset = () => {
        setCount(initialValue)
    }

    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={reset}>Reiniciar</button>
            
        </div>
    )
}

export default Counter;