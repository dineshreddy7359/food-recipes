import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { FoodRecipesService } from 'src/app/services/food-recipes.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent implements OnInit {

  recipeForm: FormGroup = new FormGroup({});
  recipeObject: Recipe = new Recipe();

  constructor(
    private router: Router,
    private loaderService: LoaderService,
    private foodRecipesService: FoodRecipesService
  ) {}

  ngOnInit() {
    this.formControls();
  }

  formControls() {
    this.recipeForm.addControl('dishName', new FormControl('', [Validators.required]));
    this.recipeForm.addControl('noOfPeopleSuitable', new FormControl('', [Validators.required]));
    this.recipeForm.addControl('isVegetarian', new FormControl(false, [Validators.required]));
    this.recipeForm.addControl('ingredients', new FormControl('', [Validators.required]));
    this.recipeForm.addControl('cookingInstructions', new FormControl('', [Validators.required]));
  }

  saveFoodRecipe(recipe) {
    this.recipeObject.dishName = recipe.dishName;
    this.recipeObject.noOfPeopleSuitable = recipe.noOfPeopleSuitable;
    this.recipeObject.isVegetarian = recipe.isVegetarian;
    this.recipeObject.ingredients = recipe.ingredients;
    this.recipeObject.cookingInstructions = recipe.cookingInstructions;
    this.recipeObject.dateTime = new Date();
    this.loaderService.startLoader();
    this.foodRecipesService.saveRecipes(this.recipeObject).subscribe((data) => {
      this.loaderService.stop();
      this.router.navigate(['/dashboard/recipes-list']);
    }, (error) => {
      this.loaderService.stop();
    });
  }

}
