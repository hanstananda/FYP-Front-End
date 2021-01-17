// ------------------------------------
// Constants
// ------------------------------------

const SAVE_ME = 'SAVE_ME'
const LOGGED_IN = 'LOGGED_IN'
const TOKEN = 'TOKEN'

const initialState = {
  checked: false,
  loggedIn: false,
  token: '',
  me: {},
}

// ------------------------------------
// Actions
// ------------------------------------

// TODO: check the user's login state
export const authenticate = (token) => (dispatch) => dispatch({
  type: LOGGED_IN,
  loggedIn: true,
  token,
  checked: true,
})

export const logout = () => (dispatch) => dispatch({
  type: LOGGED_IN,
  loggedIn: false,
  token: '',
  checked: false,
})

export const saveMe = (me) => (dispatch) => dispatch({
  type: SAVE_ME,
  me,
})

export const actions = {
  authenticate,
  logout,
  saveMe,
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [LOGGED_IN]: (state, { loggedIn, checked }) => ({
    ...state,
    loggedIn,
    checked,
  }),
  [SAVE_ME]: (state, { me }) => ({
    ...state,
    me,
  }),
  [TOKEN]: (state, { token }) => ({
    ...state,
    token,
  }),
}

// ------------------------------------
// Reducer
// ------------------------------------

export default function reducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
