<script setup>
const services = [
  {
    title: 'Elektroinstalacije',
    description: 'Kompletna izvedba električnih instalacija za stambene i poslovne objekte prema najnovijim standardima.',
    icon: 'home'
  },
  {
    title: 'Održavanje i servis',
    description: 'Redovno održavanje, dijagnostika kvarova i brze popravke električnih sistema.',
    icon: 'tool'
  },
  {
    title: 'Osvetljenje',
    description: 'Projektovanje i montaža unutrašnjeg i spoljašnjeg osvetljenja, LED rešenja.',
    icon: 'light'
  },
  {
    title: 'Razvodne table',
    description: 'Montaža i zamena razvodnih tabli, osigurača i zaštitne opreme.',
    icon: 'panel'
  },
  {
    title: 'Pametna kuća',
    description: 'Instalacija pametnih sistema za kontrolu osvetljenja, grejanja i bezbednosti.',
    icon: 'smart'
  },
  {
    title: 'Hitne intervencije',
    description: 'Dostupni smo 24/7 za hitne električne probleme i kvarove.',
    icon: 'emergency'
  }
]
</script>

<template>
  <section id="services" class="py-16 lg:py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-vida-500 font-semibold text-sm uppercase tracking-wider">Naše usluge</span>
        <h2 class="section-title mt-2">Kompletne električarske usluge</h2>
        <p class="section-subtitle">
          Nudimo širok spektar profesionalnih elektroinstalaterskih usluga za domaćinstva i firme
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="service in services" 
          :key="service.title"
          class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
        >
          <!-- Icon -->
          <div class="w-14 h-14 bg-vida-100 rounded-xl flex items-center justify-center mb-6">
            <!-- Home Icon -->
            <svg v-if="service.icon === 'home'" class="w-7 h-7 text-vida-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <!-- Tool Icon -->
            <svg v-else-if="service.icon === 'tool'" class="w-7 h-7 text-vida-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <!-- Light Icon -->
            <svg v-else-if="service.icon === 'light'" class="w-7 h-7 text-vida-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <!-- Panel Icon -->
            <svg v-else-if="service.icon === 'panel'" class="w-7 h-7 text-vida-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
            <!-- Smart Icon -->
            <svg v-else-if="service.icon === 'smart'" class="w-7 h-7 text-vida-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <!-- Emergency Icon -->
            <svg v-else-if="service.icon === 'emergency'" class="w-7 h-7 text-vida-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>

          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ service.title }}</h3>
          <p class="text-gray-600">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
