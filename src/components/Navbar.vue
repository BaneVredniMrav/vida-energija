<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Početna', href: '#hero' },
  { name: 'Usluge', href: '#services' },
  { name: 'O nama', href: '#about' },
  { name: 'Kontakt', href: '#contact' },
]
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 lg:h-20">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="Вида Енергија" 
            class="h-10 lg:h-12 w-auto"
          />
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <a 
            v-for="link in navLinks" 
            :key="link.name"
            :href="link.href"
            class="text-gray-700 hover:text-vida-500 font-medium transition-colors"
          >
            {{ link.name }}
          </a>
          <a href="#contact" class="btn-primary">
            Zatražite ponudu
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 text-gray-700 hover:text-vida-500"
          aria-label="Toggle menu"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div 
        v-show="isMenuOpen"
        class="md:hidden py-4 border-t border-gray-100"
      >
        <div class="flex flex-col gap-4">
          <a 
            v-for="link in navLinks" 
            :key="link.name"
            :href="link.href"
            @click="isMenuOpen = false"
            class="text-gray-700 hover:text-vida-500 font-medium transition-colors py-2"
          >
            {{ link.name }}
          </a>
          <a 
            href="#contact" 
            @click="isMenuOpen = false"
            class="btn-primary text-center"
          >
            Zatražite ponudu
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
