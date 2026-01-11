import { connect } from 'react-redux'

function Counter (props) {
  const { count, step, dispatch } = props

  const decCount = () => {
    const action = { type: 'decrement' }
    dispatch(action)
    // counterReducer(state,action)
  }

  const incCount = () => {
    const action = { type: 'increment' }
    dispatch(action)
  }
  return (
    <div>
      Count: {count}
      <button onClick={decCount}>-</button>
      <button onClick={incCount}>+</button>
    </div>
  )
}

const mapStateToProps = state => {
  return state
}

// Створює HOC, який прокине dispatch в пропси
// перший параметр приймає функцію, щоб прокинути в пропси стан
const withAccessToStore = connect(mapStateToProps)

export default withAccessToStore(Counter)
