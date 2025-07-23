<template>
    <UPopover class="w-full">
        <UButton color="primary" variant="subtle" icon="i-lucide-calendar">
            <template v-if="dateValue.start">
                <template v-if="dateValue.end">
                {{ df.format(dateValue.start.toDate(getLocalTimeZone())) }} - {{ df.format(dateValue.end.toDate(getLocalTimeZone())) }}
                </template>

                <template v-else>
                {{ df.format(dateValue.start.toDate(getLocalTimeZone())) }}
                </template>
            </template>
            <template v-else>
                Pick a date
            </template>
        </UButton>

        <template #content>
            <UCalendar v-model="dateValue" class="p-2" :number-of-months="2" range />
        </template>
    </UPopover>
</template>
<script lang="ts" setup>
    import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'
    const df = new DateFormatter('en-US', { dateStyle: 'medium'})
    const dateValue = defineModel<any>('dateValue', {default : {
        start: new CalendarDate(2022, 1, 20),
        end: new CalendarDate(2022, 2, 10)
    }})
    // const rangeValue = shallowRef({
    //     start: new CalendarDate(2022, 1, 20),
    //     end: new CalendarDate(2022, 2, 10)
    // })



</script>

<style>

</style>