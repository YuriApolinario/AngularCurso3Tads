import { Component } from '@angular/core';

@Component({
  selector: 'soma-component'
  ,templateUrl: 'soma.component.html'
  ,styleUrls: ['soma.component.css']
})
export class SomaComponent{
  val1 : number = 0;
  val2 : number = 0;
  val3 : number = 0;
  val4 : number = 0;
  val5 : number = 0;

  somar() : void{
    let total = Number(this.val1) + Number(this.val2);
    alert("resultado é: " + total);
  }
  par() : void{
    let resultado = "";
    if(Number(this.val3) % 2 == 0){
      resultado = "par";
    }else{
      resultado = "impar";
    }
    alert(resultado);
  }
  positivo() : void{
    let resultado: string = "positivo";
    if (Number(this.val4)< 0) {
      resultado = "negativo"
    }
    alert(resultado);
  }

  parPositivo():void{
    let resultado: number = Number(this.val5);
    if (resultado % 2 == 0 && resultado >=0) {
      alert("Par é Positivo!")
    }else if (resultado % 2 == 0 && resultado <=0) {
      alert("par e negativo")
    }else if (resultado %2 == 1 && resultado >0 ) {
      alert("impar e positivo");
    }else{
      alert("impar e negativo!")
    }
  }
}
