import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela-dados',
  templateUrl: './tabela-dados.component.html',
  styleUrls: ['./tabela-dados.component.css']
})
export class TabelaDadosComponent {
  dados = [
    { nome: "João", nota1: null, nota2: null, media: null, status: null },
    { nome: "Maria", nota1: null, nota2: null, media: null, status: null },
    { nome: "Pedro", nota1: null, nota2: null, media: null, status: null }
  ];

  calcularMedia(dado: any) {
    const nota1 = parseFloat(dado.nota1);
    const nota2 = parseFloat(dado.nota2);
    dado.media = (nota1 + nota2) / 2;
    
    if (dado.media >= 7) {
      dado.status = "Aprovado";
    } else if (dado.media >= 5) {
      dado.status = "Recuperação";
    } else {
      dado.status = "Reprovado";
    }
  }
}
