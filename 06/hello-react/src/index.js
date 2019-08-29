import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HTML } from './01/html'
import LikeButton from './02/LikeButton'

class Index extends Component {
  render () {
    return (
      <div>
        <HTML />
        <LikeButton />
      </div>
    )
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
)