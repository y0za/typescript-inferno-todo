import Component from 'inferno-component'
import h from 'inferno-hyperscript'

interface Props {
  todos: string[]
}
interface State {}

export default class TodoList extends Component<Props, State> {
  render() {
    const todoList = this.props.todos.map(todo => h('p', todo))

    return h('div', todoList)
  }
}

