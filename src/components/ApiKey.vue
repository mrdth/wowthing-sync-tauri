<script setup lang="ts">
import { useAppStore } from "../stores/AppStore";

const store = useAppStore();
</script>

<template>
    <form class="row">
        <input
            id="apikey-input"
            v-model="store.apiKey"
            placeholder="Enter API key."
        />
    </form>
</template>
