import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  num1: number = 0;
  num2: number = 0;
  operation: string = 'sum';
  result: number | string = 0;
  historial: any[] = [];

  calculate() {
    let calculo = {
      num1: this.num1,
      num2: this.num2,
      operacion: this.operation,
      resultado: 0 as number | string,
      fecha: new Date()
    };

    switch(this.operation) {
      case 'sum':
        calculo.resultado = this.num1 + this.num2;
        break;
      case 'subtract':
        calculo.resultado = this.num1 - this.num2;
        break;
      case 'multiply':
        calculo.resultado = this.num1 * this.num2;
        break;
      case 'divide':
        calculo.resultado = this.num2 !== 0 
                           ? this.num1 / this.num2 
                           : 'Error: división por cero';
        break;
    }

    this.result = calculo.resultado;
    this.historial.unshift(calculo);
  }

  obtenerSimbolo(operacion: string): string {
    return {
      'sum': '+',
      'subtract': '-',
      'multiply': '×',
      'divide': '÷'
    }[operacion] || '?';
  }
}