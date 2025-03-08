<template>
  <header
    class="sticky z-50 top-0 flex items-center justify-between gap-4 px-6 py-4 bg-white shadow-md w-full"
  >
    <!-- Brand + Nav -->
    <div class="flex items-center gap-8">
      <!-- Logo -->
      <div @click="this.$router.push('/')" class="flex items-center gap-2 cursor-pointer">
        <!-- Placeholder diamond logo SVG -->
        <svg class="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" stroke-width="1.5"
             stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <path d="M12 2 L2 9 L12 22 L22 9 Z" />
          <path d="M2 9 L12 9 L22 9" />
          <path d="M7 9 L10 16" />
          <path d="M14 16 L17 9" />
        </svg>
        <span class="font-bold text-xl text-gray-800">BrandName</span>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center space-x-6 text-gray-700">
        <router-link to="/" class="hover:text-black transition">Home</router-link>
        <router-link to="/shop" class="hover:text-black transition">Shop</router-link>
        <router-link to="/products" class="hover:text-black transition">Product</router-link>
        <router-link to="/career" class="hover:text-black transition">Career</router-link>
      </nav>
    </div>

    <!-- Right Icons -->
    <div class="flex items-center gap-6">
      <!-- Search Icon + Search Dropdown -->
      <div class="relative">
        <!-- Search Icon -->
        <svg
          @click="toggleSearch"
          class="w-6 h-6 text-gray-700 cursor-pointer hover:text-black transition"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>

        <!-- Search Dropdown -->
        <transition name="fade">
          <div
            v-if="searchOpen"
            class="absolute right-0 mt-2 bg-white text-black border border-gray-200 rounded shadow-lg p-3 w-64"
          >
            <input
              v-model="searchTerm"
              @keyup.enter="doSearch"
              type="text"
              placeholder="Search product..."
              class="w-full bg-white text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-gray-500"
            />
          </div>
        </transition>
      </div>

      <!-- Cart Icon -->
      <svg
        class="w-6 h-6 text-gray-700 cursor-pointer hover:text-black transition"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path
          d="M1 1h4l1.68 9.39a2 2 0 001.96 1.61h9.72a2 2 0 001.96-1.61L21 6H6"
        ></path>
      </svg>

      <!-- Profile Icon -->
      <!-- <svg
        class="w-6 h-6 text-gray-700 cursor-pointer hover:text-black transition"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M5.121 17.804A4 4 0 019 16h6a4 4 0 013.879 1.804"></path>
        <path d="M8 9a4 4 0 108 0 4 4 0 00-8 0z"></path>
      </svg> -->

      <!-- Mobile Nav Toggle (Hamburger) -->
      <svg
        @click="mobileNavOpen = !mobileNavOpen"
        class="w-6 h-6 text-gray-700 cursor-pointer hover:text-black transition md:hidden"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </div>
  </header>

  <!-- Mobile Nav Menu -->
  <transition name="slide-down">
    <nav
      v-if="mobileNavOpen"
      class="bg-white border-t border-gray-200 py-4 px-6 md:hidden"
    >
      <ul class="space-y-4 text-gray-700">
        <li><router-link to="/" class="hover:text-black transition">Home</router-link></li>
        <li><router-link to="/shop" class="hover:text-black transition">Shop</router-link></li>
        <li><router-link to="/products" class="hover:text-black transition">Product</router-link></li>
        <li><router-link to="/career" class="hover:text-black transition">Career</router-link></li>
      </ul>
    </nav>
  </transition>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import productsData from '@/assets/products.json'

const router = useRouter()

// State for toggling search input
const searchOpen = ref(false)
const searchTerm = ref('')

// State for toggling mobile nav
const mobileNavOpen = ref(false)

function toggleSearch() {
  searchOpen.value = !searchOpen.value
  searchTerm.value = ''
}

// Search function: partial match on product name or link
function doSearch() {
  const products = Object.values(productsData)
  const found = products.find(p =>
    p.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
    p.link.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
  if (found) {
    router.push(`/product/${found.link}`)
    searchOpen.value = false
    searchTerm.value = ''
  } else {
    alert('Product not found.')
  }
}
</script>

<style scoped>
/* Fade Transition for the Search Box */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide-Down Transition for Mobile Nav */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.3s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  overflow: hidden;
}
</style>