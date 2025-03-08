<template>
  <div class="container mx-auto p-6 text-center">
    <!-- Hero Section -->
    <div class="relative h-[50vh] rounded-lg shadow-md overflow-hidden">
      <!-- Banner Image -->
      <img src="@/assets/banner-1.jpg" alt="Person doing yoga" class="absolute inset-0 w-full h-full object-cover" />
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-black opacity-60"></div>

      <!-- Centered Text Content -->
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10 text-white">
        <h1 class="text-4xl font-bold">
          Discover the Perfect Yoga Mat for You
        </h1>
        <p class="text-lg mt-4">
          Experience comfort and durability with our premium selection.
        </p>
        <button @click="$router.push('/shop')"
          class="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
          Shop Now
        </button>
      </div>
    </div>

    <!-- Catchphrase Section -->
    <section class="flex items-center justify-center h-[calc(100vh-70vh)]">
      <div class="text-center">
      <h2 class="text-7xl font-bold mb-4">Unleash Your Potential</h2>
      <p class="text-xl mt-10">Empower your body and mind with the perfect blend of innovation and style.</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import productsData from "@/assets/products.json";

const featuredProducts = ref(Object.values(productsData).slice(0, 3));
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>