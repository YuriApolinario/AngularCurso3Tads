import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { ApolinarioComponent } from './apolinario/apolinario.component';
import { HomeComponent } from "./home/home.component";
import { RodapeComponent } from "./rodape/rodape.component";
import { SobreComponent } from './sobre/sobre.component';
import { Erro404Component } from './erros/erro.component';
import { SomaComponent } from './somar/soma.component';
import { ArrayComponent } from './array/array.component';
import { ServicoEstado } from './servicos/servico.estado';

@NgModule({
  declarations: [
    AppComponent, ApolinarioComponent,
    HomeComponent, RodapeComponent,
    SobreComponent, Erro404Component,
    SomaComponent, ArrayComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServicoEstado],//aqui defino o provedor de serviço
  bootstrap: [AppComponent]
})
export class AppModule { }
