<script setup>
</script>

<template>
  <section id="hero" class="relative pt-20 lg:pt-24 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-gradient-to-br from-vida-50 via-white to-white"></div>
    <div class="absolute top-0 right-0 w-1/2 h-full bg-vida-500/5 -skew-x-12 transform origin-top-right"></div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="text-center lg:text-left">
          <span class="inline-block px-4 py-2 bg-vida-100 text-vida-700 rounded-full text-sm font-semibold mb-6">
            Profesionalne elektroinstalaterske usluge
          </span>
          
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Kvalitetne 
            <span class="text-vida-500">elektro&shy;instalacije</span> 
            za vaš dom i posao
          </h1>
          
          <p class="mt-6 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            Sa višegodišnjim iskustvom nudimo kompletne elektroinstalaterske usluge - 
            od montaže do održavanja. Radimo profesionalno, brzo i po fer cenama.
          </p>
          
          <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <router-link to="/kontakt" class="btn-primary">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Kontaktirajte nas
            </router-link>
            <router-link to="/usluge" class="btn-secondary">
              Pogledajte usluge
            </router-link>
          </div>

          <!-- Trust Badges -->
          <div class="mt-12 flex flex-wrap justify-center lg:justify-start gap-8">
            <div class="flex items-center gap-2">
              <div class="w-12 h-12 bg-vida-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-vida-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p class="font-semibold text-gray-900">10+ godina</p>
                <p class="text-sm text-gray-500">iskustva</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div class="w-12 h-12 bg-vida-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-vida-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p class="font-semibold text-gray-900">500+</p>
                <p class="text-sm text-gray-500">zadovoljnih klijenata</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="relative">
          <div class="relative bg-gradient-to-br from-vida-400 to-vida-600 rounded-2xl p-8 lg:p-12 shadow-2xl">
            <div class="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-80 blur-2xl"></div>
            <div class="absolute -bottom-4 -left-4 w-32 h-32 bg-vida-300 rounded-full opacity-60 blur-2xl"></div>
            
            <div class="relative bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white">
              <div class="flex items-center justify-center mb-6">
                <svg class="w-24 h-24 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-center mb-2">Brza intervencija</h3>
              <p class="text-white/80 text-center">24/7 dostupnost za hitne slučajeve</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
