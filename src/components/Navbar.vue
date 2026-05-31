<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isMobileMenuOpen.value = false
  }
}

watch(isMobileMenuOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)
  document.body.style.overflow = ''
})

const menuItems = [
  { name: 'Inicio', href: '#' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Nuestros Cursos', href: '#cursos' },
  { name: 'Calendario', href: '#calendario' },
  { name: 'Ambientes', href: '#ambientes' },
  { name: 'Egresados', href: '#egresados' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Contacto', href: '#contacto' }
]
</script>

<template>
  <nav 
    class="fixed w-full z-50 transition-all duration-500"
    :class="[
      (isScrolled || isMobileMenuOpen)
        ? 'bg-brand-dark/95 backdrop-blur-md py-4 shadow-glass border-b border-brand-border' 
        : 'bg-transparent py-6'
    ]"
  >
    <div class="relative z-50 max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between">
        
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-gold flex items-center justify-center p-[2px] transform transition-transform group-hover:scale-105">
            <div class="w-full h-full bg-brand-darker rounded-[10px] flex items-center justify-center">
              <span class="text-xl font-display font-bold gradient-text">J</span>
            </div>
          </div>
          <div>
            <h1 class="font-display font-bold text-xl md:text-2xl tracking-wide text-white group-hover:text-brand-primary transition-colors">
              Jessy Academy
            </h1>
            <p class="text-[10px] uppercase tracking-[0.2em] text-brand-gold opacity-80">Academia Certificada</p>
          </div>
        </a>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center space-x-8">
          <a 
            v-for="item in menuItems" 
            :key="item.name"
            :href="item.href"
            class="text-sm font-medium text-brand-text/80 hover:text-white transition-colors relative group"
          >
            {{ item.name }}
            <span class="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-gold transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="lg:hidden p-2 text-brand-text hover:text-brand-primary transition-colors focus:outline-none"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

  </nav>

  <!-- Mobile Menu Overlay -->
  <Transition
    enter-active-class="transition-opacity duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isMobileMenuOpen"
      class="lg:hidden fixed inset-0 z-40 bg-brand-dark/98 backdrop-blur-xl overflow-y-auto"
    >
      <div class="flex flex-col items-center justify-center min-h-full space-y-6 pt-28 pb-12">
        <a 
          v-for="item in menuItems" 
          :key="item.name"
          :href="item.href"
          @click="isMobileMenuOpen = false"
          class="text-2xl font-display text-white hover:text-brand-primary transition-colors"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </Transition>
</template>
