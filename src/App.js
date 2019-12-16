import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.newTaskTitleRef = React.createRef();
    }
        onAddTaskClick =()=> {
        let  newText = this.newTaskTitleRef.current.value;
            this.newTaskTitleRef.current.value='';
            let newTask = {
                title: newText,
                priority: 'low',
                isDone: true
            };

            let newTasks = [...this.state.tasks, newTask];
            this.setState({
                tasks: newTasks
            });

        }


    state = {
        tasks: [
            {title: 'JS', isDone: false, priority: ", priority: low"},
            {title: 'CSS', isDone: true, property: ' priority: low'},
            {title: 'Html', isDone: true, property: ' priority: low'},
            {title: 'ReactJS', isDone: true, property: ' priority: low'},
            {title: 'Redax', isDone: true, property: ' priority: low'}
        ],
        filterValue: 'All'
    };
    render = (props) => {

        return (
            <div className="App">
                <div className={"todoList"}>
                    {/*<TodoListHeader/>*/}

                    <div className="todoList">
                        <div className="todoList-header">
                            <h3 className="todoList-header__title">What to Learn</h3>
                            <div className="todoList-newTaskForm">
                                <input ref={this.newTaskTitleRef} type="text" placeholder="New task name"/>
                                <button onClick={this.onAddTaskClick}>Add</button>
                            </div>
                        </div>
                    </div>

                    <TodoListTasks tasks={this.state.tasks}/>
                    <TodoListFooter filterValue={this.state.filterValue}/>
                </div>

            </div>
        );
    }
}

export default App;

