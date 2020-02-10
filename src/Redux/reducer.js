const ADD_TODOLIST  = "ADD-TODOLIST";
const ADD_TASK  = "ADD-TASK";
const CHANGE_TASK  = "CHANGE-TASK";
const DELETE_TASK  = "DELETE-TASK";
const DELETE_TITLE  = "DELETE-TITLE";

export const addTodoListAC = (newTodolist)=> ({type: "ADD-TODOLIST", newTodolist});
export const addTaskAC = (newTask, todolistsId)=> ({type: "ADD-TASK", newTask, todolistsId});
export const changeTaskAC =(newTask, todolistsId) => ({type: "CHANGE-TASK", newTask, todolistsId});
export const delTaskAC = (todolistsId) => ({type: "DELETE-TASK", todolistsId});
export const delTitleAC = (taskId,todolistsId) => ({type: "DELETE-TITLE", taskId,todolistsId});


let initialState = {
    todolists: []
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOLIST: {
            return {
                ...state, todolists: [...state.todolists, action.newTodolist]
            }
        }
        case ADD_TASK: {
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
        case CHANGE_TASK: {
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
        case DELETE_TASK: {
            return {
                todolists: state.todolists.filter(tl => {
                    return tl.id !== action.todolistsId
                })
            }
        }
        case DELETE_TITLE: {
            return {
                ...state, todolists: state.todolists.map(tl => {
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

export default reducer;