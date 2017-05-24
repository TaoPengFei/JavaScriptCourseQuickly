/**
 * Created by 陶鹏飞 on 2017/5/23.
 */

import React from 'react';

function ContentList({contents}) {
    console.log(contents);
    return (

        <table className="content-box">
            <thead>
                <tr>
                    <th>记账时间</th>
                    <th>消费类型</th>
                    <th>消费金额</th>
                </tr>
            </thead>
            <tbody>
            {
                contents.map((entry,i)=>(
                        <tr key={`response-${i}`} className="content-item">
                            <td className="content-item-signDate">{entry.signDate}</td>
                            <td className="content-item-catName">{entry.catName}</td>
                            <td className="content-item-amount">{entry.amount}</td>
                        </tr>
                    )
                )
            }
            </tbody>
        </table>
    )
}
class ContentListContainer extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            loading:true,
            error:null,
            value:null
        }
    }
    componentDidMount(){
        this.props.promise.then(response=>response.json())
            .then(value=>this.setState({loading:false,value}))
            .catch(error=>this.setState({loading:false,error}))
    }
    render(){
        if(this.state.loading){
            return <span>Loading</span>;
        }else if(this.state.error!==null){
            return <span>Error:{this.state.error.message}</span>
        }else{
            const list = this.state.value;
            return (
                <ContentList contents={list} />
            )
        }
    }
}
export  default ContentListContainer;
