import React from 'react';
import './App.css';
import AddNewItemForm from "./AddNewItemForm";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import {connect} from "react-redux";
import {addTaskAC, changeTaskAC, delTaskAC, delTitleAC} from "./Redux/reducer";


class ToDoList extends React.Component {
    nextTaskId = 1;

    state = {
        filterValue: "All",
    };
    changeFilter = (newFilterValue) => {
        this.setState(
            {filterValue: newFilterValue}
        )
    };

    addTask = (newTitle) => {
        let newTask = {
            id: this.nextTaskId,
            title: newTitle,
            priority: 'low',
            isDone: true
        };
        this.nextTaskId++;
        this.props.addTask(newTask, this.props.id);
    }
    changeTask = (taskId, obj) => {
        let newTask = this.props.tasks.map(t => {
                if (t.id !== taskId) {
                    return t;
                } else {
                    return {...t, ...obj}
                }
            }
        )
       this.props.changeTask(newTask,this.props.id)
    };
    changeStatus = (taskId, isTaskDone) => {
        this.changeTask(taskId, {isDone: isTaskDone})
    };
    changeTitle = (taskId, newTitle) => {
        this.changeTask(taskId, {title: newTitle})
    };

    deleteToDoList =()=>{
        this.props.deleteToDoList( this.props.id)
    }
    deleteTitle =(id)=>{
        this.props.deleteTitle(id, this.props.id)
    }
    render = () => {

        return (
            <div className="App">

                <div className="todoList">
                    <div className="todoList-header">
                        <TodoListTitle title={this.props.title} deleteToDoList={this.deleteToDoList}/>
                        <AddNewItemForm addItem={this.addTask}/>
                    </div>
                    <TodoListTasks changeStatus={this.changeStatus}
                                   changeTitle={this.changeTitle}
                                   deleteTitle={this.deleteTitle}
                                   tasks={this.props.tasks.filter(t => {
                                           if (this.state.filterValue === 'All') {
                                               return true;
                                           }
                                           if (this.state.filterValue === 'Completed') {
                                               return t.isDone === true;
                                           }
                                           if (this.state.filterValue === 'Active') {
                                               return t.isDone === false;
                                           }
                                       }
                                   )}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue}/>
                </div>
            </div>

        )
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        addTask: (newTask, todolistsId) => {
            dispatch(addTaskAC(newTask, todolistsId))
        },
        changeTask: (newTask, todolistsId) => {
            dispatch(changeTaskAC(newTask, todolistsId))
        },
        deleteToDoList: ( todolistsId) => {
            dispatch(delTaskAC( todolistsId))
        },
        deleteTitle: (taskId, todolistsId)=>{
            dispatch(delTitleAC(taskId,todolistsId))
        }
    }
}


const ConnectToDoList = connect(null, mapDispatchToProps)(ToDoList);

export default ConnectToDoList;
