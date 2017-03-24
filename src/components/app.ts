import Component from 'inferno-component'
import h from 'inferno-hyperscript'
import Input from './input.ts'
import TodoList from './todo-list.ts'

interface Props {}
interface State {
  titles: string[]
}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      titles: []
    }
  }

  addTitle(title: string) {
    this.setState({ titles: [...this.state.titles, title] })
  }

  render() {
    return h('div', [
      h(Input, { add: this.addTitle.bind(this) }),
      h(TodoList, { todos: this.state.titles })
    ])
  }
}
