<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold text-gray-900 mb-6">Our Products</h1>

    <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div v-for="(product, key) in products" :key="key"
        class="flex flex-col  overflow-hidden  hover:shadow-md transition-shadow">
        <!-- Product Image -->
        <img :src="product.images[0]" :alt="product.name" class="w-full h-52 object-cover">

        <!-- Product Info -->
        <div class="flex flex-col flex-grow p-4">
          <h3 class="text-lg font-semibold text-gray-900 line-clamp-2">
            {{ product.name }}
          </h3>

          <!-- Product Brand -->
          <p class="text-sm text-gray-600 mt-1">{{ product.brand }}</p>

          <p class="text-gray-900 font-bold mt-2">
            Rp{{ product.curr_price.toLocaleString("id-ID") }}
            <span v-if="product.ori_price > product.curr_price" class="text-gray-500 line-through text-sm">
              Rp{{ product.ori_price.toLocaleString("id-ID") }}
            </span>
          </p>
        </div>

        <!-- Full-Width Button -->
        <button @click="goToProductDetail(key)" class="bg-black text-white py-3 w-full font-semibold hover:bg-stone-300 transition-all focus:ring-0">
          View Product
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import productsData from "@/assets/products.json";

const router = useRouter();
const products = ref(productsData);

const goToProductDetail = (productId) => {
  router.push(`/product/${productId}`);
};
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