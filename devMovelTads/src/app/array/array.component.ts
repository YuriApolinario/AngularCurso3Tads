import { Component } from '@angular/core';
import { Estado } from '../entidades/estado';
import { ServicoEstado } from '../servicos/servico.estado';

@Component({
  selector: 'array-component'
  ,templateUrl:'array.component.html'
  ,styleUrls:['array.component.css']
})

export class ArrayComponent{
    //nomes = new Array<string>();
    //nome: string = "";

    // listaEstados = new Array<Estado>();
    //
    // estado: Estado = new Estado();

    private servico: ServicoEstado;



  constructor(servico: ServicoEstado){
    this.servico = servico;
  }
  
  adicionar() : void{
    this.servico.adicionar();
        // this.listaEstados.push(this.estado);
        // this.estado = new Estado();


  }

  excluir(i:number) : void{
    this.servico.excluir(i);
    // this.listaEstados.splice(i,1);
    }

  alterar(i:number): void{
    this.servico.alterar(i);
  //   this.estado = this.listaEstados[i];
  //   this.listaEstados.splice(i,1);
   }
}
