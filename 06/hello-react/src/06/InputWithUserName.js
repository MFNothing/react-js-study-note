import warpWithLoadData from './warppedComponent'


class InputWithUserName extends Component {
    render() {
        return <input value={this.props.data} />
    }
}

InputWithUserName = warpWithLoadData(InputWithUserName, 'username')
export default InputWithUserName