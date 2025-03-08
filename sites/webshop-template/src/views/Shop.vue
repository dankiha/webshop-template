<script setup>
import { ref, onMounted } from 'vue'
import { useMotion } from '@vueuse/motion'
import productsData from '@/assets/products.json'

const products = ref([])
const heroText = ref(null)

onMounted(() => {
  products.value = Object.values(productsData).slice(0, 3)
  // Animate the hero text on mount
  useMotion(heroText, {
    initial: { opacity: 0, y: -50 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  })
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section with background image and overlay -->
    <div class="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center">
      <img src="@/assets/banner-2.jpg" alt="Hero Banner" class="absolute inset-0 w-full h-full object-cover" />
      <div class="absolute inset-0 bg-black opacity-60"></div>
      <div ref="heroText" class="relative text-center text-white px-4">
        <h1 class="text-5xl font-bold mb-4">Elevate Your Workout</h1>
        <p class="text-xl mb-8">Experience the ultimate in fitness and wellness with our premium gear.</p>
        <button class="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
        </div>

         <!-- Featured Products Grid -->
    <div class="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="(product, key) in products" :key="key"
        class="flex flex-col border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <img :src="product.images[0]" :alt="product.name" class="w-full h-52 object-cover" />
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900 line-clamp-2">
            {{ product.name }}
          </h3>
          <p class="text-gray-900 font-bold mt-2">
            Rp{{ product.curr_price.toLocaleString("id-ID") }}
          </p>
        </div>
      </div>
    </div>
    
    <!-- Product Highlights Section -->
    <!-- <section class="py-12 px-6 max-w-7xl mx-auto">
      <h2 class="text-3xl font-bold text-center mb-8">Our Top Picks</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105"
        >
          <img :src="product.images[0]" :alt="product.name" class="w-full h-48 object-cover" />
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-1">{{ product.name }}</h3>
            <p class="text-gray-500 text-sm">{{ product.brand }}</p>
            <p class="text-green-600 font-bold mt-2">Rp {{ product.curr_price.toLocaleString('id-ID') }}</p>
          </div>
        </div>
      </div>
    </section> -->

  </div>
</template>
