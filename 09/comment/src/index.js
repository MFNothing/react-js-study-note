import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



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

ReactDOM.render(<Index />, document.getElementById('root'));
