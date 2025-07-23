<template>
    <UCard class="shadow-sm hover:shadow-md transition-shadow ring-primary-200">
        <div class="task-header flex justify-between items-start mb-4">
            <div class="flex-1">
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
            <span>🕐 {{ Start }} - {{ End }}</span>
        </div>
    </UCard>
</template>

<script setup lang="ts">
import { formatDate, durationToHours, DateFormatType } from '~/utils/helper';

interface Props{
    dateInfo : string,
    End : string,
    Start : string,
    Task : string,
    Duration : string
}

const uiCardConfig = {
    body: 'sm:p-4'
}
defineProps<Props>()
</script>

<style scoped>

</style>