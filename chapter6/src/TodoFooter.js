/**
 * Created by 陶鹏飞 on 2017/5/24.
 */
import React from 'react';

class TodoFooter extends React.Component{
    render(){
        return (
            <li className="list-group-item">{this.props.todoCompleteCount}选中 / {this.props.todoCount}总数</li>
        )
    }
}
/*
const TodoFooter = React.createClass({
    render: function() {
        return (
            <li className="list-group-item">{this.props.todoCompleteCount}选中 / {this.props.todoCount}总数</li>
        )
    }
})
*/

export default TodoFooter;