import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { connect } from './connect'
import { connect } from 'react-redux'

class ThemeSwitch extends Component {

    static propTypes = {
        store: PropTypes.object
    }

    handleSwitchColor(color) {
        if(this.props.onSwitchColor) {
            this.props.onSwitchColor(color)
        }
    }

    render() {
        return(
            <div>
                <button style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'red')}>Red</button>
                <button style={{ color: this.props.themeColor }}
                    onClick={this.handleSwitchColor.bind(this, 'blue')}>Blue</button>
            </div>
        )
    }
}


// 这个函数的目的，就是把state中的themeColor，通过名为themeColor的参数传入进来
const mapStateToProps = (state) => {
    return {
        themeColor: state.themeColor
    }
}

// 这个函数的意思就是传入一个名为onSwitchColor方法，调用Dispatch修改state的里面的值，并刷新
const mapDispatchToProps = (dispatch) => {
    return {
        onSwitchColor: (color) => {
            dispatch({
                type: 'CHANGE_COLOR',
                themeColor: color
            })
        }
    }
}

ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch