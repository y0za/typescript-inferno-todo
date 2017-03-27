import Component from 'inferno-component'
import h from 'inferno-hyperscript'

interface Props {
  title: string,
  completed: boolean,
  toggle: () => void,
  remove: () => void
}

interface State {}

export default class Todo extends Component<Props, State> {
  render() {
    return h('div', [
      h('input', {
        type: 'checkbox',
        checked: this.props.completed,
        onChange: this.props.toggle
      }),
      h('span', this.props.title),
      h('button', { onClick: this.props.remove })
    ])
  }
}
