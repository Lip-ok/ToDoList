import React from 'react';


class TodoListTask extends React.Component {
    onIsDoneChange = (e) => {
        this.props.changeStatus(this.props.task, e.currentTarget.checked);
    }
    render = (props) => {
        let taskClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";
        return (
            <div className="todoList-tasks">
                <div className={taskClass}>
                    <input type="checkbox" checked={this.props.task.isDone} onChange={this.onIsDoneChange}/>
                    <span> {this.props.task.title} </span>
                    <span> priority: {this.props.task.priority}</span>
                </div>
            </div>

        );
    }
}

export default TodoListTask;