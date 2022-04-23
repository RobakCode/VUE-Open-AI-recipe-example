<script lang="ts">
import { mapState } from "pinia";
import { useOptionsStore } from "@/stores/options";
import { useConfiguratorStore } from "@/stores/configurator";
import SelectOption from "@/components/SelectOption.vue";

export default {
  props: {
    items: Array,
  },
  components: {
    SelectOption,
  },
  computed: {
    ...mapState(useOptionsStore, [
      "getOptionsBreakfast",
      "getOptionsDinner",
      "getOptionsSomethingSweet",
    ]),
    ...mapState(useConfiguratorStore, {
      activeMeal: "meal",
      selectedIngredients: "ingredients",
    }),
    activeOptions() {
      switch (this.activeMeal) {
        //@ts-ignore
        case "Something sweet":
          return this.getOptionsSomethingSweet;
        //@ts-ignore
        case "Dinner":
          return this.getOptionsDinner;
        default:
          return this.getOptionsBreakfast;
      }
    },
  },
};
</script>

<template>
  <div class="items-wrapper">
    <div>
      <template v-for="value in activeOptions" :key="value">
        <SelectOption :value="value" />
      </template>
    </div>
    <RouterLink
      to="/recipe"
      :class="{ button: true, active: selectedIngredients.length > 2 }"
      >Find recipe</RouterLink
    >
  </div>
</template>

<style>
.items-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.button {
  padding: 8px 16px;
  border-radius: 8px;
  background: #fff;
  color: #111;
  text-decoration: none;
  margin: 32px auto;
  text-transform: uppercase;
  pointer-events: none;
  opacity: 0.4;
}

.button.active {
  opacity: 1;
  pointer-events: all;
}
</style>
