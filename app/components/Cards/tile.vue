<template>
    <UCard class="shadow-sm hover:shadow-md transition-shadow ring-primary-200 relative">
        <div class="flex flex-col items-center">
            <div class="stat-value text-3xl font-bold text-primary-500 mb-2">{{ value }}</div>
            <div class="stat-label text-slate-400 text-xs uppercase tracking-wider">{{ name }}</div>
        </div>
        <div class="absolute top-0 left-0 right-0 h-1 bg-primary-500"></div>
    </UCard>
</template>

<script setup lang="ts">
interface Props{
    value : string,
    name : string
}

defineProps<Props>()
</script>

<style scoped>

</style>