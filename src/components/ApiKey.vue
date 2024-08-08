<script setup lang="ts">
import { useAppStore } from "../stores/AppStore";
import { ref } from "vue";

const store = useAppStore();
const isPwd = ref(true);
</script>

<template>
    <q-input
        v-model="store.apiKey"
        :type="isPwd ? 'password' : 'text'"
        label="API Key"
    >
        <template v-slot:append>
            <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
            />
        </template>
    </q-input>
</template>
