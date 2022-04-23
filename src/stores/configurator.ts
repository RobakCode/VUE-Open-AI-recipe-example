import { defineStore } from "pinia";

export const useConfiguratorStore = defineStore({
  id: "configurator",
  state: () => ({
    meal: "",
    ingredients: [] as string[],
  }),
  getters: {
    getPromptForAPICall: (state) =>
      `Write a recipe based on these ingredients and instructions:\n\nIngredients:\n${state.ingredients?.map(
        (item) => `${item}\n`
      )}\n\nInstructions:\nPrepare ${state.meal}`,
  },
  actions: {
    clearIngredients() {
      this.ingredients = [];
    },
    addIngredient(item: string) {
      this.ingredients.push(item);
    },
    removeIngredient(item: string) {
      this.ingredients = this.ingredients.filter((x) => x !== item);
    },
    setMeal(meal: string) {
      this.meal = meal;
    },
  },
});
