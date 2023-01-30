import { Router } from './router.js'

const router = new Router()
router.add('#home', 'pages/home.html')
router.add('#universe', 'pages/universe.html')
router.add('#exploration', 'pages/exploration.html')
router.add(404, 'pages/404.html')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

const homeButton = document.querySelector('.bg-home')
const universeButton = document.querySelector('.bg-universe')
const explorationButton = document.querySelector('.bg-exploration')

homeButton.addEventListener('click', () => {
  window.location = '#home'
})

universeButton.addEventListener('click', () => {
  window.location = '#universe'
})

explorationButton.addEventListener('click', () => {
  window.location = '#exploration'
})

export function changeClassOnHandle(hash) {
  const hashFormatted = hash.split('#')[1]

  const btElement = ['home', 'universe', 'exploration']

  document.querySelector(`.bg-${hashFormatted}`).classList.add('focus')

  const btNotSelected = btElement.filter(button => button !== hashFormatted)

  btNotSelected.forEach(item => {
    document.querySelector(`.bg-${item}`).classList.remove('focus')
  })
}
