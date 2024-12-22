<script setup lang="ts">
import SyncPanel from "./components/SyncPanel.vue";
import AppSettings from "./components/AppSettings.vue";

// const store = useAppStore();

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
            <section>
              <Suspense>
              <AppSettings />
              </Suspense>
            </section>

            <div class="row q-my-lg justify-center">
                <div class="col-8">
                    <SyncPanel />
                </div>
            </div>
        </q-page-container>
    </q-layout>
</template>


<style scoped />
