import { Injectable } from '@angular/core';
import { Category } from "../_models/categories.model";
import { Skills } from "./skill.service";

const Categories: Category[] = [
  {id: 1, name: 'physique', skills: [Skills[0],Skills[1],Skills[2]]},
  {id: 2, name: 'mental', skills: [Skills[3],Skills[4],Skills[5]]},
  {id: 3, name: 'social', skills: [Skills[6],Skills[7],Skills[8]]}
]

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
      constructor() {
  
      }
  
      getAllCategories() {
          return Categories;
      }
  
      getCategoryById(id: number) {
          return Categories.filter(category => id === category.id);
      }
  
      getSkillByCategoryName(categoryName: string) {
          return Categories.filter(category => category.name === categoryName);
      }
}
