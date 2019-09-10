import wrapWithLoadData from './warppedComponent'

class TextareaWithContent extends Component {
    render () {
      return <textarea value={this.props.data} />
    }
  }
  
  TextareaWithContent = wrapWithLoadData(TextareaWithContent, 'content')
  export default TextareaWithContent