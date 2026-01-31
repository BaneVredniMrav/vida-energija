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

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
  alert('Vaša poruka je poslata! Kontaktiraćemo vas uskoro.')
}
</script>

<template>
  <section id="contact" class="py-16 lg:py-24 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16">
        <!-- Contact Info -->
        <div>
          <span class="text-vida-500 font-semibold text-sm uppercase tracking-wider">Kontakt</span>
          <h2 class="section-title mt-2">Kontaktirajte nas</h2>
          <p class="section-subtitle">
            Pozovite nas ili popunite formular za besplatnu konsultaciju i ponudu. 
            Odgovaramo u najkraćem mogućem roku.
          </p>

          <!-- Contact Details -->
          <div class="mt-8 space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-vida-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-vida-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Telefon</h4>
                <a href="tel:+38163123456" class="text-vida-600 hover:text-vida-700 text-lg">+381 63 123 456</a>
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
          <div class="mt-8 p-6 bg-white rounded-xl border border-gray-200">
            <h4 class="font-semibold text-gray-900 mb-4">Radno vreme</h4>
            <div class="space-y-2 text-sm">
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
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 class="text-xl font-bold text-gray-900 mb-6">Zatražite besplatnu ponudu</h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Ime i prezime *</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vida-500 focus:border-vida-500 transition-colors"
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
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vida-500 focus:border-vida-500 transition-colors"
                  placeholder="+381 6X XXX XXXX"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vida-500 focus:border-vida-500 transition-colors"
                  placeholder="vas@email.com"
                />
              </div>
            </div>

            <div>
              <label for="service" class="block text-sm font-medium text-gray-700 mb-1">Tip usluge</label>
              <select 
                id="service" 
                v-model="form.service"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vida-500 focus:border-vida-500 transition-colors"
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
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-vida-500 focus:border-vida-500 transition-colors resize-none"
                placeholder="Opišite vaš problem ili potrebu..."
              ></textarea>
            </div>

            <button type="submit" class="btn-primary w-full">
              Pošalji zahtev
            </button>

            <p class="text-xs text-gray-500 text-center">
              Slanjem formulara saglasni ste sa obradom vaših ličnih podataka.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
