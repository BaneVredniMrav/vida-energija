<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
  email: '',
  service: '',
  message: ''
})

const services = [
  'Elektroinstalacije',
  'Održavanje i servis',
  'Osvetljenje',
  'Razvodne table',
  'Pametna kuća',
  'Hitna intervencija',
  'Drugo'
]

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const handleSubmit = () => {
  isSubmitting.value = true
  // Simulate API call
  setTimeout(() => {
    console.log('Form submitted:', form.value)
    isSubmitting.value = false
    isSubmitted.value = true
    // Reset form
    form.value = {
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    }
  }, 1000)
}

const resetForm = () => {
  isSubmitted.value = false
}
</script>

<template>
  <div class="pt-20 lg:pt-24">
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-vida-50 via-white to-white py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="text-vida-500 font-semibold text-sm uppercase tracking-wider">Kontakt</span>
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
          Kontaktirajte nas
        </h1>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Pozovite nas ili popunite formular za besplatnu konsultaciju i ponudu. Odgovaramo u najkraćem mogućem roku.
        </p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <!-- Contact Info -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Informacije za kontakt</h2>
            
            <!-- Contact Details -->
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-vida-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-vida-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Telefon</h4>
                  <a href="tel:+38163123456" class="text-vida-600 hover:text-vida-700 text-lg font-medium">+381 63 123 456</a>
                  <p class="text-sm text-gray-500 mt-1">Dostupni 24/7 za hitne slučajeve</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-vida-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-vida-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">E-mail</h4>
                  <a href="mailto:info@vidaenergija.rs" class="text-vida-600 hover:text-vida-700">info@vidaenergija.rs</a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-vida-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-vida-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Lokacija</h4>
                  <p class="text-gray-600">Beograd, Srbija</p>
                  <p class="text-sm text-gray-500 mt-1">Radimo na celoj teritoriji Srbije</p>
                </div>
              </div>
            </div>

            <!-- Working Hours -->
            <div class="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <h4 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-vida-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Radno vreme
              </h4>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <span class="text-gray-600">Ponedeljak - Petak</span>
                  <span class="font-medium text-gray-900">08:00 - 18:00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Subota</span>
                  <span class="font-medium text-gray-900">09:00 - 14:00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-gray-600">Nedelja</span>
                  <span class="font-medium text-gray-900">Samo hitni slučajevi</span>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="mt-8">
              <h4 class="font-semibold text-gray-900 mb-4">Pratite nas</h4>
              <div class="flex gap-4">
                <a href="#" class="w-10 h-10 bg-gray-100 hover:bg-vida-500 hover:text-white rounded-lg flex items-center justify-center transition-colors text-gray-600">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-100 hover:bg-vida-500 hover:text-white rounded-lg flex items-center justify-center transition-colors text-gray-600">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <!-- Success Message -->
            <div v-if="isSubmitted" class="text-center py-8">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">Poruka je poslata!</h3>
              <p class="text-gray-600 mb-6">Kontaktiraćemo vas u najkraćem mogućem roku.</p>
              <button @click="resetForm" class="btn-secondary">
                Pošalji novu poruku
              </button>
            </div>

            <!-- Form -->
            <div v-else>
              <h3 class="text-xl font-bold text-gray-900 mb-6">Zatražite besplatnu ponudu</h3>
              
              <form @submit.prevent="handleSubmit" class="space-y-5">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Ime i prezime *</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vida-500 focus:border-vida-500 transition-colors bg-white"
                    placeholder="Vaše ime"
                  />
                </div>

                <div class="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      v-model="form.phone"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vida-500 focus:border-vida-500 transition-colors bg-white"
                      placeholder="+381 6X XXX XXXX"
                    />
                  </div>
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      v-model="form.email"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vida-500 focus:border-vida-500 transition-colors bg-white"
                      placeholder="vas@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label for="service" class="block text-sm font-medium text-gray-700 mb-1">Tip usluge</label>
                  <select 
                    id="service" 
                    v-model="form.service"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vida-500 focus:border-vida-500 transition-colors bg-white"
                  >
                    <option value="">Izaberite uslugu</option>
                    <option v-for="service in services" :key="service" :value="service">
                      {{ service }}
                    </option>
                  </select>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Poruka *</label>
                  <textarea 
                    id="message" 
                    v-model="form.message"
                    required
                    rows="5"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vida-500 focus:border-vida-500 transition-colors resize-none bg-white"
                    placeholder="Opišite vaš problem ili potrebu..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  :disabled="isSubmitting"
                  class="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                    <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Šaljem...
                  </span>
                  <span v-else>Pošalji zahtev</span>
                </button>

                <p class="text-xs text-gray-500 text-center">
                  Slanjem formulara saglasni ste sa obradom vaših ličnih podataka.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Placeholder -->
    <section class="bg-gray-100">
      <div class="h-96 flex items-center justify-center">
        <div class="text-center">
          <div class="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p class="text-gray-500">Mapa lokacije</p>
          <p class="text-sm text-gray-400">Beograd, Srbija</p>
        </div>
      </div>
    </section>
  </div>
</template>
