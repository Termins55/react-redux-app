import { connect } from 'react-redux';
import { decrement, increment, setStep } from '../../store/slices/counterSlice';

function Counter (props) {
  const { count, step, decrementCount, incrementCount, setNewStep } = props;

  const decCount = () => decrementCount();

  const incCount = () => incrementCount();

  const stepChangeHandler = ({ target: { value } }) =>
    setNewStep(Number(value));

  return (
    <div>
      Count: {count}
      <button onClick={decCount}>-</button>
      <button onClick={incCount}>+</button>
      <input type='number' value={step} onChange={stepChangeHandler} />
    </div>
  );
}

const mapStateToProps = state => {
  return state.counter;
};

const mapDispatchToProps = dispatch => {
  return {
    decrementCount: () => {
      dispatch(decrement());
    },
    incrementCount: () => {
      dispatch(increment());
    },
    setNewStep: value => {
      dispatch(setStep(value)); // =>action.payload
    },
  };
};

// Створює HOC, який прокине dispatch в пропси
// перший параметр приймає функцію, щоб прокинути в пропси стан
const withAccessToStore = connect(mapStateToProps, mapDispatchToProps);

export default withAccessToStore(Counter);
