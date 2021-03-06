<template>
  <v-form>    
    <template>
      <p class="text-caption ml-5">Recipe type</p>
      <types-list-component class="mb-10" :typeSelected="recipe.type" :on-select-type="onSelectType"></types-list-component>
    </template>

    <v-text-field
      filled
      label="Name"
      :value="recipe.name"
      :rules="[resultRecipeNameError]"
      @input="(name) => onUpdateRecipe('name', name)"
      @click:append="onAddIngredient(ingredient)"
    />

    <v-text-field
      filled
      label="Ingredients"
      placeholder="Add ingredient"
      append-icon="add"
      v-model="ingredient"
      @click:append="onAddIngredient(ingredient)"
    />

    <ingredient-list-component :ingredients="recipe.ingredients" :on-remove-ingredient="onRemoveIngredient" />

    <v-alert :value="!recipeError.ingredients.succeeded" color="error" outlined>{{
      recipeError.ingredients.message
    }}</v-alert>

    <v-textarea
      label="Description"
      filled
      placeholder="Description...."
      rows="10"
      :value="recipe.description"
      :rules="[resultRecipeDescriptionError]"
      :no-resize="true"
      @input="(value) => onUpdateRecipe('description', value)"
    ></v-textarea>

    <v-btn type="button" color="success" @click.prevent="onSave">Save</v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import TypesListComponent from "./TypesList.vue";
import IngredientListComponent from "./IngredientList.vue";
import { FormProps } from "../formProps";
import { recipeTypes } from "../../recipeConstants";

export default Vue.extend({
  name: "FormComponent",
  components: { TypesListComponent, IngredientListComponent },
  props: {
    recipe: { required: true },
    recipeError: { required: true },
    onUpdateRecipe: { required: true },
    onSave: { required: true },
    onRemoveIngredient: { required: true },
    onAddIngredient: { required: true },
    onSelectType: {required: true}
  } as FormProps,
  data() {
    return {
      ingredient: ""
    };
  },
  computed: {
    resultRecipeNameError(): boolean | string {
      return this.recipeError.name.succeeded || this.recipeError.name.message;
    },
    resultRecipeDescriptionError(): boolean | string {
      return this.recipeError.description.succeeded || this.recipeError.description.message;
    }
  },
});
</script>
