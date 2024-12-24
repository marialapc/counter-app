const ResetButton = ({ setCount, initialValue}) => {

    const reset = () => {
        setCount(initialValue)
    }
    return (
        <button onClick={reset}>Reiniciar</button> 
    )
}

export default ResetButton;