import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css'


export default class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            commentList: []
        }
    }
    onSubmit(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        this.setState({
            commentList: [...this.state.commentList, comment]
        }) 
    }
    render() {
        console.log(this.state.commentList)
        return(
            <div className="wrapper">
                <CommentInput onSubmit={this.onSubmit.bind(this)}/>
                <CommentList comments={this.state.commentList}/>
            </div>
        )
    }
}