<script setup lang="ts">

import {onMounted, ref, watch} from "vue";
import {open} from "@tauri-apps/plugin-dialog";
import { load } from "@tauri-apps/plugin-store";
import { useEventsBus } from "../EventBus.ts";

const isPwd = ref(true);
const apiKey = ref('');
const gameDir = ref('');


async function getDir() {
  // Open a selection dialog for directories
  const selected = await open({
    directory: true,
    multiple: false,
  });

  if (typeof selected === "string") {
    gameDir.value = selected;
  }
}

const appSettings = await load("settings.json", { autoSave: true});

const readSetting = async (settingName: string) => {
  const setting = await appSettings.get<{value: string}>(settingName);
  return setting?.value ?? '';
};

const writeSetting = async (settingName: string, val: string) => {
  await appSettings.set(settingName, {value: val});
};

onMounted(async () => {
  apiKey.value = await readSetting('apiKey') ?? '';
  gameDir.value = await readSetting('gameDir') ?? '';
});

watch(apiKey, async (val) => {
  useEventsBus().emit('ApiKeyUpdated', {valid: val !== ''});
  await writeSetting('apiKey', val);
});

watch(gameDir, async (val) => {
  useEventsBus().emit('GameDirUpdated', {valid: val !== ''});
  await writeSetting('gameDir', val);
});

</script>

<template>
  <div class="row q-my-lg justify-center">
    <div class="col-8">
      <q-input
          v-model="apiKey"
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
    </div>
  </div>
  <div class="row q-mb-lg justify-center">
    <div class="col-8">
      <form @submit.prevent="getDir">
        <!-- <div class="col-9"> -->
        <q-input v-model="gameDir" label="WoW Folder">
          <template v-slot:append>
            <q-btn color="white" text-color="black" label="Browse" @click="getDir" />
          </template>
        </q-input>
        <!-- </div> -->
        <div class="col"></div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
