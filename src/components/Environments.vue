<script setup>
const spaces = [
  {
    title: 'Recepción',
    description: 'Al llegar a Jessy Academia serás atendido por la recepcionista la cual te guiara en el proceso de tu inscripción y así también te brindará más información sobre el curso de tu interés. En este espacio nuestros clientes también hacen reservas y esperan su atención.',
    icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
  },
  {
    title: 'Espacio Clientes',
    description: 'Primer ambiente, nuestro salón ubicado en pleno centro Galería Taito, espacio para clientes, ¿qué mejor, que nuestro centro de capacitación tenga acá mismo su salón de belleza, no crees? Acá también aparte de brindar nosotros servicios profesionales de belleza, nuestras alumnas realizan sus prácticas.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Espacio Capacitación',
    description: 'Segundo ambiente, la barbería, a pocos pasos de nuestro salón, contamos con el mejor ambiente para tu capacitación, un espacio donde tranquilamente podrás aprender todas las técnicas de belleza.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    title: 'Espacio Práctico',
    description: 'Tercer ambiente, donde nuestras alumnas realizan su curso 100% práctico en nuestro salón de belleza entregándoles así las mejores herramientas y generando expertis en el área desde el día uno de su capacitación.',
    icon: 'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5'
  }
];

const images = [
  'https://jessyacademia.cl/wp-content/uploads/2024/09/IMG-20240903-WA0026.jpg',
  'https://jessyacademia.cl/wp-content/uploads/2024/09/IMG-20240903-WA0018.jpg',
  'https://jessyacademia.cl/wp-content/uploads/2024/09/IMG-20240903-WA0012.jpg'
];
</script>

<template>
  <section id="ambientes" class="py-12 lg:py-24 relative overflow-hidden bg-brand-dark">
    <!-- Decoraciones de fondo -->
    <div class="absolute left-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(207,51,175,0.05)_0%,transparent_70%)] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      
      <!-- Encabezado de la sección -->
      <div v-reveal class="text-center max-w-4xl mx-auto mb-20">
        <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-border bg-brand-glass backdrop-blur-md mb-6">
          <span class="text-xs uppercase tracking-[0.2em] text-brand-gold font-bold">Nuestras Instalaciones</span>
        </div>
        
        <h2 class="section-title mb-6">
          <span class="gradient-text-pink">Ambientes</span>
        </h2>
        <p class="section-subtitle mx-auto">
          ¡Conoce Nuestros Espacios!
        </p>
      </div>

      <!-- Contenido principal: Textos a la izquierda, Imágenes a la derecha -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
        
        <!-- Lista de espacios -->
        <div v-stagger class="flex flex-col gap-6">
          <div 
            v-for="(space, idx) in spaces" 
            :key="idx" 
            class="glass-card p-6 flex gap-5 hover:border-brand-primary/50 transition-colors group"
          >
            <div class="shrink-0 w-14 h-14 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center text-brand-gold group-hover:bg-brand-primary/10 group-hover:text-brand-primary group-hover:scale-110 transition-all">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="space.icon" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">{{ space.title }}</h3>
              <p class="text-sm text-brand-muted leading-relaxed">
                {{ space.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Collage de Imágenes -->
        <div v-reveal-right class="relative h-[600px] hidden md:block">
          <!-- Círculo decorativo central -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-3xl"></div>
          
          <!-- Imagen 1 (Grande superior) -->
          <div class="absolute top-0 right-0 w-3/4 h-[55%] border-gradient rounded-2xl p-1 bg-brand-surface/50 z-20 hover:z-50 hover:scale-105 transition-all duration-500">
            <div class="img-overlay rounded-xl h-full">
              <img :src="images[0]" alt="Ambiente Jessy Academy" class="w-full h-full object-cover" />
            </div>
          </div>

          <!-- Imagen 2 (Inferior izquierda) -->
          <div class="absolute bottom-0 left-0 w-3/5 h-[45%] border-gradient rounded-2xl p-1 bg-brand-surface/50 z-30 hover:z-50 hover:scale-105 transition-all duration-500 shadow-2xl">
            <div class="img-overlay rounded-xl h-full">
              <img :src="images[1]" alt="Ambiente Jessy Academy" class="w-full h-full object-cover" />
            </div>
          </div>

          <!-- Imagen 3 (Inferior derecha pequeña) -->
          <div class="absolute bottom-10 right-0 w-1/3 h-[30%] border border-brand-border/50 rounded-2xl p-1 bg-brand-darker z-40 hover:z-50 hover:scale-110 transition-all duration-500 shadow-2xl">
            <div class="img-overlay rounded-xl h-full">
              <img :src="images[2]" alt="Ambiente Jessy Academy" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <!-- Collage de Imágenes (Mobile Fallback) -->
        <div class="grid grid-cols-1 gap-4 md:hidden">
          <div v-for="(img, idx) in images" :key="idx" class="border-gradient rounded-2xl p-1 bg-brand-surface/50">
            <div class="img-overlay rounded-xl aspect-[4/3]">
              <img :src="img" alt="Ambiente Jessy Academy" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

      </div>

      <!-- Call to Action a Galería -->
      <div v-reveal class="max-w-4xl mx-auto">
        <div class="relative overflow-hidden rounded-3xl border border-brand-border/50 bg-gradient-to-r from-brand-darker to-brand-surface p-10 md:p-14 text-center group">
          <!-- Glow effect en el CTA -->
          <div class="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <h3 class="text-2xl md:text-3xl font-display font-bold text-white mb-4 relative z-10">
            Para Conocer Más Sobre Nosotros
          </h3>
          <p class="text-brand-muted mb-8 text-lg relative z-10">
            Te invitamos a revisar nuestra página de Galería.
          </p>
          
          <a href="#galeria" class="btn-primary relative z-10 inline-flex items-center gap-2 px-10 py-4 shadow-[0_0_20px_rgba(207,51,175,0.3)] hover:shadow-[0_0_40px_rgba(207,51,175,0.5)]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <span>¡Galeria!</span>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>
