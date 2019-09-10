import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { HTML } from './01/html'
// import LikeButton from './02/LikeButton'
// import CommentApp from './03/CommentApp'
// import CommentApp1 from './05/CommentApp'
// import Clock from './04/Clock'
import CommentApp2 from './05/CommentApp'
class Index extends Component {
  constructor() {
    super() 
    this.state = {
      showClock: true
    }
  }
  handleHideClick = () => {
    this.setState({
      showClock: !this.state.showClock
    })
  }
  render () {
    return (
      <div>
        {/* <HTML />
        <LikeButton /> */}
        {this.state.showClock && 
          <div>
            {/* <Clock /> */}
            {/* <CommentApp1 /> */}
            <CommentApp2 />
          </div>
        }
        {/* <button onClick={this.handleHideClick}>
          显示或隐藏时钟
        </button> */}
      </div>
    )
  }
}


ReactDOM.render(
  <Index />,
  document.getElementById('root')
)