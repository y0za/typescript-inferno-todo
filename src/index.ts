import { render } from 'inferno'
import h from 'inferno-hyperscript'

const container = document.getElementById('app')

render(h('p', 'hello'), container)
