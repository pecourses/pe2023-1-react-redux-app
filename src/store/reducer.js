// початковий стан
const initialState = {
  count: 0,
  step: 1,
};

// reducer - чиста ф-я (state, action) => state
// action - {type: 'increment', payload} - js-object з обов'язковою властивістю type
function counterReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case 'increment': {
      const { count, step } = state;
      return { ...state, count: count + step };
    }

    case 'decrement': {
      const { count, step } = state;
      return { ...state, count: count - step };
    }
    case 'setStep': {
      const { value } = action;
      return { ...state, step: value };
    }

    default:
      return state;
  }
}

export default counterReducer;
