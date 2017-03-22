import Component from 'inferno-component'
import h from 'inferno-hyperscript'
import Input from './input.ts'

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
    this.state.titles.push(title)
    console.log(this.state.titles)
  }

  render() {
    return h(Input, { add: this.addTitle.bind(this) })
  }
}
