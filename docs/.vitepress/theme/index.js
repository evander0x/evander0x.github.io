import DefaultTheme from 'vitepress/theme'
import './style.css'
import CopyPageButton from './components/CopyPageButton.vue'
import PageHeader from './components/PageHeader.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('CopyPageButton', CopyPageButton)
    app.component('PageHeader', PageHeader)
  }
}
