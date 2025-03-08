import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import Home2 from "../views/home-pages/2.vue";
import Products from"@/views/Products.vue";
import Product from"@/views/Product.vue";
import Checkout from"@/views/Checkout.vue";
import Career from"@/views/Career.vue";
import Shop from "@/views/Shop.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "Home", component: Home },
  { path: "/home-2", name: "Home 2", component: Home2 },
  { path: "/products", name: "Products", component: Products },
  { path: "/product/:productId", name: "Product", component: Product, props: true },
  { path: "/checkout/:productId", name: "Checkout", component: Checkout, props: true },
  { path: "/career", name: "Career", component: Career },
  { path: "/shop", name: "Shop", component: Shop },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;