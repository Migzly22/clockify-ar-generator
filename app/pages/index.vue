<template>
  <UContainer class="flex flex-col gap-3">
    <div class="grid grid-cols-3 gap-2">
      <CardsTile 
          v-for="(analytics, index) in countCard" 
          :key="`cards-${countCard}`"
          v-bind="analytics"
      />
    </div>
    <div v-if="war.length > 0" class="pb-6 flex flex-col gap-4">
        <h2 class="text-primary-500 text-xl font-semibold">
            📋 Accomplishments
        </h2>        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
          <CardsInfo 
              v-for="(task, index) in showList" 
              :key="`task-${index}`"
              v-bind="task"
              :dateInfo="task.Date"
          />
        </div>
        <div class="flex flex-1 justify-end">
          <UPagination 
            v-model:page="pageState.page" 
            :total="war.length" 
            :items-per-page="pageState.limit"  
            show-edges 
            :sibling-count="1" 
            color="primary"
            v-if="war.length > 0"
          />
        </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { war, countCard } from '../contants/dump';

const pageState = reactive({
  page : 1,
  limit : 6
})

const showList = computed(() => {
    const start = (pageState.page - 1) * pageState.limit 
    const end = start + pageState.limit 
    return war.slice(start, end)
  }) 
</script>

<style scoped>

</style>