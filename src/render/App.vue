<template>
  <div class="flex-1 flex items-center justify-center">
    <div class="shadow-lg rounded-lg p-5 bg-white flex flex-col gap-4">
      <div class="flex items-center justify-between gap-3">
        <LucideCompass />
        <span class="flex-1 min-w-[120px]">ChromeVersion:</span>
        <span class="flex-1 text-green-500">{{ chromeVersion }}</span>
      </div>
      <div class="flex items-center justify-between gap-3">
        <LucideHexagon />
        <span class="flex-1 min-w-[120px]">NodeVersion:</span>
        <span class="flex-1 text-green-500">{{ nodeVersion }}</span>
      </div>
      <div class="flex items-center justify-between gap-3">
        <LucideCable />
        <span class="flex-1 min-w-[120px]">ElectronVersion:</span>
        <span class="flex-1 text-green-500">{{ electronVersion }}</span>
      </div>
      <ElButton type="primary" @click="handlePing">
        Ping
      </ElButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElButton, ElMessage } from "element-plus";
import { LucideCompass, LucideHexagon, LucideCable } from "lucide-vue-next";

const chromeVersion = window.versions.chrome();
const nodeVersion = window.versions.node();
const electronVersion = window.versions.electron();

const handlePing = async () => {
  const result = await window.api.ping();
  ElMessage({
    message: result,
    type: "success",
    duration: 1000,
  });
};
</script>