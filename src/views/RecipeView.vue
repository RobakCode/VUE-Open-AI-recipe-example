<script lang="ts">
import { mapState } from "pinia";
import { useConfiguratorStore } from "@/stores/configurator";
import { Configuration, OpenAIApi } from "openai";

export default {
  data() {
    return {
      findedRecipe: "",
    };
  },
  computed: {
    ...mapState(useConfiguratorStore, ["getPromptForAPICall", "meal"]),
  },
  methods: {
    async getResponse() {
      const configuration = new Configuration({
        //@ts-ignore
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);

      //@ts-ignore
      const { data: { choices: [response] } = {} } =
        await openai.createCompletion("text-davinci-002", {
          //@ts-ignore
          prompt: this.getPromptForAPICall,
          temperature: 0.3,
          max_tokens: 120,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        });

      console.log("response?.text", response?.text);

      //@ts-ignore
      this.findedRecipe = response?.text;
    },
  },
  mounted() {
    //@ts-ignore
    this.getResponse();
  },
};
</script>

<template>
  <main>
    <div class="wrapper">
      <h1 v-if="meal" class="headline">
        Proposed recipe for {{ meal?.toLowerCase() }}
      </h1>
      <h1 v-else class="headline">Proposed recipe</h1>

      <div v-if="findedRecipe" class="text">{{ findedRecipe }}</div>
      <div v-else>loading...</div>
    </div>
  </main>
</template>

<style>
.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
}

.menu li {
  margin: 0 8px;
}

.menu li a {
  text-decoration: none;
  color: #000;
  padding: 8px 16px;
  border-radius: 8px;
  background: #a2cfd9;
  color: #111;
  text-transform: uppercase;
}

.text {
  color: #fff;
  max-width: 500px;
  white-space: pre-line;
  line-height: 2;
}
</style>
