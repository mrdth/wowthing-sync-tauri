<script setup lang="ts">
import { open } from '@tauri-apps/plugin-dialog';
import { useAppStore } from "../stores/AppStore";

const store = useAppStore();

async function getDir() {
    // Open a selection dialog for directories
    const selected = await open({
        directory: true,
        multiple: false,
    });

    if (typeof selected === "string") {
        store.gameDir = selected;
    }
}
</script>

<template>
    <form @submit.prevent="getDir">
        <!-- <div class="col-9"> -->
        <q-input v-model="store.gameDir" label="WoW Folder">
            <template v-slot:append>
                <q-btn color="white" text-color="black" label="Browse" @click="getDir" />
            </template>
        </q-input>
        <!-- </div> -->
        <div class="col"></div>
    </form>
</template>
