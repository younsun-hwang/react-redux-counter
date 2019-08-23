import Counter from '../components/Counter';
import * as actions from '../actions'; //액션생성자 사용해서 액션 만들어야 해서 import함
import {connect} from 'react-redux';
import {getRandomColor} from '../utils';
 
//컨테이너에서는
//(1) 상태 연결은 mapStateToProps, 액션함수로 연결은 mapDispatchToProps로 만들어서 해줌
//(2) (1)에서 만든 두 함수를 connect에 전달
//(3) 전달받은 함수를 Counter 컴포넌트에 전달해서 내보내주면 됨.

//store안에 state값을 props로 연결해줌
const mapStateToProps = (state) => ({
    color: state.colorData.color,
    number: state.numberData.number
})

const mapDispatchToProps = (dispatch) => ({
    onIncrement: () => dispatch(actions.increment()), //해당 액션을 dispatch하는 함수를 만들어서 props로 연결해줌
    onDecrement: () => dispatch(actions.decrement()),
    onSetColor: () => {
        const color = getRandomColor();
        dispatch(actions.setColor(color));
    }
});


//Counter 컴포넌트의 Container 컴포넌트
const CounterContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;
