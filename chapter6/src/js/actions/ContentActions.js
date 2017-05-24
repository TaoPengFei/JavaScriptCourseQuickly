/**
 * Created by 陶鹏飞 on 2017/5/23.
 */
import AppDispatcher from '../dispatcher/AppDispatcher';
import ContentConstants from '../constants/ContentConstants';

const ContentActions = {
    loadContent(){
        AppDispatcher.dispatch({
            type:ContentConstants.LOAD_CONTENT
        });
        fetch('http://localhost:8080/contentList')
            .then(res=>res.json())
            .then((value)=>{
                console.log('here',value);
                AppDispatcher.dispatch({
                    type:ContentConstants.LOAD_CONTENT_SUCCESS,
                    payload:{
                        content:value
                    }
                })
            })
            .catch(err=>{
                AppDispatcher.dispatch({
                    type:ContentConstants.LOAD_CONTENT_ERROR,
                    payload:{
                        error:err
                    }
                })
            })
    },
    addContent(text){
        AppDispatcher.dispatch({
            type:ContentConstants.ADD_CONTENT
        });
        const {signDate,catName,amount} = text;
        fetch('http://localhost:8080/contentList',
            {method:'post',body:JSON.stringify({signDate, catName, amount}),
                headers: {
                    'Content-Type': 'application/json'
                }})
            .then((res) => res.json())
            .then(res=>{
                if(res.id){
                    AppDispatcher.dispatch({
                        type:ContentConstants.ADD_CONTENT_SUCCESS,
                        payload:{
                            content:res
                        }
                    });
                    this.loadContent();
                }
            })
            .catch(err=>{
                AppDispatcher.dispatch({
                    type:ContentConstants.ADD_CONTENT_ERROR,
                    payload:{
                        error:err
                    }
                })
            })
    }
}
export default ContentActions;