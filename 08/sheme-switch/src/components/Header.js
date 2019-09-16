import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Header extends Component {

    static propTypes = {
        store: PropTypes.object
    }

    render() {
        return(
            <h1 style={{ color: this.props.themeColor}}>React.js 小书</h1>
        )
    }
}