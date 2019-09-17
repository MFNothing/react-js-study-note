import React, { Component } from 'react'
import CommentInput from './containers/CommentInput'
import CommentList from './containers/CommentList'
import './index.css'


export default class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            commentList: []
        }
    }

    componentWillMount () {
        this._loadComments()
      }
    
    _loadComments () {
        let comments = localStorage.getItem('comments')
        if (comments) {
            comments = JSON.parse(comments)
            this.setState({ commentList : comments })
        }
    }

    _saveComments (comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    onSubmit(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        const comments = this.state.commentList
        comments.push(comment)
        this.setState({ commentList: comments })
        this._saveComments(comments)
    }

    handleDeleteComment (index) {
        const comments = this.state.commentList
        comments.splice(index, 1)
        this.setState({ comments })
        this._saveComments(comments)
      }

    render() {
        console.log(this.state.commentList)
        return(
            <div className="wrapper">
                <CommentInput />
                <CommentList />
            </div>
        )
    }
}