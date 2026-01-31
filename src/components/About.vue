<script setup>
const features = [
  { title: 'Licencirani električari', description: 'Svi naši majstori su sertifikovani i sa dugogodišnjim iskustvom' },
  { title: 'Garancija na rad', description: 'Nudimo garanciju na sve izvršene radove i ugrađene materijale' },
  { title: 'Fer cene', description: 'Transparentne cene bez skrivenih troškova, besplatna procena' },
  { title: 'Brza reakcija', description: 'Intervenišemo brzo, dostupni smo za hitne slučajeve 24/7' },
]
</script>

<template>
  <section id="about" class="py-16 lg:py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Image/Visual Side -->
        <div class="relative">
          <div class="relative rounded-2xl overflow-hidden">
            <div class="aspect-[4/3] bg-gradient-to-br from-vida-500 to-vida-700 rounded-2xl">
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center text-white p-8">
                  <div class="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                    <svg class="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 class="text-3xl font-bold mb-2">10+ godina</h3>
                  <p class="text-white/80 text-lg">iskustva u elektroinstalacijama</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Floating Badge -->
          <div class="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div>
                <p class="font-bold text-gray-900">4.9/5</p>
                <p class="text-sm text-gray-500">Ocena klijenata</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Side -->
        <div>
          <span class="text-vida-500 font-semibold text-sm uppercase tracking-wider">O nama</span>
          <h2 class="section-title mt-2">Vaš pouzdan partner za električne instalacije</h2>
          <p class="section-subtitle">
            Vida Energija je firma sa dugogodišnjom tradicijom u izvođenju elektroinstalaterskih radova. 
            Naš tim iskusnih i kvalifikovanih električara je posvećen pružanju 
            vrhunskih usluga za domaćinstva i preduzeća.
          </p>

          <!-- Features List -->
          <div class="mt-8 space-y-4">
            <div 
              v-for="feature in features" 
              :key="feature.title"
              class="flex gap-4 items-start"
            >
              <div class="w-6 h-6 bg-vida-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-4 h-4 text-vida-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">{{ feature.title }}</h4>
                <p class="text-gray-600 text-sm">{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <a href="#contact" class="btn-primary mt-8 inline-flex">
            Zatražite ponudu
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
