<script setup lang="ts">
import Header from './components/custom/Header.vue'
</script>

<template>
  <div className="flex min-h-screen w-[250%] md:w-full flex-col items-center">
    <Header />
    <main className="flex flex-col items-center w-full bg-gray-100 h-full">
      <router-view />
    </main>
  </div>
</template>
