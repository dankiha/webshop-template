<template>
  <nav class="w-full bg-white py-4 border-b">
    <div class="container mx-auto flex justify-center space-x-8 max-w-screen-lg">
      <router-link v-for="item in navItems" :key="item.name" :to="item.path"
        class="relative px-4 py-2 font-medium text-black transition-all duration-200 hover:no-underline hover:text-black">
        <span class="block px-4 py-2 border border-transparent rounded-md hover:border-black">
          {{ item.name }}
        </span>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
const navItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Product", path: "/products" },
  { name: "Careers", path: "/career" },
];
</script>