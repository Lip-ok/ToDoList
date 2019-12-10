import React from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";


class App extends React.Component {
    tasks = [
        {title: 'JS', isDone: false, priority:", priority: low"},
        // {title: 'CSS', isDone: true, property: ' priority: low'},
        // {title: 'Html', isDone: true, property: ' priority: low'},
        // {title: 'ReactJS', isDone: true, property: ' priority: low'},
        // {title: 'Redax', isDone: true,  property: ' priority: low'}
    ]
    
    filterValue = 'Active';
    render = (props) => {

      return (
            <div className="App">
    <div className={"todoList"}>
                <TodoListHeader  />
                <TodoListTasks tasks={this.tasks}/>
                <TodoListFooter filterValue={this.filterValue} />
    </div>

            </div>
        );
    }
}

export default App;

