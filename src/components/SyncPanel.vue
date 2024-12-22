<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAppStore } from "../stores/AppStore";

const store = useAppStore();

const monitor = ref(false);

const upload = () => {
    return false;
};

onMounted(() => {
    //Ad 12 messages to the store
    for (let i = 0; i < 12; i++) {
        console.log(`Adding message ${i}`);
        store.addMessage(`Message ${i}`);
    }
});
</script>

<template>
    <q-card flat class="width-full">
        <q-card-section class="flex justify-between">
            <q-toggle :disable="store.gameDir && store.apiKey" v-model="monitor" label="Monitor">
                <q-tooltip v-if="!(store.gameDir && store.apiKey)">
          Please set your API Key and WoW Folder first
        </q-tooltip>
        </q-toggle>
            <q-btn :disable="store.gameDir && store.apiKey" @click="upload" label="Manual Upload">
                <q-tooltip v-if="!(store.gameDir && store.apiKey)">
          Please set your API Key and WoW Folder first
        </q-tooltip>
        </q-btn>
        </q-card-section>
        <q-card-section>
            <q-card>
                <q-card-section>
                    <q-list dense>
                        <q-item v-for="message in store.messages">
                            {{ message }}
                        </q-item>
                    </q-list>
                </q-card-section>
            </q-card>
        </q-card-section>
    </q-card>
</template>
