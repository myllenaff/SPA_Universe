import { changeClassOnHandle } from './index.js'

export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event

    event.preventDefault()

    window.history.pushState({}, '', event.target.href)

    this.handle()
  }
  handle() {
    const { hash } = window.location

    let route
    if (!hash) {
      window.location = '#home'
      route = this.routes['#home']
    } else {
      route = this.routes[hash] || this.routes[404]
    }

    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
        changeClassOnHandle(hash || '#home')
      })
  }
}
