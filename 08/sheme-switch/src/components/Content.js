import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
// import ThemeSwitch from './ThemeSwitch'
// import { connect } from './connect'
// import { connect } from 'react-redux'

class Content extends Component {

    static propTypes = {
        store: PropTypes.object
    }

    render() {
        return (
            <div>
                <p style={{color: this.props.themeColor}}>React.js 小书内容</p>
                <ThemeSwitch onSwitchColor={this.props.onSwitchColor} themeColor={this.props.themeColor}/>
            </div>
        )
    }
}

export default Content