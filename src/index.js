import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {Provider} from 'react-redux'
//import * as serviceWorker from './serviceWorker';

//Redux 관련해서 불러와야 할 것들
import {createStore} from 'redux';
import reducers from './reducers'

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();


//스토어 생성
//스토어에 현재 상태를 내장하고, subscribe 중인 함수들이 상태가 업데이트 될 때마다 다시 실행하게 한다
const store = createStore(reducers);

//Provider는 react-redux에 내장되어있고
//리액트 앱에 store 쉽게 연동하는 거 도와줌
//Provider를 import해주고 연동할 컴포넌트(여기서는 <App />)를 감싸 준 다음에 store를 Provider의 props로 설정해주면 됨
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);


