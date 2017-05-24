/**
 * Created by 陶鹏飞 on 2017/5/23.
 */
import React from 'react';
import ContentStore from '../stores/ContentStore';

import ContentListContent from './ContentListContainer';
import ContentForm from './ContentForm';

class NewContentBox extends React.Component{
    constructor(props){
        super(props);
        this.myOnChange = this.myOnChange.bind(this);
        this.state = {
            contents:ContentStore.getContents()
        }
    }
    myOnChange(){
        this.setState({
            contents:ContentStore.getContents()
        })
    }
    componentDidMount(){
        ContentStore.addChangeListener(this.myOnChange);
    }
    componentWillUnmount(){
        ContentStore.removeChangeListener(this.myOnChange);
    }
    render(){
        return (
            <div>
                <ContentListContent contents={this.state.contents}/>
                <ContentForm/>
            </div>
        )
    }
}
export default NewContentBox;