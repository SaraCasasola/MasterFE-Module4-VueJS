<template>
  <tr :class="$style.row">
    <td :class="$style.image">
      <v-img :src="recipe.type.imagePath" :alt="recipe.name" :class="$style.image"></v-img>
    </td>
    <td :class="$style.name">
      <span>{{ recipe.name }}</span>
    </td>
    <td :class="$style.description">
      <span>{{ recipe.description }}</span>
    </td>
    <td :class="$style.editButton">
      <v-btn text icon :to="routeEdit">
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn text icon @click.prevent="() => onRemove(recipe.id)">
        <v-icon>delete</v-icon>
      </v-btn>
    </td>
  </tr>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { baseRoutes } from "../../../../router";
import { Recipe } from "../viewModel";

export default Vue.extend({
  name: "RowComponent",
  props: {
    recipe: { required: true } as PropOptions<Recipe>,
    onRemove: { required: true } as PropOptions<(id: number) => void>
  },
  computed: {
    routeEdit(): string {
      return `${baseRoutes.recipe}/${this.recipe.id}`;
    }
  }
});
</script>

<style module>

.row {
  background-color: rgba(0, 0, 0, 0.05);
}

.row:hover {
  background: white !important;
}

.image {
  width: 85px;
  margin: 10px;
}

.name {
  width: 25%;
  text-align: center;
}

.description {
  max-width: 177px;
}

.description span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 100%;
}

.edit-button {
  text-align: center;
}
</style>
