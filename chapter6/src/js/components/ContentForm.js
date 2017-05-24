/**
 * Created by 陶鹏飞 on 2017/5/23.
 */
import React from 'react';
import ContentActions from "../actions/ContentActions";


class ContentForm extends React.Component{
    constructor(props){
        super(props);
        this.handleCatNameChange = this.handleCatNameChange.bind(this);
        this.handleAmountChange = this.handleAmountChange.bind(this);
        this.handleSignDateChange = this.handleSignDateChange.bind(this);
        this.handleAddContent = this.handleAddContent.bind(this);

        this.state = {
            catName:'',
            amount:'',
            signDate: ''
        }
    }
    handleCatNameChange(event){
        this.setState({catName:event.target.value});
    }
    handleAmountChange(event){
        this.setState({amount:event.target.value});
    }
    handleSignDateChange(event){
        this.setState({signDate:event.target.value});
    }
    handleAddContent(){
        ContentActions.addContent(this.state);
    }
    render(){
        return (
            <div>
                <p>记账日期:<input type="text" value={this.state.signDate}
                               onChange={this.handleSignDateChange}/></p>
                <p>消费类型:<input type="text" value={this.state.catName}
                               onChange={this.handleCatNameChange}/></p>
                <p>消费金额:<input type="text" value={this.state.amount}
                                onChange={this.handleAmountChange}/></p>
                <p><button onClick={this.handleAddContent}>
                    保存
                </button></p>
            </div>
        )
    }
}
export  default ContentForm;