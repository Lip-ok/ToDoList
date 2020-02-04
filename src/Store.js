import {createStore} from "redux";

let initialState = {
    todolists: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-TODOLIST": {
            return {
                ...state,
                todolists: [...state.todolists, action.newTodolist]

            }

        }
        case "ADD-TASK": {

            return {
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistsId) {
                        return {...tl, tasks: [...tl.tasks, action.newTask]}
                    } else {
                        return tl;
                    }
                })
            }
        }
        case "CHANGE-TASK": {
            debugger
            return {
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistsId) {
                        return {...tl, tasks: action.newTask}
                    } else {
                        return tl;
                    }
                })
            }
        }
        case "DELETE-TASK": {
            debugger
            return {
                todolists: state.todolists.filter(tl => {
                    return tl.id !== action.todolistsId
                })
            }
        }
        case "DELETE-TITLE": {
            debugger
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistsId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.filter(tl => {
                                return tl.id !== action.taskId
                            })
                        }
                    }else{
                        return tl;
                    }
                })
            }
        }
    }
    return state;
}

const store = createStore(reducer);
export default store;