import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';
//import './css/bootstrap.min.css'
//import './css/style.css';


/*
import ContentList from './ContentList';
ReactDOM.render(<ContentList promise={fetch('http://localhost:8080/contentList')}/>,
    document.getElementById('contentList'));


 import ContentListContainer from './ContentListContainer';
 ReactDOM.render(<ContentListContainer promise={fetch('http://localhost:8080/contentList')}/>,
 document.getElementById('contentList'));
 */

//import ContentBox from './ContentBox';
//import NewContentBox from './js/components/NewContentBox';
import TodoBox from './TodoBox';

/*
 ReactDOM.render(
 <ContentBox/>, document.getElementById('contentList1'));



ReactDOM.render(
    <NewContentBox/>,
    document.getElementById('contentList')
);
*/

ReactDOM.render(
    <TodoBox />,
    document.getElementById('todoBox')
);



ReactDOM.render(
    <App />, document.getElementById('root')
);
registerServiceWorker();





