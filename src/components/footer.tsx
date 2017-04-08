import { VNode } from 'inferno'
import Component from 'inferno-component'

interface Props {
  clearCompleted: () => void
  clearAll: () => void
  leftCount: number
}
interface State {}

export default class Footer extends Component<Props, State> {
  leftCountText(count: number): string {
    if (count === 1) {
      return `${count} item left`
    } else {
      return `${count} items left`
    }
  }

  render(): VNode {
    return (
      <div>
        <span>{this.leftCountText(this.props.leftCount)}</span>
        <a href={'#/all'} onClick={this.props.showAll}>All</a>
        <a href={'#/active'} onClick={this.props.showActive}>Active</a>
        <a href={'#/completed'} onClick={this.props.showCompleted}>Completed</a>
        <button onClick={this.props.clearCompleted}>Clear completed</button>
        <button onClick={this.props.clearAll}>Clear all</button>
      </div>
    )
  }
}
