import { connect } from 'react-redux'

function Counter (props) {
  const { count, step, decrementCount, incrementCount, setNewStep } = props

  const decCount = () => decrementCount()

  const incCount = () => incrementCount()

  const stepChangeHandler = ({ target: { value } }) => setNewStep(Number(value))

  return (
    <div>
      Count: {count}
      <button onClick={decCount}>-</button>
      <button onClick={incCount}>+</button>
      <input type='number' value={step} onChange={stepChangeHandler} />
    </div>
  )
}

const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    decrementCount: () => {
      dispatch({ type: 'decrement' })
    },
    incrementCount: () => {
      dispatch({ type: 'increment' })
    },
    setNewStep: value => {
      dispatch({ type: 'setStep', value: value })
    }
  }
}

// Створює HOC, який прокине dispatch в пропси
// перший параметр приймає функцію, щоб прокинути в пропси стан
const withAccessToStore = connect(mapStateToProps, mapDispatchToProps)

export default withAccessToStore(Counter)
