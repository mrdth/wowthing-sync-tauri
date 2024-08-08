<script setup lang="ts">
import { open } from "@tauri-apps/api/dialog";
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
    <form class="row" @submit.prevent="getDir">
        <input
            id="greet-input"
            readonly
            v-model="store.gameDir"
            placeholder="Browse for game dir."
        />
        <button type="submit">Browse</button>
    </form>
</template>
