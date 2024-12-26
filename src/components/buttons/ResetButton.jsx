const ResetButton = ({ setCount, initialValue}) => {

    const reset = () => {
        setCount(initialValue)
    }
    
    return (
        <button className='button button--reset' onClick={reset}>Reiniciar</button> 
    )
}

ResetButton.propTypes = {
    setCount: PropTypes.func.isRequired,
    initialValue: PropTypes.number.isRequired,
};

export default ResetButton;