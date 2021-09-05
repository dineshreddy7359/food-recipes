import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { DashboardRoutes } from 'src/app/modules/dashboard/dashboard-routing';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard/dashboard.component';
import { RecipesListComponent } from 'src/app/modules/dashboard/recipes-list/recipes-list.component';
import { RecipeAddComponent } from 'src/app/modules/dashboard/recipe-add/recipe-add.component';
import { RecipeUpdateComponent } from 'src/app/modules/dashboard/recipe-update/recipe-update.component';

@NgModule({
  declarations: [
    DashboardComponent,
    RecipesListComponent,
    RecipeAddComponent,
    RecipeUpdateComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LoaderModule,
    RouterModule.forChild(DashboardRoutes)
  ],
  providers: []
})
export class DashboardModule { }
