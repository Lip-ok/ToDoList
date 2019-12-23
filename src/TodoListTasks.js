import React from 'react';
import './App.css';
import TodoListTask from './TodoListTask';

class TodoListTasks extends React.Component {
    render = (props) => {

        let tasksEl = this.props.tasks.map(t => {
            return <TodoListTask task={t} changeStatus={this.props.changeStatus}/>
        });

        return (

            <div className="todoList-tasks">
                {tasksEl}
            </div>

        );
    }
}

export default TodoListTasks;