import { VNode } from 'inferno'
import Component from 'inferno-component'

interface Props {
  title: string,
  completed: boolean,
  toggle: () => void,
  remove: () => void
}

interface State {}

export default class Todo extends Component<Props, State> {
  render(): VNode {
    return (
      <div>
        <input type="checkbox" checked={this.props.completed} onChange={this.props.toggle} />
        <span>{this.props.title}</span>
        <button onClick={this.props.remove}></button>
      </div>
    )
  }
}
