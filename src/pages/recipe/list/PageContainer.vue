<template>
  <recipe-list-page v-bind="{ searchText, recipes: filteredRecipes, onSearch, onRemove }" />
</template>

<script lang="ts">
import Vue from "vue";
import { fetchRecipes, remove } from "../../../rest-api/api/recipe";
import { filterRecipesByCommaSeparatedText } from "./business/filterRecipeBusiness";
import { mapRecipeListModelToVm } from "./mapper";
import { Recipe } from "./viewModel";
import RecipeListPage from "./Page.vue";

export default Vue.extend({
  name: "RecipeListPageContainer",
  components: {
    RecipeListPage,
  },
  data() {
    return {
      recipes: [] as Recipe[],
      searchText: "",
    };
  },
  computed: {
    filteredRecipes(): Recipe[] {
      return filterRecipesByCommaSeparatedText(this.recipes, this.searchText);
    },
  },
  created() {
    this.getRecipes();
  },
  methods: {
    onSearch(value: string) {
      this.searchText = value;
    },
    onRemove(id: number) {
      remove(id).then((message) => {
          console.log(message);
          this.getRecipes();
        })
      .catch((error) => console.log(error));
    },
    getRecipes() {
      fetchRecipes()
        .then((recipes) => {
          this.recipes = mapRecipeListModelToVm(recipes);
        })
      .catch((error) => console.log(error));
    }
  },
});
</script>
