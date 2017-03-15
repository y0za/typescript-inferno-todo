import Component from 'inferno-component'
import h from 'inferno-hyperscript'

interface Props {}

export default class App extends Component<Props, {}> {
  render() {
    return h('p', 'hello')
  }
}
