<template>
  <v-layout row wrap>
      <v-flex xs3 v-for="recipeType in recipeTypes" :key="recipeType.typeCode">
        <v-card
          class="mx-auto my-2"
          :class="{'card-selected': recipeType.typeCode == typeSelected.typeCode}"
          width="150"
          height="150"
          @click="() => onSelectType(recipeType)"
        >
          <v-img
            :src="recipeType.imagePath"
            class="white--text align-end justify-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="150px"
            width="150px"
          >
            <v-card-title v-text="recipeType.title"></v-card-title>
          </v-img>
        </v-card>
      </v-flex>   
    </v-layout>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { recipeTypes } from "../../recipeConstants";
import { RecipeType } from "../viewModel"; 

export default Vue.extend({
  name: "TypesListComponent",
  data() {
    return {
      recipeTypes: recipeTypes
    }
  },
  props: {
    typeSelected: { required: false } as PropOptions<RecipeType>,
    onSelectType: { required: true } as PropOptions<(recipeType: RecipeType) => void>,
  }
});
</script>

<style> 
  .card-selected {
    box-shadow: 0 0 3pt 2pt red !important;
  }
</style>