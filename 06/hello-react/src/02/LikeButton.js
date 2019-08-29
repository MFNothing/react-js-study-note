import React, { Component } from 'react'

export default class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLiked: false
        }
    }
    handleLikeButtonClick() {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }
    render() {
        return(
            <div>
                <button onClick={this.handleLikeButtonClick.bind(this)}>
                    {
                        this.state.isLiked ? '取消' : '点赞'
                    }👍
                </button>
            </div>
        )
    }
}