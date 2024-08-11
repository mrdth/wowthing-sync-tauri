import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const apiKey = ref("");
  const gameDir = ref("");
  const messages = ref<string[]>([]);

  const addMessage = (message: string) => {
    messages.value.push(message);
  };

  return { apiKey, gameDir, messages, addMessage };
});
