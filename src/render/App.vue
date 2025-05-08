<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <h2 class="bg-red-500 text-white">chrome version:{{ chromeVersion }}</h2>
    <button @click="pingTest">Pint</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data: () => ({
    chromeVersion: "",
  }),
  mounted() {
    this.chromeVersion = window.versions.chrome();
  },
  methods: {
    async pingTest() {
      let result = await window.api.ping();
      alert(result);
    },
  },
});
</script>