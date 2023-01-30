import { Router } from './router.js'

const router = new Router()
router.add("#home", "pages/home.html")
router.add("#universe", "pages/universe.html")
router.add("#exploration", "pages/exploration.html")
router.add(404, "pages/404.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()


const homeButton = document.querySelector('.bg-home')
const universeButton = document.querySelector('.bg-universe')
const explorationButton = document.querySelector('.bg-exploration')
const page = document.querySelector('body')

homeButton.addEventListener('click', () => {
  window.location = '#home'
  homeButton.classList.add('focus')
  universeButton.classList.remove('focus')
  explorationButton.classList.remove('focus')
  page.classList.remove('bg-universe')
  page.classList.remove('bg-exploration')
})

universeButton.addEventListener('click', () => {
  window.location = '#universe'
  universeButton.classList.add('focus')
  homeButton.classList.remove('focus')
  explorationButton.classList.remove('focus')
  page.classList.add('bg-universe')
  page.classList.remove('bg-exploration')
})

explorationButton.addEventListener('click', () => {

  window.location = '#exploration'
  explorationButton.classList.add('focus')
  homeButton.classList.remove('focus')
  universeButton.classList.remove('focus')
  page.classList.add('bg-exploration')
  page.classList.remove('bg-universe')
})