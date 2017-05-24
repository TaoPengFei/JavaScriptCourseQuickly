/**
 * Created by 陶鹏飞 on 2017/5/24.
 */
import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoBox = React.createClass({
    getInitialState: function () {
        return{
            data: [
                {"id": "0001", "task":"帐单一：买西服花费100元", "complete": "false"},
                {"id": "0002", "task":"帐单二：高铁203元", "complete": "false"},
                {"id": "0003", "task":"帐单三：聚会1203元", "complete": "true"},
            ]
        };
    },
    // 根据id删除一项任务
    handleTaskDelete: function (taskId) {
        let data = this.state.data;
        data = data.filter(function(task) {
            return task.id !== taskId;
        });
        this.setState({data});
    },
    // 切换一项任务的完成状态
    handleToggleComplete: function(taksId) {
        var data = this.state.data;
        for(var i in data) {
            if (data[i].id === taksId) {
                data[i].complete = data[i].complete === "true" ? "false" : "true";
                break;
            }
        }
        this.setState({data});
    },
    // 给新增的任务一个随机的id
    generateId: function() {
        return Math.floor(Math.random() * 9000) + 1000;
    },
    // 新增一项任务
    handleSubmit: function(task) {
        var data = this.state.data;
        var id = this.generateId();
        //var complete = "false";
        data = data.concat([{"id": id, "task": task, "complete": "false"}]);
        this.setState({data});
    },
    render: function () {
        var statistics = {
            // 统计任务总数及完成的数量
            todoCount: this.state.data.length || 0,
            todoCompleteCount: this.state.data.filter(function(item) {
                return item.complete === "true";
            }).length
        };
        return (
            <div className="well">
                <h1 className="text-center">账单列表</h1>
                <TodoList data={this.state.data}
                          deleteTask={this.handleTaskDelete}
                          toggleComplete={this.handleToggleComplete}
                          todoCount={statistics.todoCount}
                          todoCompleteCount={statistics.todoCompleteCount} />
                <TodoForm submitTask={this.handleSubmit} />
            </div>
        )
    }
});

export default TodoBox;