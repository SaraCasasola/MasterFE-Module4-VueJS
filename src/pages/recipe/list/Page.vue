<template>
  <app-layout>
   <v-card>
      <v-card-title class="d-flex flex-row justify-space-between">
        <div class="text-h4 d-flex flex-row justify-space-between">
          <div class="mr-5">Recipes</div>
          <v-divider vertical></v-divider>
        </div>
        <v-btn fab large outlined text :to="routeEdit">new</v-btn>
      </v-card-title>
      <v-card-text>
        <search-bar-component :search-text="searchText" :on-search="onSearch" />
        <table-component :recipes="recipes" :onRemove="onRemove"/>
      </v-card-text>
    </v-card>
  </app-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { AppLayout } from "../../../common/layouts";
import { Recipe } from "./viewModel";
import { TableComponent, SearchBarComponent } from "./components";
import { baseRoutes } from "../../../router";

export default Vue.extend({
  name: "RecipeListPage",
  components: { AppLayout, TableComponent, SearchBarComponent },
  computed: {
    routeEdit(): string {
      return `${baseRoutes.recipe}/0`;
    }
  },
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>,
    searchText: String,
    onSearch: { required: true } as PropOptions<(value: string) => void>,
    onRemove: { required: true } as PropOptions<(id: number) => void>
  },
});
</script>
