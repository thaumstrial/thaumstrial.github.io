<script setup lang="ts">
import {useData, useRoute} from "vitepress";
import normalizeLink from "./utils";

const { page } = useData();
const route = useRoute()
</script>

<template>
  <div v-if="page.isNotFound" class="not-found">
    <h1>404 Not Found</h1>
    <p>The requested URL {{ route.path }} was not found.</p>
  </div>
</template>

<style scoped>
</style>