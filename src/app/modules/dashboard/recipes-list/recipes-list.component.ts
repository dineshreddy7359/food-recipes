import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Recipe } from 'src/app/models/recipe';
import { FoodRecipesService } from 'src/app/services/food-recipes.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { PAGESIZEOPTIONS } from 'src/app/app-config/app.constants';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  foodItemsRecipesList: any;
  displayRecipesList = ['dishName', 'dateTime', 'isVegetarian', 'noOfPeopleSuitable', 'ingredients', 'cookingInstructions', 'update', 'delete'];
  @ViewChild('recipesPagination',{static: false}) recipesPagination: MatPaginator;
  pageSizeOptions = PAGESIZEOPTIONS;

  constructor(
    private router: Router,
    private loaderService: LoaderService,
    private foodRecipesService: FoodRecipesService
  ) {}

  ngOnInit() {
    this.getFoodRecipesList();
  }

  getFoodRecipesList() {
    this.loaderService.startLoader();
    this.foodRecipesService.getRecipes().subscribe((recipes: Recipe[]) => {
      this.foodItemsRecipesList = new MatTableDataSource(recipes);
      this.foodItemsRecipesList.paginator = this.recipesPagination;
      this.loaderService.stop();
    }, (error) => {
      this.loaderService.stop();
    });
  }

  updateFoodRecipe(recipe) {
    this.foodRecipesService.editRecipeDetails(recipe);
    this.router.navigate(['/dashboard/recipe-update' + '/' + recipe._id]);
  }

  deleteFoodRecipe() {
    this.loaderService.startLoader();
    this.foodRecipesService.deleteRecipes().subscribe((data) => {
      this.foodItemsRecipesList = new MatTableDataSource(data);
      this.foodItemsRecipesList.paginator = this.recipesPagination;
      this.loaderService.stop();
    }, (error) => {
      this.loaderService.stop();
    });
  }

}
