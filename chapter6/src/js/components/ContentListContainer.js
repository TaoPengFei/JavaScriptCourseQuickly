/**
 * Created by 陶鹏飞 on 2017/5/23.
 */
import React from 'react';
import ContentActions from "../actions/ContentActions";

class ContentListContainer extends React.Component{
    componentDidMount(){
        ContentActions.loadContent();
    }
    render(){
        const list = this.props.contents;
        return  (
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
                    list.map((entry,i)=>(
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
}
export  default ContentListContainer;
