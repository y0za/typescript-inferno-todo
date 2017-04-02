import Component from 'inferno-component'
import h from 'inferno-hyperscript'
import Input from './input'
import TodoList from './todo-list'
import Footer from './footer'

interface Props {}
interface State {
  todoItems: {
    title: string,
    completed: boolean
  }[]
}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      todoItems: []
    }
  }

  addTodoItem(title: string) {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { title: title, completed: false }
      ]
    })
  }

  toggleItem(index: number): () => void {
    return () => {
      this.setState({
        todoItems: this.state.todoItems.map((item, i) => {
          if (i === index) {
            return {
              ...item,
              completed: !item.completed
            }
          }
          return item
        })
      })
    }
  }

  removeItem(index: number): () => void {
    return () => {
      this.setState({
        todoItems: this.state.todoItems.filter((_, i) => {
          return i !== index
        })
      })
    }
  }

  clearCompleted() {
    this.setState({
      todoItems: this.state.todoItems.filter((item) => {
        return !item.completed
      })
    })
  }

  clearAll() {
    this.setState({
      todoItems: []
    })
  }

  render() {
    return h('div', [
      h(Input, {
        add: this.addTodoItem.bind(this)
      }),
      h(TodoList, {
        todoItems: this.state.todoItems,
        toggleItem: this.toggleItem.bind(this),
        removeItem: this.removeItem.bind(this)
      }),
      h(Footer, {
        clearCompleted: this.clearCompleted.bind(this),
        clearAll: this.clearAll.bind(this)
      })
    ])
  }
}
