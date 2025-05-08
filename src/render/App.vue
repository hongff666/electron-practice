<template>
  <div class="flex-1 flex items-center justify-center">
    <div class="shadow-lg rounded-lg p-4 bg-white flex flex-col gap-2">
      <div class="text-2xl font-bold mb-4">
        ChromeVersion:
        <span>{{ chromeVersion }}</span>
      </div>
      <ElButton type="primary">Ping</ElButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElButton } from "element-plus";
const chromeVersion = window.versions.chrome();
</script>