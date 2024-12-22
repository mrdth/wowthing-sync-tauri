import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

import { load } from '@tauri-apps/plugin-store';

export const useAppStore = defineStore("app", async () => {
  const appSettings = await load("settings.json", { autoSave: true});
  const apiKey = ref("dsadsasadsaaasd");
  const gameDir = ref("");
  const messages = ref<string[]>([]);

  const addMessage = (message: string) => {
    messages.value.push(message);
  };

  const loadSettings = async () => {
    apiKey.value = await readSetting('apiKey');
    gameDir.value = await readSetting('gameDir');
  };

  const readSetting = async (settingName: string) => {
    const setting = await appSettings.get<{value: string}>(settingName);
    return setting?.value ?? '';
  };

  const writeSetting = async (settingName: string, val: string) => {
    await appSettings.set(settingName, {value: val});
  };

  const initialize = async () => {
    await loadSettings();
  };

  watch(apiKey, async (val) => {
    console.log('apiKey changed', val);
    await writeSetting('apiKey', val);
  });

  watch(gameDir, async (val) => {
    await writeSetting('gameDir', val);
  });

  return { apiKey, gameDir, messages, addMessage, initialize };
});
