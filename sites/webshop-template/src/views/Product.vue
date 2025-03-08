<template>
  <div class="container mx-auto p-6 md:p-12">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Product Images -->
      <div class="flex flex-col gap-4">
        <img :src="selectedImage" :alt="product?.name" class="w-full h-96 object-cover rounded-lg shadow-md" />

        <!-- Image Selector -->
        <div class="flex gap-2 overflow-x-auto">
          <img 
            v-for="(img, index) in product?.images" 
            :key="index" 
            :src="img" 
            :alt="product?.name" 
            @click="selectedImage = img"
            class="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition border-2"
            :class="{'border-black': selectedImage === img, 'border-transparent': selectedImage !== img}"
          />
        </div>
      </div>

      <!-- Product Details (Inside Card) -->
      <div class="bg-white shadow-lg rounded-lg p-6 md:p-10">
        <p class="text-sm text-gray-500 text-center">{{ product?.collection || 'Exclusive Collection' }}</p>
        <h1 class="text-3xl font-bold text-gray-900 text-center">{{ product?.name }}</h1>
        
        <!-- Ratings & Reviews -->
        <div class="flex flex-col items-center justify-center mt-2">
          <div class="flex text-yellow-400 text-lg">★★★★★</div>
          <p class="text-gray-500 text-sm mt-1">5.0 (7,932 reviews)</p>
        </div>

        <!-- Price Section -->
        <div class="mt-4 text-center">
          <p class="text-2xl font-bold text-gray-900">
            Rp{{ product?.curr_price.toLocaleString("id-ID") }}
            <span v-if="product?.ori_price > product?.curr_price" class="text-gray-500 line-through text-lg ml-2">
              Rp{{ product?.ori_price.toLocaleString("id-ID") }}
            </span>
          </p>
        </div>

        <!-- Description -->
        <p class="text-gray-700 mt-4 leading-relaxed text-center" v-html="product?.description"></p>

        <!-- Color Options -->
        <div class="mt-4">
          <p class="font-semibold text-gray-900 text-center">Colors Available</p>
          <div class="flex justify-center gap-2 mt-2">
            <div 
              v-for="(color, index) in product?.colors" 
              :key="index" 
              :style="{ backgroundColor: color }"
              class="w-8 h-8 rounded-full border cursor-pointer"
              :class="{'border-black': selectedColor === color, 'border-gray-300': selectedColor !== color}"
              @click="selectedColor = color"
            ></div>
          </div>
        </div>

        <!-- Quantity Selector -->
        <div class="mt-6 flex items-center justify-center gap-4">
          <button @click="decreaseQuantity" class="border border-gray-300 px-4 py-2 rounded">-</button>
          <p class="text-lg font-semibold">{{ quantity }}</p>
          <button @click="increaseQuantity" class="border border-gray-300 px-4 py-2 rounded">+</button>
        </div>

        <!-- Add to Cart Button -->
        <div class="flex justify-center mt-6">
          <button 
            @click="goToCheckout(key)"
            class="bg-black text-white text-lg font-semibold py-4 px-12 rounded-lg hover:bg-gray-800 transition">
            Buy
          </button>
        </div>

        <!-- Product Info -->
        <div class="mt-6 space-y-2 text-center">
          <p><strong>SKU:</strong> <span class="text-gray-700">{{ product?.sku || 'BS928301' }}</span></p>
          <p><strong>Availability:</strong> <span class="text-green-600 font-semibold">In Stock</span></p>
          <p><strong>Categories:</strong> <span class="text-gray-700">{{ product?.categories?.join(', ') || 'Women, Earrings' }}</span></p>
          <p><strong>Tags:</strong> <span class="text-gray-700">{{ product?.tags?.join(', ') || 'Formal, Elegant, Modern' }}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import productsData from "@/assets/products.json";

const route = useRoute();
const productId = route.params.productId;
const product = computed(() => productsData[productId] || null);

const selectedImage = ref(product.value?.images[0] || '');
const selectedColor = ref(product.value?.colors ? product.value.colors[0] : '');
const quantity = ref(1);

const router = useRouter();
const goToCheckout = () => {
  router.push(`/checkout/${productId}`);
};

const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--;
  console.log(product)
};
const increaseQuantity = () => quantity.value++;
</script>