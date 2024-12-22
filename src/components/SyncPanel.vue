<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useEventsBus} from "../EventBus.ts";

const monitor = ref(false);
const messages = ref<string[]>([]);
const ApiKeyValid = ref(false);
const GameDirValid = ref(false);

const upload = () => {
    return false;
};

onMounted(() => {
    //Ad 12 messages to the store
    for (let i = 0; i < 12; i++) {
        messages.value.push(`Message ${i}`);
    }
});

useEventsBus().on('ApiKeyUpdated', (data: {valid: boolean}) => {
    ApiKeyValid.value = data.valid;
});

useEventsBus().on('GameDirUpdated', (data: {valid: boolean}) => {
    GameDirValid.value = data.valid;
});

</script>

<template>
    <q-card flat class="width-full">
        <q-card-section class="flex justify-between">
            <q-toggle :disable="!(ApiKeyValid && GameDirValid)" v-model="monitor" label="Monitor">
                <q-tooltip v-if="!(ApiKeyValid && GameDirValid)">
          Please set your API Key and WoW Folder first
        </q-tooltip>
        </q-toggle>
            <q-btn :disable="!(ApiKeyValid && GameDirValid)" @click="upload" label="Manual Upload">
                <q-tooltip v-if="!(ApiKeyValid && GameDirValid)">
          Please set your API Key and WoW Folder first
        </q-tooltip>
        </q-btn>
        </q-card-section>
        <q-card-section>
            <q-card>
                <q-card-section>
                    <q-list dense>
                        <q-item v-for="message in messages">
                            {{ message }}
                        </q-item>
                    </q-list>
                </q-card-section>
            </q-card>
        </q-card-section>
    </q-card>
</template>
