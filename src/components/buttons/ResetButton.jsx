const ResetButton = ({ setCount, initialValue}) => {

    const reset = () => {
        setCount(initialValue)
    }
    
    return (
        <button className='button' onClick={reset}>Reiniciar</button> 
    )
}

export default ResetButton;