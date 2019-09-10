import React, { Component } from 'react'

export default class Clock extends Component {
    constructor () {
        super()
        this.state = {
            time: new Date()
        }
    }
    componentDidMount() {
        this.time = setInterval(()=>{
            this.setState({
                time: new Date()
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.time)
    }
    render() {
        return (
            <div>
                <div>
                    现在时间
                </div>
                <div>
                    {
                        this.state.time.toLocaleTimeString()
                    }
                </div>
            </div>
        )
    }
}
