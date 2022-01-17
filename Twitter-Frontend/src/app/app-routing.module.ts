import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConteinerComponent } from './Components/conteiner/conteiner.component';


const routes: Routes = [



  {path:'inicio',
  component:ConteinerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
