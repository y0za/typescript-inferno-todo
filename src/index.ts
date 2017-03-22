import { render } from 'inferno'
import h from 'inferno-hyperscript'
import App from './components/app.ts'

const container = document.getElementById('app')

render(h(App), container)
