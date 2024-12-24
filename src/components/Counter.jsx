import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);  
    
    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const reset = () => {
        setCount(0)
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