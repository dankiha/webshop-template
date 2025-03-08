<template>
  <div class="container mx-auto px-4 py-12">
    <!-- Hero Section -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      <div>
        <h1 class="text-6xl font-bold">Your Style, Your Rules</h1>
        <p class="text-gray-600 text-lg mt-4">
          Embrace the art of fashion with our premium collections.
        </p>
        <button class="mt-6 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition">
          Explore Now
        </button>
      </div>
      <img src="@/assets/vue.svg" alt="Fashion Banner" class="w-full rounded-lg shadow-lg" />
    </section>

    <!-- Feature Grid -->
    <section class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="border rounded-lg p-6 shadow-md text-center">
        <h2 class="text-2xl font-bold">Luxury</h2>
        <p class="text-gray-600 mt-2">Handcrafted with the finest materials.</p>
      </div>
      <div class="border rounded-lg p-6 shadow-md text-center">
        <h2 class="text-2xl font-bold">Trendy</h2>
        <p class="text-gray-600 mt-2">Stay ahead of the latest fashion trends.</p>
      </div>
      <div class="border rounded-lg p-6 shadow-md text-center">
        <h2 class="text-2xl font-bold">Sustainable</h2>
        <p class="text-gray-600 mt-2">Eco-friendly and responsibly sourced.</p>
      </div>
    </section>
  </div>
</template>

<script setup></script>