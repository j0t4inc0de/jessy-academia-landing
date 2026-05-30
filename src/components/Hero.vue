<script setup>
// Hero Component - Premium Centered Video Variant
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Video Background -->
    <div class="absolute inset-0 z-0">
      <video 
        autoplay 
        loop 
        muted 
        playsinline 
        class="w-full h-full object-cover scale-105 pointer-events-none"
      >
        <source src="https://jessyacademia.cl/wp-content/uploads/2024/09/INTRO-JESSY.mp4" type="video/mp4" />
      </video>
      
      <!-- Premium Overlay: Darkens the video and adds vignette -->
      <div class="absolute inset-0 bg-brand-darker/60 backdrop-blur-[2px]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,15,0.9)_100%)]"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-brand-darker via-transparent to-brand-darker/80"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col items-center text-center pt-20">
      
      <!-- Elegant Badge -->
      <div class="glass-card px-6 py-2.5 rounded-full mb-8 inline-flex items-center gap-3 animate-fade-in shadow-[0_0_20px_rgba(207,51,175,0.2)]" style="animation-delay: 0.2s;">
        <svg class="w-4 h-4 text-brand-gold animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        <span class="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-white/90">Academia Certificada</span>
        <svg class="w-4 h-4 text-brand-gold animate-pulse" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
      </div>
      
      <!-- Majestic Title -->
      <h1 class="text-5xl md:text-7xl lg:text-[7.5rem] font-display font-bold leading-[1.1] mb-8 animate-fade-up drop-shadow-2xl" style="animation-delay: 0.4s;">
        Jessy <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-pink to-brand-gold">Academy</span>
      </h1>
      
      <!-- Subtitle -->
      <p class="text-xl md:text-2xl lg:text-3xl text-white/90 font-light max-w-3xl leading-relaxed mb-12 animate-fade-up drop-shadow-lg" style="animation-delay: 0.6s;">
        Formando profesionales de excelencia en el rubro de la belleza.
      </p>
      
      <!-- Custom Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-5 items-center animate-fade-up" style="animation-delay: 0.8s;">
        <a href="#cursos" class="px-8 py-4 bg-brand-primary hover:bg-brand-pink transition-all duration-300 rounded-full text-white font-bold tracking-wide shadow-[0_0_30px_rgba(207,51,175,0.4)] hover:shadow-[0_0_50px_rgba(207,51,175,0.6)] hover:-translate-y-1 w-full sm:w-auto flex items-center justify-center gap-2">
          <span>Descubrir Cursos</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
        </a>
        <a href="#contacto" class="px-8 py-4 bg-white/5 border border-white/20 hover:border-white/60 hover:bg-white/10 transition-all duration-300 rounded-full text-white font-bold tracking-wide backdrop-blur-sm w-full sm:w-auto">
          Contáctanos
        </a>
      </div>

    </div>

    <!-- Scroll Indicator Bottom -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style="animation-delay: 1.5s;">
      <div class="w-[1px] h-12 bg-gradient-to-b from-transparent via-brand-gold to-transparent animate-float"></div>
    </div>
  </section>
</template>
