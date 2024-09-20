import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [
    ReactiveFormsModule
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

}
// Se quiser fazer mais de uma verificação, tem que colocar em [], representando um vetor