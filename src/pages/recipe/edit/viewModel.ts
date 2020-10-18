import { ValidationResult, createDefaultValidationResult } from "@lemoncode/fonk";

export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];
  type: RecipeType;
}

export interface RecipeType {
    imagePath: string;
    typeCode: string;
    title: string
}

export const createEmptyRecipe = (): Recipe => ({
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

export interface RecipeError {
  name: ValidationResult;
  description: ValidationResult;
  ingredients: ValidationResult;
}

export const createEmptyRecipeError = (): RecipeError => ({
  name: createDefaultValidationResult(),
  description: createDefaultValidationResult(),
  ingredients: createDefaultValidationResult(),
});
