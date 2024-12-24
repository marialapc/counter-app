
const IncrementDecrementButtons = ({ count, setCount, initialValue, maxValue}) => {
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
    return (
        <div>
             <button onClick={increment}>Incrementar</button>
             <button onClick={decrement}>Decrementar</button>
        </div>
    )
}

export default IncrementDecrementButtons;