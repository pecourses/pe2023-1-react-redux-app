import { connect } from 'react-redux'

function Counter (props) {
  const { count, step, incrementCount, decrementCount, setNewStep } = props

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

const mapDispathToProps = dispatch => {
  return {
    incrementCount: () => dispatch({ type: 'increment' }),
    decrementCount: () => dispatch({ type: 'decrement' }),
    setNewStep: value => dispatch({ type: 'setStep', value })
  }
}

// створює HOC, який прокине dispatch в пропси
// перший параметр приймає функцію, щоб проникути в пропси стан
const withAccessToStore = connect(mapStateToProps, mapDispathToProps)

export default withAccessToStore(Counter)
