
class LikeButton extends Component {

    constructor() {
        super()
        this.state = {
            isLiked: false
        }
    }

    onClick() {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render() {
        return `
            <button class='like-btn'>
                <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
                <span>👍</span>
            </button>
        `
    }
}