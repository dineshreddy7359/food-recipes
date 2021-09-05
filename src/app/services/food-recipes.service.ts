import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { APP_CONFIG, AppConfig } from 'src/app/app-config/app-config.module';

@Injectable({
  providedIn: 'root'
})
export class FoodRecipesService {

  private editRecipe = new Subject<any>();
  editRecipe$ = this.editRecipe.asObservable();
  recipeDetails: any;

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }
  
  getRecipes(): Observable<any[]> {
    // Populate recipes list from an API
    return this.http.get<any[]>(`${this.config.apiUrl}/recipes/getRecipeDetails`);
  }

  saveRecipes(recipe): Observable<any[]> {
    return this.http.post<any[]>(`${this.config.apiUrl}/recipes/saveRecipeDetails`, recipe);
  }

  updateRecipes(recipe): Observable<any[]> {
    return this.http.patch<any[]>(`${this.config.apiUrl}/recipes/updateRecipeDetails`, recipe);
  }

  deleteRecipes(): Observable<any[]> {
    return this.http.delete<any[]>(`${this.config.apiUrl}/recipes/deleteRecipeDetails`);
  }

  editRecipeDetails(recipeDetails: any) {
    this.recipeDetails = recipeDetails;
    this.editRecipe.next(this.recipeDetails);
  }

  getRecipeDetails() {
    return this.recipeDetails;
  }

  clearRecipeDetails() {
    this.recipeDetails = null;
  }

}
