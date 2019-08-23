//리듀서는 액션의 type에 따라 변화를 일으킴
import * as types from '../actions/ActionTypes';
import number from './number';
import color from './color';

import { combineReducers } from 'redux';

/*
//초기 상태 정의
const initialState = {
    color: 'black',
    number: 0
}

//리듀서 함수는 파라미터로 state와 action을 가지고, 그 내부에서 switch문을 통해서 action.type에 따라 상태에 다른 변화를 일으킨다
function counter(state = initialState, action){
    switch(action.type){
        case types.INCREMENT:
            return{
                ...state,
                number: state.number + 1
            };
        case types.DECREMENT:
            return{
                ...state,
                number: state.number -1
            };
        case types.SET_COLOR:
            return{
                ...state,
                color: action.color
            };
        default:
            return state;
    }
}
*/

const reducers = combineReducers({
    numberData: number,
    colorData: color
})

export default reducers;