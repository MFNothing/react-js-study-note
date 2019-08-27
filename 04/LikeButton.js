// import createDOMFromString from './util.js'

document.write('<script type="text/javascript" src="./util.js"></script>')

class LikeButton {

    constructor() {
        this.state = {
            isLiked: false
        }
    }

    setState(state) {
        const oldEl = this.el
        this.state = state
        this.el = this.render()
        if (this.onStateChange) {
            this.onStateChange(oldEl, this.el)
        }
    }

    changeLikeText() {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render() {
        this.el = createDOMFromString(`
            <button class='like-btn'>
                <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
                <span>👍</span>
            </button>
        `)
        this.el.addEventListener('click', this.changeLikeText.bind(this), false)
        return this.el
    }
}