<template>
  <div class="container mx-auto px-4 py-12">
    <!-- Hero Section -->
    <section class="text-center">
      <h1 class="text-6xl font-bold">Discover Timeless Fashion</h1>
      <p class="text-gray-600 text-lg mt-4">
        Elevate your style with our latest collections.
      </p>
      <button class="mt-6 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
        Shop Now
      </button>
    </section>

    <!-- Featured Images -->
    <section class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="relative group">
        <img src="@/assets/fashion1.jpg" alt="Look 1" class="w-full rounded-lg" />
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <span class="text-white text-lg font-semibold">Casual Looks</span>
        </div>
      </div>
      <div class="relative group">
        <img src="@/assets/fashion2.jpg" alt="Look 2" class="w-full rounded-lg" />
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <span class="text-white text-lg font-semibold">Office Elegance</span>
        </div>
      </div>
      <div class="relative group">
        <img src="@/assets/fashion3.jpg" alt="Look 3" class="w-full rounded-lg" />
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <span class="text-white text-lg font-semibold">Street Style</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>