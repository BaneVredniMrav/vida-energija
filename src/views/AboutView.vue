<script setup>
const features = [
  { title: 'Licencirani električari', description: 'Svi naši majstori su sertifikovani i sa dugogodišnjim iskustvom u struci.' },
  { title: 'Garancija na rad', description: 'Nudimo garanciju na sve izvršene radove i ugrađene materijale.' },
  { title: 'Fer cene', description: 'Transparentne cene bez skrivenih troškova, besplatna procena pre početka radova.' },
  { title: 'Brza reakcija', description: 'Intervenišemo brzo, dostupni smo za hitne slučajeve 24/7.' },
]

const stats = [
  { value: '10+', label: 'Godina iskustva' },
  { value: '500+', label: 'Zadovoljnih klijenata' },
  { value: '1000+', label: 'Završenih projekata' },
  { value: '24/7', label: 'Dostupnost' },
]

const team = [
  { name: 'Milan Jovanović', role: 'Direktor', description: 'Više od 15 godina iskustva u elektroinstalacijama.' },
  { name: 'Petar Nikolić', role: 'Glavni električar', description: 'Specijalista za industrijske instalacije i pametne kuće.' },
  { name: 'Marko Petrović', role: 'Električar', description: 'Stručnjak za stambene objekte i renovacije.' },
]
</script>

<template>
  <div class="pt-20 lg:pt-24">
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-vida-50 via-white to-white py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-vida-500 font-semibold text-sm uppercase tracking-wider">O nama</span>
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
          Vaš pouzdan partner za električne instalacije
        </h1>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Vida Energija je firma sa dugogodišnjom tradicijom u izvođenju elektroinstalaterskih radova.
        </p>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-12 bg-vida-500">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <p class="text-4xl sm:text-5xl font-bold text-white">{{ stat.value }}</p>
            <p class="text-vida-100 mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <!-- Image -->
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
                    <h3 class="text-3xl font-bold mb-2">Kvalitet i poverenje</h3>
                    <p class="text-white/80 text-lg">Naša glavna vrednost</p>
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

          <!-- Content -->
          <div>
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Naša priča</h2>
            <div class="space-y-4 text-gray-600">
              <p>
                Vida Energija je osnovana sa jasnom misijom - pružiti kvalitetne i pouzdane elektroinstalaterske usluge 
                po fer cenama. Krenuli smo kao mala porodična firma i tokom godina izrasli u tim iskusnih profesionalaca.
              </p>
              <p>
                Naš tim čine licencirani električari sa višegodišnjim iskustvom u svim vrstama električnih instalacija. 
                Pratimo najnovije tehnologije i standarde, konstantno se usavršavamo kako bismo vam pružili najbolju moguću uslugu.
              </p>
              <p>
                Verujemo da kvalitetan rad govori sam za sebe, zato je naš fokus uvek na preciznosti, bezbednosti i 
                zadovoljstvu klijenata. Svaki projekat, bez obzira na veličinu, tretiramo sa istom pažnjom i posvećenošću.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-vida-500 font-semibold text-sm uppercase tracking-wider">Zašto mi</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Zašto izabrati Vida Energiju?</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="feature in features" 
            :key="feature.title"
            class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center"
          >
            <div class="w-14 h-14 bg-vida-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-7 h-7 text-vida-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600 text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-vida-500 font-semibold text-sm uppercase tracking-wider">Naš tim</span>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Upoznajte naš tim</h2>
          <p class="text-gray-600 mt-4">Profesionalci koji brinu o vašim električnim instalacijama</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div 
            v-for="member in team" 
            :key="member.name"
            class="text-center"
          >
            <div class="w-32 h-32 bg-gradient-to-br from-vida-400 to-vida-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg class="w-16 h-16 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900">{{ member.name }}</h3>
            <p class="text-vida-500 font-medium">{{ member.role }}</p>
            <p class="text-gray-600 text-sm mt-2">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 lg:py-20 bg-vida-500">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          Spremni smo za vaš projekat
        </h2>
        <p class="text-vida-100 text-lg mb-8">
          Kontaktirajte nas i dobijte besplatnu procenu za vaš projekat.
        </p>
        <router-link to="/kontakt" class="inline-flex items-center justify-center px-8 py-4 bg-white text-vida-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
          Kontaktirajte nas
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>
    </section>
  </div>
</template>
