
import React from 'react';
import './App.css';
import TodoListTask from './TodoListTask';

class TodoListTasks extends React.Component {
    render = (props) => {
        
        let tasksEl = this.props.tasks.map( (task) =>{
        return <TodoListTask title={task.title}  isDone={task.isDone} priority={task.priority}/>});
        // [
        //             <TodoListTask title={this.props.tasks[0].title} isDone={this.props.tasks[0].isDone}/>
        //             <TodoListTask title={this.props.tasks[1].title} isDone={this.props.tasks[1].isDone}/>
        //             <TodoListTask title={this.props.tasks[2].title} isDone={this.props.tasks[2].isDone}/>
        //             <TodoListTask title={this.props.tasks[3].title} isDone={this.props.tasks[3].isDone}/>
        // ];
        return (

                <div className="todoList-tasks">
                    {tasksEl}
                    {/* <TodoListTask title={this.props.tasks[0].title} isDone={this.props.tasks[0].isDone}/>
                    <TodoListTask title={this.props.tasks[1].title} isDone={this.props.tasks[1].isDone}/>
                    <TodoListTask title={this.props.tasks[2].title} isDone={this.props.tasks[2].isDone}/>
                    <TodoListTask title={this.props.tasks[3].title} isDone={this.props.tasks[3].isDone}/> */}



                    {/* <div className="todoList-task">
                        <input type="checkbox" checked={true}/>
                        <span>CSS</span>
                    </div>
                    <div className="todoList-task">
                        <input type="checkbox" checked={false}/>
                        <span>JS</span>
                    </div>
                    <div className="todoList-task">
                        <input type="checkbox" checked={false}/>
                        <span>ReactJS</span>
                    </div>
                    <div className="todoList-task">
                        <input type="checkbox" checked={true}/>
                        <span>Patterns</span>
                    </div> */}
                </div>

        );
    }
}
export default TodoListTasks;