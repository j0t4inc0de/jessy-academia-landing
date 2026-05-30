<script setup>
const courses = [
  {
    title: 'Estilista Profesional',
    description: 'Este curso se encarga de todo lo relacionado con el cabello y lo que derive de él, además de realizar el corte y el tinte que estime conveniente o adecuados para el cliente.',
    duration: '1 Año / 2 días a la semana',
    priceType: 'Matrícula + Pago Mensual',
    delay: '0.1s'
  },
  {
    title: 'Profesional de Barbería',
    description: 'El oficio de Barbero es todo un arte especializado en el cuidado de la barba, bigote y cabello de los hombres. Tratamiento y servicios únicos.',
    duration: '4 Meses / 1 día a la semana',
    priceType: 'Matrícula + Pago Mensual',
    delay: '0.2s'
  },
  {
    title: 'Colorista Profesional',
    description: 'Un Colorista Profesional tiene una especialización en color. El trabajar con químicos como son los tintes, tienen unas reglas que no se pueden obviar.',
    duration: '5 Meses / 1 día a la semana',
    priceType: 'Matrícula + Pago Mensual',
    delay: '0.3s'
  },
  {
    title: 'Lifting de Pestañas y Manicure',
    description: 'Tratamiento estético en el cual las pestañas quedan estiradas, lisas y levantadas de forma natural. Además del cuidado de las uñas de las manos.',
    duration: '+8 Hrs. (Un día intensivo)',
    priceType: 'Pago único',
    delay: '0.4s'
  },
  {
    title: 'Colorimetría Profesional',
    description: 'Permite realizar soluciones estéticas entregando propuestas de imagen personal acorde a los requerimientos del cliente mediante coloración.',
    duration: '5 Meses / 1 día a la semana',
    priceType: 'Matrícula + Pago Mensual',
    delay: '0.5s'
  },
  {
    title: 'Alisado Permanente',
    description: 'El participante terminando el curso se encargará de todo lo relacionado con el cabello y lo que derive de él Alisado del Cabello.',
    duration: '+8 Hrs. (Un día intensivo)',
    priceType: 'Pago único',
    delay: '0.6s'
  },
  {
    title: 'Balayage Profesional',
    description: 'Aprende esta técnica tendencia de mucha importancia y demanda en un salón de belleza.',
    duration: '+8 Hrs. (Un día intensivo)',
    priceType: 'Pago único',
    delay: '0.7s'
  },
  {
    title: 'Cortes Tendencia',
    description: 'Especialización orientada al crecimiento profesional para trabajar con clientes hombres y mujeres.',
    duration: '3 Meses / 1 día a la semana',
    priceType: 'Matrícula + Pago Mensual',
    delay: '0.8s'
  },
  {
    title: 'Masajes Capilares',
    description: 'El participante podrá realizar de manera profesional los masajes capilares.',
    duration: '+8 Hrs. (Un día intensivo)',
    priceType: 'Pago único',
    delay: '0.9s'
  }
];
</script>

<template>
  <section id="cursos" class="py-24 relative bg-brand-darker border-y border-brand-border/30 overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'#cf33af\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
      
      <div v-reveal class="text-center max-w-4xl mx-auto mb-16">
        <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-brand-border bg-brand-glass backdrop-blur-md mb-6">
          <span class="text-xs uppercase tracking-[0.2em] text-brand-gold font-bold">Admisión 2024/2025</span>
        </div>
        
        <h2 class="section-title mb-6">
          Cursos Profesionales <br class="md:hidden"/>
          <span class="gradient-text">Acreditados</span>
        </h2>
        
        <p class="section-subtitle mx-auto text-brand-text/80">
          <strong>Variedad de cursos pensados para ti.</strong> Cursos de distintas áreas de belleza pensados para formar un estilista profesional paso a paso y así también que estilistas se perfeccionen cada día más. Estos cursos están diseñados para capacitar desde conocimiento cero.
        </p>
      </div>

      <!-- Course Grid -->
      <div v-stagger class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(course, index) in courses" 
          :key="index"
          class="glass-card flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
        >
          <div class="p-8 flex flex-col flex-grow">
            <!-- Course Header -->
            <div class="mb-6">
              <h3 class="font-display font-bold text-2xl text-white mb-3">{{ course.title }}</h3>
              <p class="text-brand-muted text-sm leading-relaxed">{{ course.description }}</p>
            </div>
            
            <!-- Course Meta -->
            <div class="mt-auto space-y-3 mb-8">
              <div class="flex items-center text-sm">
                <div class="w-8 h-8 rounded-full bg-brand-primary/10 flex items-center justify-center mr-3 text-brand-primary">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span class="text-brand-text/90">{{ course.duration }}</span>
              </div>
              
              <div class="flex items-center text-sm">
                <div class="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center mr-3 text-brand-gold">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <span class="text-brand-text/90 font-medium">{{ course.priceType }}</span>
              </div>
            </div>
            
            <!-- Actions -->
            <div class="flex flex-col sm:flex-row gap-3 mt-auto border-t border-brand-border/50 pt-6">
              <a :href="`https://api.whatsapp.com/send/?phone=56973985984&text=Hola, me gustaría postular al curso de ${course.title}&type=phone_number&app_absent=0`" target="_blank" rel="noopener noreferrer" class="btn-primary flex-1 text-center py-2.5 text-sm">
                <span>Postular</span>
              </a>
              <a href="#" class="btn-outline flex-1 text-center py-2.5 text-sm">
                Malla Curricular
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Extra Courses Notice -->
      <div v-reveal class="max-w-4xl mx-auto">
        <div class="glass-card p-8 border-l-4 border-l-brand-primary">
          <div class="flex flex-col md:flex-row gap-6 items-center">
            <div class="w-16 h-16 shrink-0 rounded-full bg-gradient-to-br from-brand-primary to-brand-gold flex items-center justify-center text-white">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-bold text-white mb-2">Cursos Extras Intensivos</h4>
              <p class="text-brand-muted text-sm leading-relaxed">
                Además realizamos cursos intensivos de un día como ser: Cortes nuevas tendencias, Lifting de pestañas, Manicure, Técnicas de Balayages y Alisado Permanente. Consultar disponibilidad de fechas de inicio con el Departamento de Admisión.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
