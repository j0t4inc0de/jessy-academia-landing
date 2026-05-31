import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// Intersection Observer for scroll animations
app.directive('reveal', {
  mounted(el) {
    el.classList.add('reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.05 })
    observer.observe(el)
  }
})

app.directive('reveal-left', {
  mounted(el) {
    el.classList.add('reveal-left')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.05 })
    observer.observe(el)
  }
})

app.directive('reveal-right', {
  mounted(el) {
    el.classList.add('reveal-right')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.05 })
    observer.observe(el)
  }
})

app.directive('stagger', {
  mounted(el) {
    el.classList.add('stagger-children')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.05 })
    observer.observe(el)
  }
})

app.mount('#app')
