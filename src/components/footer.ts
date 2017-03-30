import Component from 'inferno-component'
import h from 'inferno-hyperscript'

interface Props {
  clearCompleted: () => void
  clearAll: () => void
}
interface State {}

export default class Footer extends Component<Props, State> {
  render() {
    return h('div', [
      h('button', { onClick: this.props.clearCompleted }, 'Clear completed'),
      h('button', { onClick: this.props.clearAll }, 'Clear lll')
    ])
  }
}
