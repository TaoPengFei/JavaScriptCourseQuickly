/**
 * Created by 陶鹏飞 on 2017/5/24.
 */
import React from 'react';
import TodoItem from './TodoItem';
import TodoFooter from './TodoFooter';

class TodoList extends React.Component{
    /*
    constructor(props) {
        super(props);
    }
    */
    render() {
        var taskList = this.props.data.map(function(listItem) {
            return (
                <TodoItem
                    taskId={listItem.id}
                    key={listItem.id}
                    task={listItem.task}
                    complete={listItem.complete}
                    deleteTask={this.props.deleteTask}
                    toggleComplete={this.props.toggleComplete} />
            )
        }, this);

        return (
            <ul className="list-group">
                {taskList}
                <TodoFooter todoCount={this.props.todoCount} todoCompleteCount={this.props.todoCompleteCount} />
            </ul>
        );
    }
}
/*
const TodoList = React.createClass({
    render: function() {
        var taskList = this.props.data.map(function(listItem) {
            return (
                <TodoItem
                    taskId={listItem.id}
                    key={listItem.id}
                    task={listItem.task}
                    complete={listItem.complete}
                    deleteTask={this.props.deleteTask}
                    toggleComplete={this.props.toggleComplete} />
            )
        }, this);

        return (
            <ul className="list-group">
                {taskList}
                <TodoFooter todoCount={this.props.todoCount} todoCompleteCount={this.props.todoCompleteCount} />
            </ul>
        );
    }
})
*/

export default TodoList;
