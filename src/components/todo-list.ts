import Component from 'inferno-component'
import h from 'inferno-hyperscript'
import Todo from './todo'

interface Props {
  todoItems: {
    title: string,
    completed: boolean,
    toggleItem: (number) => () => void,
    removeItem: (number) => () => void
  }[]
}

interface State {}

export default class TodoList extends Component<Props, State> {
  render() {
    const todoList = this.props.todoItems.map((item, i) => {
      return h(Todo, {
        ...item,
        toggle: this.props.toggleItem(i),
        remove: this.props.removeItem(i)
      })
    })

    return h('div', todoList)
  }
}

