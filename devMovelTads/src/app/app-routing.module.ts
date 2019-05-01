import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ApolinarioComponent } from './apolinario/apolinario.component';
import { Erro404Component } from './erros/erro.component';
import { SomaComponent } from './somar/soma.component';

import { ArrayComponent } from './array/array.component';

const routes: Routes = [
  {path:'',component: HomeComponent}
  ,{path: 'sobre', component: SobreComponent}
  ,{path: 'curriculo', component: ApolinarioComponent}
  ,{path: 'somar', component: SomaComponent}
  ,{path: 'array', component: ArrayComponent}




  ,{path: '**', component: Erro404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
