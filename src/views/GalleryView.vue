<script setup>
import { ref } from 'vue'

const categories = ['Sve', 'Stambeni', 'Poslovni', 'Industrijski', 'Osvetljenje']
const activeCategory = ref('Sve')

const projects = [
  {
    id: 1,
    title: 'Kompletna instalacija stana',
    category: 'Stambeni',
    description: 'Potpuna elektroinstalacija novoizgrađenog stana od 85m²',
    image: null
  },
  {
    id: 2,
    title: 'Renovacija poslovnog prostora',
    category: 'Poslovni',
    description: 'Modernizacija elektroinstalacija u kancelarijskom prostoru',
    image: null
  },
  {
    id: 3,
    title: 'LED osvetljenje lokala',
    category: 'Osvetljenje',
    description: 'Projektovanje i montaža LED rasvete u maloprodajnom objektu',
    image: null
  },
  {
    id: 4,
    title: 'Industrijska hala',
    category: 'Industrijski',
    description: 'Elektroinstalacije u proizvodnom pogonu površine 500m²',
    image: null
  },
  {
    id: 5,
    title: 'Kuća sa pametnim sistemom',
    category: 'Stambeni',
    description: 'Instalacija pametne kuće sa automatizacijom osvetljenja',
    image: null
  },
  {
    id: 6,
    title: 'Spoljna rasveta restorana',
    category: 'Osvetljenje',
    description: 'Dekorativno i funkcionalno osvetljenje bašte restorana',
    image: null
  },
  {
    id: 7,
    title: 'Razvodna tabla za zgradu',
    category: 'Stambeni',
    description: 'Zamena i modernizacija razvodne table stambene zgrade',
    image: null
  },
  {
    id: 8,
    title: 'Kancelarije IT kompanije',
    category: 'Poslovni',
    description: 'Specijalizovane instalacije za server sobu i radna mesta',
    image: null
  },
]

const filteredProjects = ref(projects)

const filterProjects = (category) => {
  activeCategory.value = category
  if (category === 'Sve') {
    filteredProjects.value = projects
  } else {
    filteredProjects.value = projects.filter(p => p.category === category)
  }
}

const selectedProject = ref(null)

const openModal = (project) => {
  selectedProject.value = project
}

const closeModal = () => {
  selectedProject.value = null
}
</script>

<template>
  <div class="pt-20 lg:pt-24">
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-vida-50 via-white to-white py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-vida-500 font-semibold text-sm uppercase tracking-wider">Galerija</span>
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
          Naši projekti
        </h1>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Pogledajte neke od naših završenih projekata i uverite se u kvalitet našeg rada.
        </p>
      </div>
    </section>

    <!-- Filter -->
    <section class="py-8 bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-3">
          <button
            v-for="category in categories"
            :key="category"
            @click="filterProjects(category)"
            :class="[
              'px-5 py-2 rounded-full font-medium transition-all',
              activeCategory === category
                ? 'bg-vida-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            @click="openModal(project)"
            class="group cursor-pointer"
          >
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
              <!-- Image Placeholder -->
              <div class="aspect-[4/3] bg-gradient-to-br from-vida-100 to-vida-200 relative overflow-hidden">
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center p-4">
                    <div class="w-16 h-16 bg-vida-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg class="w-8 h-8 text-vida-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span class="text-sm text-vida-600 font-medium">{{ project.category }}</span>
                  </div>
                </div>
                <!-- Hover Overlay -->
                <div class="absolute inset-0 bg-vida-500/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-vida-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              <!-- Content -->
              <div class="p-4">
                <h3 class="font-bold text-gray-900 mb-1">{{ project.title }}</h3>
                <p class="text-sm text-gray-600">{{ project.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="text-center py-16">
          <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p class="text-gray-500">Nema projekata u ovoj kategoriji.</p>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <Teleport to="body">
      <div 
        v-if="selectedProject" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="closeModal"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/70" @click="closeModal"></div>
        
        <!-- Modal Content -->
        <div class="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto">
          <!-- Close Button -->
          <button 
            @click="closeModal"
            class="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center z-10"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Image -->
          <div class="aspect-video bg-gradient-to-br from-vida-100 to-vida-300 flex items-center justify-center">
            <div class="text-center p-8">
              <div class="w-24 h-24 bg-vida-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-12 h-12 text-vida-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p class="text-vida-600">Slika projekta</p>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <span class="inline-block px-3 py-1 bg-vida-100 text-vida-700 rounded-full text-sm font-medium mb-3">
              {{ selectedProject.category }}
            </span>
            <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ selectedProject.title }}</h2>
            <p class="text-gray-600">{{ selectedProject.description }}</p>
            
            <div class="mt-6 pt-6 border-t border-gray-100">
              <router-link 
                to="/kontakt" 
                class="btn-primary inline-flex"
                @click="closeModal"
              >
                Zatražite sličan projekat
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- CTA -->
    <section class="py-16 lg:py-20 bg-vida-500">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          Želite sličan projekat?
        </h2>
        <p class="text-vida-100 text-lg mb-8">
          Kontaktirajte nas i realizujmo vaš projekat zajedno.
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
