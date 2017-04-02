import Component from 'inferno-component'
import h from 'inferno-hyperscript'

interface Props {
  add(string)
}
interface State {
  title: string,
  inputElement: HTMLInputElement | null
}

export default class Input extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      title: '',
      inputElement: null
    }
  }

  handleClick() {
    this.props.add(this.state.title)
    this.setState({ title: '' })
    if (this.state.inputElement != null) {
      this.state.inputElement.value = ''
    }
  }

  render() {
    return h('div', [
      h('input', {
        type: 'text',
        ref: (el) => { this.state.inputElement = (el as HTMLInputElement) },
        onInput: (e) => { this.state.title = e.target.value }
      }),
      h('button', { onClick: this.handleClick.bind(this) }, 'Add')
    ])
  }
}
