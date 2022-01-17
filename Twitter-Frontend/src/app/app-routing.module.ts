import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ConteinerComponent } from './Components/conteiner/conteiner.component';
import { LoginComponent } from './Components/login/login.component';


export const routes: Routes = [


  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'inicio',
  canActivate:[AuthGuard],
  component:ConteinerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
