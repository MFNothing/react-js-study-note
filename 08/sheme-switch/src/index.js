import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './containers/Header'
import Content from './containers/Content'  
// import { Provider } from './react-redux'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';


// // 替换成真正的redux
// function createStore(reducer) {
//     let state = null
//     const listeners = []
//     const subscribe = (listener) => listeners.push(listener)
//     const getState = () => state
//     const dispatch = (action) => {
//         state = reducer(state, action)
//         listeners.forEach((listener) => listener())
//     }
//     dispatch({})
//     return {getState, dispatch, subscribe}
// }

function themeReducer(state, action) {
    if (!state) {
        return {
            themeColor: 'red'
        }
    }
    switch(action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state, themeColor: action.themeColor
            }
        default:
            return state
    }
}

const store = createStore(themeReducer)


class Index extends Component {

    render() {
        return(
            <div>
                <Header />
                <Content />
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><Index /></Provider>, document.getElementById('root'));
