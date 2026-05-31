<script setup>
const galleryImages = [
  'https://jessyacademia.cl/wp-content/uploads/2024/11/WhatsApp-Image-2024-10-15-at-13.43.50_753c414d.jpg',
  'https://jessyacademia.cl/wp-content/uploads/2024/11/WhatsApp-Image-2024-10-15-at-13.43.50_ad421d5b.jpg',
  'https://jessyacademia.cl/wp-content/uploads/2024/11/WhatsApp-Image-2024-10-15-at-13.43.50_38f519dd.jpg',
  'https://jessyacademia.cl/wp-content/uploads/2024/11/WhatsApp-Image-2024-10-15-at-13.43.50_d9520d62.jpg'
]
</script>

<template>
  <section id="galeria" class="py-12 lg:py-24 relative overflow-hidden bg-brand-darker border-y border-brand-border/30">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      
      <div v-reveal class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="section-title mb-6">
          <span class="gradient-text-pink">¡Conócenos!</span>
        </h2>
        <p class="section-subtitle mx-auto">
          Revisa nuestra galería donde encontrarás nuestra trayectoria con miles de personas que han confiado en nuestra academia.
        </p>
      </div>

      <div v-stagger class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
        <div 
          v-for="(image, index) in galleryImages" 
          :key="index"
          class="group relative"
        >
          <div class="border-gradient rounded-2xl p-1 bg-brand-surface/50 h-full">
            <div class="img-overlay rounded-xl aspect-square overflow-hidden">
              <img 
                :src="image" 
                alt="Galería Jessy Academy" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>
