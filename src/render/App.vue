<template>
  <div class="flex flex-1 items-center justify-center">
    <div class="flex flex-col gap-4 rounded-lg bg-white p-5 shadow-lg">
      <div class="flex items-center justify-between gap-3">
        <LucideCompass />
        <span class="min-w-[120px] flex-1">ChromeVersion:</span>
        <span class="flex-1 text-green-500">{{ chromeVersion }}</span>
      </div>
      <div class="flex items-center justify-between gap-3">
        <LucideHexagon />
        <span class="min-w-[120px] flex-1">NodeVersion:</span>
        <span class="flex-1 text-green-500">{{ nodeVersion }}</span>
      </div>
      <div class="flex items-center justify-between gap-3">
        <LucideCable />
        <span class="min-w-[120px] flex-1">ElectronVersion:</span>
        <span class="flex-1 text-green-500">{{ electronVersion }}</span>
      </div>
      <ElButton type="primary" @click="handlePing"> Ping </ElButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ElButton, ElMessage } from 'element-plus'
import { LucideCable, LucideCompass, LucideHexagon } from 'lucide-vue-next'

const chromeVersion = window.versions.chrome()
const nodeVersion = window.versions.node()
const electronVersion = window.versions.electron()

const handlePing = async () => {
  const result = await window.api.ping()
  ElMessage({
    message: result,
    type: 'success',
    duration: 1000,
  })
}
</script>
