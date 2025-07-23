<template>
  <UContainer class="flex flex-col gap-6 py-6">
    <UCard class="shadow-sm hover:shadow-md transition-shadow ring-primary-200">
        <div class="flex justify-between mb-4 items-end">
            <div class="flex gap-4 items-center">
                <UAvatar alt="Avatar" size="3xl" />
                <div>
                    <div class="text-lg text-highlighted">--</div>
                    <div class="text-sm">--</div>
                    <div class="text-xs text-muted">--</div>
                </div>
            </div>
            <!-- <div class="flex-1">
                <div class="task-title text-lg font-semibold text-highlighted mb-2">
                {{ Task || 'No description' }}
                </div>
            </div>
            <div class="task-duration text-muted text-sm px-3 py-1 bg-primary-500/10 rounded-full border border-primary-500/30">
                ⏱️ {{ durationToHours(Duration) || durationToHours('0:0:0') }}
            </div>
            </div>
            
            <div class="flex gap-4 text-sm text-muted">
            <span>📅 {{ formatDate(dateInfo, DateFormatType.DateWithTime) }}</span>
            <span>🕐 {{ Start }} - {{ End }}</span> -->
            <UButton icon="i-heroicons-cog"/>
        </div>

    </UCard>
        
    <div class="grid grid-cols-3 gap-2">
      <CardsTile 
          v-for="(analytics, index) in countCard" 
          :key="`cards-${countCard}`"
          v-bind="analytics"
      />
    </div>
    <div v-if="war.length > 0" class="pb-6 flex flex-col gap-6">
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
            <h2 class="text-primary-500 text-xl font-semibold order-2"> 📋 Accomplishments </h2>   
            <div class="flex gap-2 order-1 md:order-3">
                <DateRangePicker />
                    <UButton icon="i-heroicons-magnifying-glass" />
                    <UButton icon="i-heroicons-printer"  :disabled="showList.length == 0" />         
            </div>
           
        </div>
        
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