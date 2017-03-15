import { render } from 'inferno'
import App from './components/app.ts'

const container = document.getElementById('app')

const app = new App()

render(app.render(), container)
