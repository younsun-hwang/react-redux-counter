import React from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div
           className = "Counter"
           onClick = {onIncrement}
           onContextMenu={
               (e) => {
                   e.preventDefault(); //원래 우클릭하면 메뉴가 열리는데 e.preventDefault()를 실행하면 메뉴가 열리지 않게 됨
                   onDecrement(); //대신 우클릭할 때 얘만 실행되겠지
               }
           }
           onDoubleClick = {onSetColor}
           style = {{backgroundColor: color}} >
            {number} 
        </div>
    )
}

Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
}

export default Counter
