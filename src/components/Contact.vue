<template>
  <section id="contacto" class="py-12 lg:py-24 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      
      <div v-reveal class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="section-title mb-6">
          <span class="gradient-text">¡Contáctanos!</span>
        </h2>
        <p class="section-subtitle mx-auto">
          Estamos aquí para resolver tus dudas y ayudarte en tu proceso de admisión.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- Contact Info -->
        <div v-reveal-left class="flex flex-col gap-6">
          <a href="mailto:Gerencia@JessyAcademia.cl" class="glass-card p-8 flex items-center gap-6 group hover:border-brand-primary/50 transition-colors">
            <div class="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-brand-muted mb-1">Correo Electrónico</p>
              <p class="text-xl font-bold text-white group-hover:text-brand-primary transition-colors">Gerencia@JessyAcademia.cl</p>
            </div>
          </a>

          <a href="https://api.whatsapp.com/send/?phone=56973985984&text=Hola, quiero más información&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" class="glass-card p-8 flex items-center gap-6 group hover:border-brand-gold/50 transition-colors">
            <div class="w-14 h-14 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p class="text-sm text-brand-muted mb-1">WhatsApp / Teléfono</p>
              <p class="text-xl font-bold text-white group-hover:text-brand-gold transition-colors">+56 9 7398 5984</p>
            </div>
          </a>
        </div>

        <!-- Location -->
        <div v-reveal-right class="glass-card p-8 flex flex-col justify-center">
          <div class="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">¡Visítanos!</h3>
          <p class="text-brand-muted text-lg mb-6">
            Galería Taito Local 204<br/>
            Colón 489, Los Ángeles, Bío Bío
          </p>
          <div class="rounded-xl overflow-hidden aspect-video border border-brand-border/50 bg-brand-dark">
            <!-- Emulating a map for aesthetic -->
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.7302488803457!2d-72.3556!3d-37.4687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDI4JzA3LjMiUyA3MsKwMjEnMjAuMiJX!5e0!3m2!1ses!2scl!4v1611234567890!5m2!1ses!2scl" 
              width="100%" 
              height="100%" 
              style="border:0; filter: invert(90%) hue-rotate(180deg);" 
              allowfullscreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>
