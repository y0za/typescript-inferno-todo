import Component from 'inferno-component'
import h from 'inferno-hyperscript'

interface Props {
  add(string)
}
interface State {
  title: string
}

export default class Input extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  render() {
    return h('div', [
      h('input', { type: 'text', onInput: (e) => { this.state.title = e.target.value } }),
      h('button', { onClick: () => this.props.add(this.state.title) }, 'Add')
    ])
  }
}
