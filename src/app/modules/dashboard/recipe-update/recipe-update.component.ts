import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe';
import { FoodRecipesService } from 'src/app/services/food-recipes.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.css']
})
export class RecipeUpdateComponent implements OnInit {

  recipeForm: FormGroup = new FormGroup({});
  recipeObject: Recipe = new Recipe();
  recipeId: string;
  recipeDetails: any;

  constructor(
    private router: Router,
    private activatedRoutes: ActivatedRoute,
    private loaderService: LoaderService,
    private foodRecipesService: FoodRecipesService
  ) {
    this.activatedRoutes.params.subscribe((params) => {
      if (params.id) {
        this.recipeId = params.id;
      } else {
        this.router.navigate(['/dashboard/recipes-list']);
      }
    });
  }

  ngOnInit() {
    this.recipeDetails = this.foodRecipesService.getRecipeDetails();
    this.formControls();
  }

  formControls() {
    this.recipeForm.addControl('dishName', new FormControl(this.recipeDetails.dishName, [Validators.required]));
    this.recipeForm.addControl('noOfPeopleSuitable', new FormControl(this.recipeDetails.noOfPeopleSuitable, [Validators.required]));
    this.recipeForm.addControl('isVegetarian', new FormControl(this.recipeDetails.isVegetarian, [Validators.required]));
    this.recipeForm.addControl('ingredients', new FormControl(this.recipeDetails.ingredients, [Validators.required]));
    this.recipeForm.addControl('cookingInstructions', new FormControl(this.recipeDetails.cookingInstructions, [Validators.required]));
  }

  updateFoodRecipe(recipe) {
    this.recipeObject.dishName = recipe.dishName;
    this.recipeObject.noOfPeopleSuitable = recipe.noOfPeopleSuitable;
    this.recipeObject.isVegetarian = recipe.isVegetarian;
    this.recipeObject.ingredients = recipe.ingredients;
    this.recipeObject.cookingInstructions = recipe.cookingInstructions;
    this.recipeObject.dateTime = new Date();
    this.recipeObject._id = this.recipeDetails._id;
    this.loaderService.startLoader();
    this.foodRecipesService.updateRecipes(this.recipeObject).subscribe((data) => {
      this.loaderService.stop();
      this.router.navigate(['/dashboard/recipes-list']);
    }, (error) => {
      this.loaderService.stop();
    });
  }

}
