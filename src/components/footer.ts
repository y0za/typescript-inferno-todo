import { VNode } from 'inferno'
import Component from 'inferno-component'
import h from 'inferno-hyperscript'

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
    return h('div', [
      h('span', this.leftCountText(this.props.leftCount)),
      h('button', { onClick: this.props.clearCompleted }, 'Clear completed'),
      h('button', { onClick: this.props.clearAll }, 'Clear all')
    ])
  }
}
