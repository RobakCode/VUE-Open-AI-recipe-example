<script lang="ts">
import { mapActions } from "pinia";
import { useConfiguratorStore } from "@/stores/configurator";

export default {
  props: {
    value: String,
  },
  methods: {
    ...mapActions(useConfiguratorStore, ["addIngredient", "removeIngredient"]),
    changeInput(event: any) {
      const { target: { checked = undefined, value = undefined } = {} } = event;
      if (!value) return;
      checked ? this.addIngredient(value) : this.removeIngredient(value);
    },
  },
};
</script>

<template>
  <label>
    <input type="checkbox" class="input" :value="value" @change="changeInput" />
    <span class="item">{{ value }}</span>
  </label>
</template>

<style>
.item {
  display: inline-block;
  background: #435559;
  text-transform: uppercase;
  color: #fff;
  border-radius: 8px;
  padding: 8px 16px;
  margin: 8px;
  cursor: pointer;
}

.input:checked + .item {
  background: #64c9df !important;
}

.input {
  display: none;
}
</style>
