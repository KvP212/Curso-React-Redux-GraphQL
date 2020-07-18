import { loginWithGoogle } from '../firebase'
// constants
let initialData = {
  loggedIn: false,
  fetching: false
}

let LOGIN = 'LOGIN'
let LOGIN_SUCCESS = 'LOGIN_SUCCESS'
let LOGIN_ERROR = 'LOGIN_ERROR'

//reducer
export default function reducer(state = initialData, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, fetching: false, error: ...action.payload }
    
    case LOGIN_ERROR:
      return { ...state, fetching: false, error: action.payload }
    
    case LOGIN:
      return { ...state, fetching: true }
    
    default:
      return state
  }
}

//function aux
function saveStorage( storage ) {
  localStorage.storage = JSON.stringify(storage)
}

//action (action creator)
export let doGoogleLoginAction = () => (dispatch, getState) => {

  dispatch({
    type: LOGIN
  })

  return loginWithGoogle()
    .then(user => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { ...user }
      })
      saveStorage(getState())
    })
    .catch(e => {
      console.log(e)
      dispatch({
        type: LOGIN_ERROR,
        payload: e.message
      })
  })
}