<template>
  <footer class="bg-[#050508] pt-20 pb-10 border-t border-brand-border relative overflow-hidden">
    <!-- Decorative background glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[200px] bg-brand-primary/10 blur-[100px] pointer-events-none rounded-t-full"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="flex flex-col items-center justify-center mb-16 text-center">
        <!-- Logo -->
        <a href="#" class="flex flex-col items-center gap-4 mb-8">
          <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-gold flex items-center justify-center p-[3px]">
            <div class="w-full h-full bg-brand-darker rounded-[14px] flex items-center justify-center shadow-glass">
              <span class="text-4xl font-display font-bold gradient-text">J</span>
            </div>
          </div>
          <div>
            <h2 class="font-display font-bold text-3xl tracking-wide text-white mb-1">
              Jessy Academy
            </h2>
            <p class="text-sm uppercase tracking-[0.3em] text-brand-gold">Academia Certificada</p>
          </div>
        </a>

        <div class="flex flex-wrap justify-center gap-6 md:gap-10 text-brand-muted">
          <a href="#" class="hover:text-brand-primary transition-colors font-medium">Inicio</a>
          <a href="#nosotros" class="hover:text-brand-primary transition-colors font-medium">Nosotros</a>
          <a href="#cursos" class="hover:text-brand-primary transition-colors font-medium">Cursos</a>
          <a href="#ambientes" class="hover:text-brand-primary transition-colors font-medium">Ambientes</a>
          <a href="#contacto" class="hover:text-brand-primary transition-colors font-medium">Contacto</a>
        </div>
      </div>

      <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-border/30 text-sm text-brand-subtle">
        <p>&copy; 2026 Jessy Academy. Todos los derechos reservados.</p>
        <div class="mt-4 md:mt-0 flex items-center gap-2">
          <span>Diseño y Desarrollo por</span>
          <a href="https://wearesamod.com" target="_blank" rel="noopener noreferrer" class="text-brand-muted hover:text-white transition-colors font-bold flex items-center gap-1 group">
            we are <span class="gradient-text group-hover:brightness-125 transition-all">samod</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
