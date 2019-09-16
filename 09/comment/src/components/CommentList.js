import React, { Component } from 'react'
import Comment from './Comment'

export default class CommentList extends Component {

    handleDeleteComment (index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }

    render() {
        const { comments = [] } = this.props 
        return(
            <div>
                {comments.map((comment, i) => {
                    return (<Comment comment={comment} key={i} index={i} onDeleteComment={this.handleDeleteComment.bind(this)} />)
                })}
            </div>
        )
    }
}