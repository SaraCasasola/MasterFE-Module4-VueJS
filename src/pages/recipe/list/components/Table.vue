<template>
  <v-data-table
    :headers="headers"
    :items="recipes"
    disable-pagination
    :hide-default-footer="true"   
  >
    <template v-slot:[`item`]="{ item }"> 
          <row-component :key="item.id" :recipe="item" />
    </template> 
  </v-data-table>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Recipe } from "../viewModel";
import RowComponent from "./Row.vue";

export default Vue.extend({
  name: "TableComponent",
  components: { RowComponent },
  props: {
    recipes: { required: true } as PropOptions<Recipe[]>
  },  
  computed: {
      headers () {
        return [
          {
            text: 'Type',
            align: 'center',
            sortable: false,
            filterable: false,
            value: 'imageType'
          },
          {
            text: 'Name',
            align: 'center',
            sortable: true,
            filterable: false,
            value: 'name'
          },
          {
            text: 'Description',
            align: 'center',
            sortable: false,
            filterable: false,
            value: 'description'
          },
          {
            text: 'Actions',
            align: 'center',
            sortable: false,
            filterable: false,
            value: 'actions'
          }
        ]
      }
  }  
});
</script>