import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Componente11Component } from './componente11/componente11.component';
import { LoadingComponent } from "./loading/loading.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Componente11Component,
    CommonModule,
    LoadingComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud-angular';

  //Para o carregamento
  isLoading: boolean = false;

  loadData(){
    this.isLoading = true;

    //Simular um tempo de carregamento com um timeout
    setTimeout(()=>{
      this.isLoading = false;
    }, 3000)
  }
}
