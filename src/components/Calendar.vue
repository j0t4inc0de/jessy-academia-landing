<template>
  <section id="calendario" class="py-12 lg:py-24 relative overflow-hidden">
    <!-- Background Decor -->
    <div class="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

    <div class="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
      
      <div v-reveal class="glass-card border-gradient p-1">
        <div class="bg-brand-surface/80 rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
          
          <div class="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full bg-gradient-to-br from-brand-primary to-brand-gold p-1 relative">
            <div class="w-full h-full bg-brand-dark rounded-full flex items-center justify-center">
              <svg class="w-16 h-16 md:w-20 md:h-20 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <!-- Notification dot -->
            <div class="absolute top-4 right-4 w-6 h-6 bg-brand-primary rounded-full border-4 border-brand-dark animate-pulse"></div>
          </div>

          <div class="text-center md:text-left flex-grow">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold uppercase tracking-wider mb-4">
              <span class="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
              Proceso de Admisión Abierto
            </div>
            
            <h2 class="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Calendario Académico
            </h2>
            
            <p class="text-brand-muted text-lg mb-8 max-w-xl">
              Nuestras matrículas para el periodo 2024/2025 se encuentran disponibles. Inscríbete a tiempo y asegura tu cupo en los cursos de especialización.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="https://api.whatsapp.com/send/?phone=56973985984&text=Hola, quisiera consultar las fechas del calendario de admisión&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" class="btn-primary">
                <span>Consultar Fechas</span>
              </a>
              <a href="#cursos" class="btn-outline">
                Ver Cursos
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
