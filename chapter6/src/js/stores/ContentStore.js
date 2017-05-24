/**
 * Created by 陶鹏飞 on 2017/5/23.
 */
import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ContentConstants from '../constants/ContentConstants';

let contents = [];
const  contentStore = Object.assign({},EventEmitter.prototype,{
    getContents(){
        return contents;
    },
    emitChange(){
        this.emit('change');
    },
    addChangeListener(callBack){
        this.on('change',callBack);
    },
    removeChangeListener(callback){
        this.removeListener(callback);
    }
});

AppDispatcher.register((action)=>{
    switch(action.type){
        case ContentConstants.LOAD_CONTENT_SUCCESS :
            contents = action.payload.content;
            contentStore.emitChange();
        break;
        default : {
            return ;
        }
    }
})
export  default contentStore;