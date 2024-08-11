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
            <q-toggle v-model="monitor" label="Monitor" />
            <q-btn @click="upload" label="Manual Upload" />
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
