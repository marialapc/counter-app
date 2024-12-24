import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);    

    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button>Incrementar</button>
            <button>Decrementar</button>
            <button>Reiniciar</button>
        </div>
    )
}

export default Counter;