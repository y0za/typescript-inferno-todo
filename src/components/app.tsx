import { VNode } from 'inferno'
import Component from 'inferno-component'
import Input from './input'
import TodoList from './todo-list'
import Footer from './footer'
import { FilterType } from './todo-list'

interface Props {}
interface State {
  todoItems: {
    title: string,
    completed: boolean
  }[]
  filter: FilterType
}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      todoItems: [],
      filter: FilterType.None
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

  showAll() {
    this.setState({
      filter: FilterType.None
    })
  }

  showActive() {
    this.setState({
      filter: FilterType.Active
    })
  }

  showCompleted() {
    this.setState({
      filter: FilterType.Completed
    })
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

  leftCount(): number {
    const count = this.state.todoItems.filter((item) => {
      return !item.completed
    }).length

    return count
  }

  render(): VNode {
    return (
      <div>
        <Input add={this.addTodoItem.bind(this)} />
        <TodoList todoItems={this.state.todoItems}
          toggleItem={this.toggleItem.bind(this)}
          removeItem={this.removeItem.bind(this)}
          filter={this.state.filter}
        />
        <Footer showAll={this.showAll.bind(this)}
          showActive={this.showActive.bind(this)}
          showCompleted={this.showCompleted.bind(this)}
          clearCompleted={this.clearCompleted.bind(this)}
          clearAll={this.clearAll.bind(this)}
          leftCount={this.leftCount()}
        />
      </div>
    )
  }
}
