import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {
  //Objeto de Formulário
  formulario666 = new FormGroup({
    nome   : new FormControl('', [Validators.required, Validators.minLength(3)]),
    idade  : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade : new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  //Visibilidade dos botões
  btnCadastrar:boolean = true;

  //Vetor(array) referenciando o nosso modelo (Objetos do tipo Pessoa)
  //Inicializamos ele como um array vazio
  vetor:Pessoa[] = [];

  //Variável para armazenar o índice da pessoa selecionada. Usado depois no "selecionar()"
  indice:number = -1; //a partir do 0, já tem gente, por isso que fica -1, pq n tem ninguem

  // !Função de cadastro FULL
  cadastrar(){

    //* Cadastro no vetor
    this.vetor.push(this.formulario666.value as Pessoa);

    //* Limpeza dos inputs
    this.formulario666.reset();

    //* Visualização via console 
    // TODO (TEST ONLY)
    console.table(this.vetor);

  }

// !Função de Selecionar FULL
//vai ter que ter um parametro obrigatório, que é o indice do vetor
  selecionar(indice:number){

    //Atribuir o índice da pessoa
    this.indice = indice;

    //Atribuir os dados da pessoa no formulário
    this.formulario666.setValue({
      nome : this.vetor[indice].nome,
      idade : this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade
    });

  // Visibilidade dos botões
  this.btnCadastrar = false;

  }

  //! Função de alteração
  alterar(){
    //alterar os dados da pessoa no vetor
    this.vetor[this.indice] = this.formulario666.value as Pessoa;

    //limpar os inputs
    this.formulario666.reset();

    //Visibilidade dos botões
    this.btnCadastrar = true;
  }

//! Função de remoção
  remover(){
    //Removendo pessoa do vetor
    this.vetor.splice(this.indice, 1); //a partir desse índice, o que eu quero remover? 1 pessoa

    //Limpeza dos inputs
    this.formulario666.reset();

    //Visibilidade dos botões
    this.btnCadastrar = true;
  }

//! Função de cancelar
  cancelar(){

    //Limpeza dos inputs
    this.formulario666.reset();

    //Visibilidade dos botões
    this.btnCadastrar = true;
    
  }


}
// Se quiser fazer mais de uma verificação, tem que colocar em [], representando um vetor