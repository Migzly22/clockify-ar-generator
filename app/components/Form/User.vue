<template>
    <UModal :dismissible="loading" title="Modal non-dismissible" v-model:open="openModal">
        <UButton label="Open" color="neutral" variant="subtle" @click="openModal = true"/>

        <template #body>
            <div class="p-4">
                <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
                    <UFormGroup label="First Name"  name="firstName">
                        <UInput placeholder="First Name" icon="i-heroicons-user" v-model="state.firstName"/>
                    </UFormGroup>
                    <UFormGroup label="Surname"  name="lastName">
                        <UInput placeholder="Surname" icon="i-heroicons-user" v-model="state.lastName"/>
                    </UFormGroup>
                    <UFormGroup label="Email" name="email">
                        <UInput placeholder="email@gmail.com" icon="i-heroicons-envelope" v-model="state.email"/>
                    </UFormGroup>
                    <UFormGroup label="Job Title"  name="job" hint="Optional">
                        <UInput placeholder="Job Title" v-model="state.job"/>
                    </UFormGroup>
                    <UFormGroup label="Workplace Id" hint="Optional"  name="workplaceId">
                        <UInput placeholder="Workplace Id" icon="i-heroicons-identification" v-model="state.workplaceId" />
                    </UFormGroup>

                    <UButton type="submit" lable="Save" :loading="loading" :disabled="loading"/>
                </UForm>
            </div>
        </template>
    </UModal>
  <UModal v-model="modalOpen">
    
  </UModal>
</template>

<script setup lang="ts">
const props = defineProps({
    isOpen : {type : Boolean, required : true, default : false},
    storedValue : {type: Object, required : false}
})
const emit = defineEmits(['updateState', 'updateDetails'])


const openModal = ref<boolean>(false)
const loading = ref<boolean>(false)

const modalOpen = ref<boolean>(false)

const schema = object({
  email: string().email('Invalid email').required('Required'),
  firstName: string().required('Required'),
  lastName: string().required('Required'),
  job: string(),
  workplaceId: string(),
})


type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
  firstName : undefined,
  lastName : undefined,
  job : undefined,
  workplaceId : undefined,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  emit('updateDetails', state);
}


watch(() => props.isOpen,(newData : any)=> modalOpen.value = newData, {immediate : true})
watch(() => modalOpen.value,(newData : any)=> emit('updateState', newData), {immediate : true})
watch(() => props.storedValue,(newData : any)=> {
  state.email = newData.email
  state.firstName = newData.firstName
  state.lastName = newData.lastName
  state.job = newData.job
  state.workplaceId = newData.workplaceId
}, {immediate : true})
</script>

<style scoped>

</style>