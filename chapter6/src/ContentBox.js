/**
 * Created by 陶鹏飞 on 2017/5/23.
 */
import React from 'react';
import ContentListContent from './ContentListContainer';
import ContentForm from './ContentForm';

class ContentBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contents:fetch('http://localhost:8080/contentList')
        }
    }
    handleSubmitContent(value){
        const {signDate,catName,amount} = value;
        fetch('http://localhost:8080/contentList',
            {method:'post',body:JSON.stringify({signDate, catName, amount}),
                headers: {
                    'Content-Type': 'application/json'
                }})
            .then((res) => res.json())
            .then(res=>{
                console.log(res);
                if(res.id){
                    alert('保存成功');
                    this.setState({contents:fetch('http://localhost:8080/contentList')})
                }
            })
    }
    render(){
        return (
            <div>
                <ContentListContent promise={this.state.contents}/>
                <ContentForm onSubmitContent={this.handleSubmitContent}/>
            </div>
        )
    }
}
export default ContentBox;