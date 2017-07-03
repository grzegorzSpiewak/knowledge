// step 4 import fetch
import fetch from 'isomorphic-fetch'

// 1 step define action types than crate action creators
export const RECIVE_TASKS = 'RECIVE_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'

// step 3 Using Thunk to fetch data
export function fetchTasks() {
  return function (dispatch, getState) {
    let state = getState()

    if(!state.authentication || state.authentication.userId.length === 0 || state.authentication.apiToken.length === 0) {
      return null
    }

    return fetch('https://habitica.com/api/v3/tasks/user', {
      headers: {
        'X-API-User': state.authentication.userId,
        'X-API-Key': state.authentication.apiToken
      }
    })
    .then(response => response.json())
    .then((json) => {
      dispatch(reciveTasks(json.data))
    })
  }
}
// step 4 crate function to handle recived data
export function reciveTasks(tasks) {
  return {
    type: RECIVE_TASKS,
    payload: {
      tasks
    }
  };
}

// 2 step actions creators and than go reducers
export function addTask(text, type) {
  return {
    type: ADD_TASK,
    payload: {
      text,
      type
    }
  };
}

export function completeTask(id) {
  return {
    type: COMPLETE_TASK,
    payload: {
      id
    }
  };
}

export function login(userId, apiToken) {
  return {
    type: LOGIN,
    payload: {
      authentication: {
        userId,
        apiToken
      }
    }
  }
}

export function logout(userId, apiToken) {
  return {
    type: LOGOUT,
    payload: {
      authentication: {
        userId: '',
        apiToken: ''
      }
    }
  }
}
