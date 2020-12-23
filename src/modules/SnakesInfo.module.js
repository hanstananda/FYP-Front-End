// ------------------------------------
// Constants
// ------------------------------------

const initialState = {
  items: [
    {
      id: 0,
      name: '1',
      description: 'test1',
      image: 'test1',
    },
    {
      id: 1,
      name: '2',
      description: 'test2',
      image: 'test2',
    },
  ],
}

const SET_ITEMS = 'SET_ITEMS'

// ------------------------------------
// Actions
// ------------------------------------

export const setItems = (payload) => (dispatch) => dispatch({
  type: SET_ITEMS,
  payload,
})

export const actions = {
  setItems,
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [SET_ITEMS]: (state, payload) => ({
    ...state,
    items: payload,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
