import { Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard/dashboard.component';
import { RecipesListComponent } from 'src/app/modules/dashboard/recipes-list/recipes-list.component';
import { RecipeAddComponent } from 'src/app/modules/dashboard/recipe-add/recipe-add.component';
import { RecipeUpdateComponent } from 'src/app/modules/dashboard/recipe-update/recipe-update.component';

export const DashboardRoutes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'recipes-list',
        component: RecipesListComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'recipe-add',
        component: RecipeAddComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'recipe-update/:id',
        component: RecipeUpdateComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: '**',
        redirectTo: 'recipes-list'
      }
    ]
  }
];
