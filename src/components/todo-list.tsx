import { VNode } from 'inferno'
import Component from 'inferno-component'
import Todo from './todo'

export enum FilterType {
  None = 1,
  Active,
  Completed
}

interface Props {
  todoItems: {
    title: string,
    completed: boolean
  }[]
  toggleItem: (number) => () => void
  removeItem: (number) => () => void
  filter: FilterType
}

interface State {}

export default class TodoList extends Component<Props, State> {
  render(): VNode {
    const todoList = this.props.todoItems
      .filter((item) => {
        switch (this.props.filter) {
          case FilterType.Active:
            return !item.completed
          case FilterType.Completed:
            return item.completed
          default:
            return true
        }
      })
      .map((item, i) => {
        return (
          <Todo {...item}
            toggle={this.props.toggleItem(i)}
            remove={this.props.removeItem(i)}
          />
        )
      })

    return (
      <div>
        {todoList}
      </div>
    )
  }
}

