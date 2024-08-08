import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const apiKey = ref("");
  const gameDir = ref("");

  return { apiKey, gameDir };
});
