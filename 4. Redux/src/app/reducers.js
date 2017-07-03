// 1 step import all actions
import { RECIVE_TASKS, ADD_TASK, COMPLETE_TASK, LOGIN, LOGOUT } from './actions';
// 2 step Export rootReducers
export default rootReducer;

// 3 step crate initial state of app
const initialState = {
  tasks: []
};

// 4 step build rootReducer function
function rootReducer(state = initialState, action) {

  switch(action.type) {
    //case are all Actions
    case RECIVE_TASKS:
      //You can't change initial State you need to crate new one
      // Object assing copies states and and add changes to it
      return Object.assign({}, state, { tasks: action.payload.tasks });
    case ADD_TASK:
      // Depending on type of action you can crate a function and return it
      return addTaskReducer(state, action);
    case COMPLETE_TASK:
      return completeTaskReducer(state, action);
    case LOGIN:
      return Object.assign({}, state, { authentication: action.payload.authentication });
    case LOGOUT:
      return Object.assign({}, state, { authentication: action.payload.authentication });
    default:
      return state;
  }

  return state;
}

//Step 5 crata appropriate functions
function addTaskReducer(state, action) {
  var task = action.payload;
  task.completed = false;

  var lastTask = state.tasks[state.tasks.length - 1];

  task.id = lastTask.id++;
  //Remeber NEVER oprate on current state
  return Object.assign({}, state, { tasks: [...state.tasks, task] });
}

function completeTaskReducer(state, action) {
  var id = action.payload.id;

  return Object.assign({}, state, { tasks: state.tasks.map(task => {
      if(id === task.id) {
        return Object.assign({}, task, { completed: true });
      }

      return task;
    })
  });
}
