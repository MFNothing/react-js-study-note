import React, { PureComponent } from 'react'

export default (WarppedComponent, name) => {
    class NewComponent extends PureComponent {
        constructor () {
            super()
            this.state = {
                data: null
            }
        }

        componentDidMount() {
            const data = localStorage.getItem(name)
            this.setState({data})
        }
        
        render() {
            return <WarppedComponent data={this.state.data} />
        }
    }
    return NewComponent
}