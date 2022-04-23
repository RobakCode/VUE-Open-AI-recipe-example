<script lang="ts">
import { mapActions } from "pinia";
import { useConfiguratorStore } from "@/stores/configurator";
import ListOptions from "@/components/ListOptions.vue";

export default {
  components: {
    ListOptions,
  },
  methods: {
    ...mapActions(useConfiguratorStore, ["setMeal", "clearIngredients"]),
  },
  mounted() {
    //@ts-ignore
    this.setMeal("Something sweet");
    //@ts-ignore
    this.clearIngredients();
  },
};
</script>

<template>
  <div class="wrapper">
    <h1 class="headline">Choose products for something sweet</h1>
    <ListOptions />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
