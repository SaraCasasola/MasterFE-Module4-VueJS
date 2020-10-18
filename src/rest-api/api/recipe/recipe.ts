import { Recipe } from "../../model";
import { mockRecipes } from "./mockData";
import { recipeTypes } from "../../../pages/recipe/recipeConstants";

let recipes = mockRecipes;
let newRecipeId = 0;

const indexToGetNewId = 1;

export const fetchRecipes = (): Promise<Recipe[]> => {
  return Promise.resolve(recipes);
};

export const fetchRecipeById = (id: number): Promise<Recipe> => {
  if(id === newRecipeId) {
    return getNewRecipe();
  }
  
  return getRecipe(id);
};

export const update = (recipe: Recipe): Promise<string> => {
  const index = recipes.findIndex((r) => r.id === recipe.id);

  return index >= 0 ? saveRecipeByIndex(index, recipe) : Promise.reject("Something was wrong saving recipe :(");
};

export const save = (recipe: Recipe): Promise<string> => {
  const newId = recipes.length + indexToGetNewId;
  recipe.id = newId; 
  if(recipe.type.typeCode === "") recipe.type = recipeTypes.noImage;
  recipes.push(recipe);
  return Promise.resolve("Save recipe success");  
};

export const remove = (id: number): Promise<string> => {
  recipes.splice(id - indexToGetNewId, 1);
  recipes.forEach((recipe, index) => recipe.id = index + indexToGetNewId);
  return Promise.resolve("Delete recipe success");  
};

const saveRecipeByIndex = (index: number, recipe: Recipe): Promise<string> => {
  recipes = [...recipes.slice(0, index), recipe, ...recipes.slice(index + 1)];

  return Promise.resolve("Save recipe success");
};

const getNewRecipe = (): Promise<Recipe> => {
  const newRecipe = createEmptyRecipe();
  return  Promise.resolve(newRecipe as Recipe);
}

const getRecipe = (id: number): Promise<Recipe> => {
  const recipe = recipes.find((r) => r.id === id);
  return Promise.resolve(recipe as Recipe);
}

const createEmptyRecipe = (): Recipe => ({
  id: 0,
  name: "",
  description: "",
  ingredients: [],
  type: {
    imagePath: "",
    typeCode: "",
    title: ""
  }
});

