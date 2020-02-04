import React from 'react';
import './App.css';
import AddNewItemForm from "./AddNewItemForm";
import ToDoList from "./ToDoList";
import {connect} from "react-redux";



class App extends React.Component {
    nextTaskId = 1;

    AddToDoList = (title) => {
        let newToDoList = {
            id: this.nextTaskId,
            title: title,
            tasks: [],
        }
        this.nextTaskId++;
        this.props.addTodolist(newToDoList);
    }


    render = (props) => {
        const todolists = this.props
            .todolists
            .map(tl => <ToDoList id={tl.id} title={tl.title} tasks={tl.tasks}/>)
        return (
            <div>
                <AddNewItemForm addItem={this.AddToDoList}/>
                <div className="App">
                    {todolists}
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        todolists: state.todolists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodolist: (newTodolist) => {
            const action = {
                type: "ADD-TODOLIST",
                newTodolist: newTodolist
            };
            dispatch(action)
        },
        }
    }


const connectApp = connect(mapStateToProps, mapDispatchToProps)(App);
export default connectApp;

