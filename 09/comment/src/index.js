import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux'
import commentReducer from './reducers/Comments'
import { Provider } from 'react-redux'



import CommentApp from './CommentApp'

class Index extends Component {
  render () {
    return (
      <div>
         <CommentApp />
      </div>
    )
  }
}

const store = createStore(commentReducer)

ReactDOM.render(<Provider store={store}><Index /></Provider>, document.getElementById('root'));
