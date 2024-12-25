import PropTypes from 'prop-types';
import './buttons.scss'

const IncrementDecrementButtons = ({ count, setCount, initialValue, maxValue}) => {
    const increment = () => {
        setCount(oldCount => {
            if (oldCount < maxValue) {
                return oldCount + 1;
            }
            return oldCount;
        });
    };
    const decrement = () => {
        setCount(oldCount => {
            if (oldCount > initialValue) {
                return oldCount - 1;
            }
        })
    };
    return (
        <div className='button__wrapper'>
             <button className='button' onClick={increment} disabled={count >= maxValue}>Incrementar</button>
             <button className='button' onClick={decrement} disabled={count <= initialValue}>Decrementar</button>
        </div>
    )
}

IncrementDecrementButtons.propTypes = {
    count: PropTypes.number.isRequired,
    setCount: PropTypes.func.isRequired,
    initialValue: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
};

export default IncrementDecrementButtons;