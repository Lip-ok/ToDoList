import React from 'react';
import './App.css';
import TodoListTask from './TodoListTask';

class TodoListTasks extends React.Component {
    deleteTitle = (id) =>{
        debugger
        this.props.deleteTitle(id)
    }
    render = () => {
        let tasksEl = this.props.tasks.map(t => {
            return <TodoListTask task={t}
                                 changeStatus={this.props.changeStatus}
                                 changeTitle={this.props.changeTitle}
                                 deleteTitle={this.deleteTitle}
            />
        });

        return (

            <div className="todoList-tasks">
                {tasksEl}
            </div>

        );
    }
}

export default TodoListTasks;