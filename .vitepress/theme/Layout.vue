<script setup lang="ts">
import {useData} from "vitepress";
import normalizeLink from "./utils";

const {theme, frontmatter, isDark } = useData();

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <header>
    <a
        v-for="i in theme.nav"
        :href="normalizeLink(i.link)"
    >{{ i.text }}</a>
    <button @click="toggleTheme">
      {{ isDark ? 'Light Mode' : 'Dark Mode' }}
    </button>
  </header>

  <Content />
  <footer>
    <small v-if="frontmatter.lastUpdated">
      Last updated: {{ frontmatter.lastUpdated }}
    </small>
  </footer>
</template>

<style scoped>
</style>