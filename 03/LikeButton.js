// import createDOMFromString from './util.js'

document.write('<script type="text/javascript" src="./util.js"></script>')

class LikeButton {

    constructor() {
        this.state = {
            isLiked: false
        }
    }

    changeLikeText() {
        const likeText = this.el.querySelector('.like-text')
        this.state.isLiked = !this.state.isLiked
        likeText.innerHTML = this.state.isLiked ? '取消' : '点赞'
    }

    render() {
        this.el = createDOMFromString(`
            <button id='like-btn'>
                <span class='like-text'>赞1</span>
                <span>👍</span>
            </button>
        `)
        this.el.addEventListener('click', this.changeLikeText.bind(this), false)
        return this.el
    }
}