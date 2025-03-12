<script setup>
  import init from './asciihou.js';
  import {onMounted} from "vue";

  onMounted(() => {
    const canvasEl = document.getElementById('bevy')
    if (!canvasEl) return

    let once = false
    const observer_callback = (_mutations, _observer) => {
      if (!once) {
        canvasEl.style.aspectRatio = canvasEl.attributes.width.value / canvasEl.attributes.height.value
        once = true
      }
    }

    const observer = new MutationObserver(observer_callback)
    const config = { attributeFilter: ['width', 'height'] }
    observer.observe(canvasEl, config)

    init({ module_or_path: '/game/asciihou_bg.wasm' })
  });
</script>

<template>
  <canvas class="bevy-instance__canvas" id="bevy" width="1280" height="720"></canvas>
</template>
