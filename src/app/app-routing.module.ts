import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from 'src/app/register/register.component';
import { LoginComponent } from 'src/app/login/login.component';
import { FullComponent } from 'src/app/layouts/full/full.component';

const routes: Routes = [
  {
    path: '', 
    component: FullComponent,
    children: [{
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      loadChildren: () => import('./modules/dashboard/dashboard.module').then(mod => mod.DashboardModule)
    }]
  },
  { path: 'register', 
    component: RegisterComponent 
  },
  { path: 'login', 
    component: LoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
