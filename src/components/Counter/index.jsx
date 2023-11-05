import { connect } from 'react-redux'
import { decrement, increment, setStep } from '../../store/slices/counterSlice'

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
  return state.counter
}

const mapDispathToProps = dispatch => {
  return {
    incrementCount: () => dispatch(increment()),
    decrementCount: () => dispatch(decrement()),
    setNewStep: value => dispatch(setStep(value)) // => action.payload
  }
}

// створює HOC, який прокине dispatch в пропси
// перший параметр приймає функцію, щоб проникути в пропси стан
const withAccessToStore = connect(mapStateToProps, mapDispathToProps)

export default withAccessToStore(Counter)
