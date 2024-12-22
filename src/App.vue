<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import ApiKey from "./components/ApiKey.vue";
import Browse from "./components/Browse.vue";
import SyncPanel from "./components/SyncPanel.vue";
</script>

<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-primary text-white">
            <q-toolbar>
                <q-toolbar-title>
                    WoWthing Sync
                </q-toolbar-title>
            </q-toolbar>
        </q-header>

        <q-page-container class="fit column">
            <div class="row q-mb-lg justify-center">
                <div class="col-8">
                    <ApiKey />
                </div>
            </div>
            <div class="row q-mb-lg justify-center">
                <div class="col-8">
                    <Browse />
                </div>
            </div>

            <div class="row q-my-lg justify-center">
                <div class="col-8">
                    <SyncPanel />
                </div>
            </div>
        </q-page-container>
    </q-layout>
</template>


<style scoped />