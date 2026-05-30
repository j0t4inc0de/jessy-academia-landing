<script setup>
const graduatesInfo = [
  {
    title: 'Nuestros Egresados',
    desc: 'A lo largo de estos años hemos capacitado alrededor de 1000 participantes en la región del Bío Bío.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Capacitación Constante',
    desc: 'La satisfacción de nuestros participantes en sus prácticas 100% presenciales en Colaboración con SISA.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: 'Entrega de Diplomas',
    desc: 'Al culminar toda tu capacitación recibirás el diploma/certificación la cual es acreditada y de valor curricular ya que la misma certifica tus competencias laborales adquiridas en tu curso.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    title: 'Certificaciones',
    desc: 'Hoy en día la certificación es muy importante en el desarrollo personal de los participantes ya que si decides trabajar en algún salón reconocido deberás contar con documentación que certifique tus competencias.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  }
];
</script>

<template>
  <section id="egresados" class="py-24 relative overflow-hidden">
    <!-- Glow backgrounds -->
    <div class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-primary/5 to-transparent pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div v-reveal class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="section-title mb-6">
          <span class="gradient-text-pink">Egresados</span>
        </h2>
        <p class="section-subtitle mx-auto">
          Cientos de alumnos ya han transformado su pasión en una carrera profesional con nosotros.
        </p>
      </div>

      <!-- Highlight Stat Banner -->
      <div v-reveal class="mb-16">
        <div class="border-gradient rounded-3xl p-1 bg-brand-dark/50 shadow-2xl">
          <div class="bg-brand-surface/80 backdrop-blur-md rounded-[1.4rem] p-8 md:p-12 text-center relative overflow-hidden">
            <!-- Decorative particles -->
            <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'1\' fill=\'%23cf33af\' fill-opacity=\'0.1\'/%3E%3C/svg%3E')]"></div>
            
            <h3 class="text-6xl md:text-8xl font-display font-bold gradient-text mb-4 drop-shadow-lg relative z-10">
              +1000
            </h3>
            <p class="text-xl md:text-2xl text-white font-medium relative z-10">
              Participantes capacitados a lo largo de estos años en la región del Bío Bío.
            </p>
          </div>
        </div>
      </div>

      <!-- Info Cards Grid -->
      <div v-stagger class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        <div 
          v-for="(info, idx) in graduatesInfo.slice(1)" 
          :key="idx"
          class="glass-card p-8 md:p-10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
        >
          <div class="w-16 h-16 rounded-full bg-brand-darker border border-brand-border/50 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 group-hover:bg-brand-gold/10 transition-all shadow-lg">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="info.icon" />
            </svg>
          </div>
          
          <h4 class="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
            {{ info.title }}
          </h4>
          
          <p class="text-brand-muted text-base leading-relaxed">
            {{ info.desc }}
          </p>
        </div>
      </div>
      
    </div>
  </section>
</template>
