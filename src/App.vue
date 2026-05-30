<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Teachers from './components/Teachers.vue'
import Courses from './components/Courses.vue'
import Calendar from './components/Calendar.vue'
import Environments from './components/Environments.vue'
import Graduates from './components/Graduates.vue'
import Gallery from './components/Gallery.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="grain"></div>
  <div class="min-h-screen bg-brand-dark flex flex-col selection:bg-brand-primary/30 selection:text-white overflow-x-hidden w-full relative font-sans text-brand-text">
    
    <!-- Navigation -->
    <Navbar />

    <!-- Main Content Sections -->
    <main class="flex-grow">
      <Hero />
      <Teachers />
      <Courses />
      <Calendar />
      <Environments />
      <Graduates />
      <Gallery />
      <Contact />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style>
/* Global smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
