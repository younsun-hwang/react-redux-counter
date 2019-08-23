// action 객체를 만드는 액션 생성자를 선언

import * as types from './ActionTypes'; //ActionTypes.js에서 불러와서 씀

export const increment = () => ({
    type: types.INCREMENT
});

export const decrement = () => ({
    type: types.DECREMENT
});

export const setColor = (color) => ({
    type: types.SET_COLOR,
    color
});