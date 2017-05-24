/**
 * Created by 陶鹏飞 on 2017/5/24.
 */
import React from 'react';
import ReactDOM from 'react-dom';

const TodoForm = React.createClass({
    submitTask: function(e) {
        e.preventDefault();
        var task = ReactDOM.findDOMNode(this.refs.task).value.trim();
        if (!task) {
            return;
        }
        this.props.submitTask(task);
        ReactDOM.findDOMNode(this.refs.task).value = "";
    },

    render: function() {
        return (
            <div>
                <hr />
                <form className="form-horizontal" onSubmit={this.submitTask}>
                    <div className="form-group">
                        <label for="task" className="col-md-2 control-label">账单</label>
                        <div className="col-md-10">
                            <input type="text" id="task" ref="task" className="form-control" placeholder="账单数据"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-right">
                            <input type="submit" value="提交" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
})

export default TodoForm;