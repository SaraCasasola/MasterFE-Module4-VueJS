export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: string[];  
  type: {
    imagePath: string;
    typeCode: string;
  };
}