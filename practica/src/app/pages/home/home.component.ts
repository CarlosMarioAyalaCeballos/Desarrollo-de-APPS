import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//import { NgModule } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], //librerias necesarias
  templateUrl: './home.component.html', //estructura html
  styleUrl: './home.component.css' 
})
export class HomeComponent {
  enviar() {
    console.log('enviar');
  }

}
