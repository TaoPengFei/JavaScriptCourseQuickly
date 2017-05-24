/**
 * Created by 陶鹏飞 on 2017/5/23.
 */

import React from 'react'

class ContentList extends React.Component{

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
                <ul className="content-box">
                    {
                        list.map((entry,i)=>(
                                <li key={`response-${i}`} className="content-itme">
                                    <p className="content-item-signDate">{entry.signDate}</p>
                                    <p className="content-item-catName">{entry.catName}</p>
                                    <p className="content-item-amount">{entry.amount}</p>
                                </li>
                            )
                        )
                    }
                </ul>
            )
        }
    }
}
export  default ContentList;
