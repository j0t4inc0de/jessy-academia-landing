<script setup>
const professionals = [
  'https://jessyacademia.cl/wp-content/uploads/2024/11/WhatsApp-Image-2024-10-15-at-13.43.49_671bfc8f.jpg',
  'https://jessyacademia.cl/wp-content/uploads/2024/11/WhatsApp-Image-2024-10-15-at-13.43.49_5ba582ea.jpg',
  'https://jessyacademia.cl/wp-content/uploads/2024/11/WhatsApp-Image-2024-10-15-at-13.43.49_67aebef2.jpg',
  'https://jessyacademia.cl/wp-content/uploads/2024/11/WhatsApp-Image-2024-10-15-at-13.43.49_c39728de.jpg'
]
</script>

<template>
  <section id="nosotros" class="py-12 lg:py-24 relative overflow-hidden">
    <!-- Decorative Background -->
    <div class="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-brand-gold/10 blur-3xl transform -rotate-12 scale-110 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div v-reveal class="text-center max-w-3xl mx-auto mb-16">
        <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-border bg-brand-glass backdrop-blur-md mb-6">
          <span class="text-xs uppercase tracking-[0.2em] text-brand-gold font-bold">Nuestro Equipo</span>
        </div>
        
        <h2 class="section-title mb-6">
          Forjando <br class="md:hidden"/>
          <span class="gradient-text-pink">Profesionales</span>
        </h2>
        
        <p class="section-subtitle mx-auto">
          Nuestros profesionales te ayudarán a dar el 100% de tus habilidades y capacidades, logrando sacar tu potencial al máximo.
        </p>
      </div>

      <!-- Professionals Gallery -->
      <div v-stagger class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
        <div 
          v-for="(image, index) in professionals" 
          :key="index"
          class="group relative"
        >
          <div class="border-gradient rounded-2xl p-1 bg-brand-surface/50 h-full">
            <div class="img-overlay rounded-xl aspect-[3/4] overflow-hidden">
              <img 
                :src="image" 
                alt="Profesional Jessy Academy" 
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      <div v-reveal class="text-center">
        <a href="#contacto" class="btn-primary">
          <span>¡ Conócenos !</span>
        </a>
      </div>
    </div>
  </section>
</template>
