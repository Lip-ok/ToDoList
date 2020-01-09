import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.newTasksTitleRef = React.createRef();
    }

    addTask = (newTitle) => {
        let newTask = {
            title: newTitle,
            priority: 'low',
            isDone: true
        };
        let newTasks = [...this.state.tasks, newTask];
        this.setState({
            tasks: newTasks
        });
    }


    changeFilter = (newFilterValue) => {
        this.setState(
            {filterValue: newFilterValue}
        )
    };


    changeStatus = (task, isDone) => {
        let newTask = this.state.tasks.map(t => {
                if (t !== task) {
                    return t;
                } else {
                    return {...t, isDone: isDone}
                }

            }
        )
        this.setState({tasks: newTask})

    };


    state = {
        tasks: [
            {title: 'JS', isDone: false, priority: "low"},
            {title: 'CSS', isDone: true, priority: 'low'},
            {title: 'Html', isDone: false, priority: 'high'},
            {title: 'ReactJS', isDone: true, priority: 'low'},
            {title: 'Redux', isDone: true, priority: 'high'}
        ],


    };


    render = (props) => {

        return (
            <div className="App">

                <div className="todoList">
                    <TodoListHeader addTask={this.addTask}/>
                    <TodoListTasks changeStatus={this.changeStatus} tasks={ this.state.tasks.filter(t => {
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

export default App;

