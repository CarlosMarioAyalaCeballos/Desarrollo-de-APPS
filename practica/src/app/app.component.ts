import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet,RouterLink} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';
import { ApiService } from './services/api.service';
import { Root } from './interface/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,FormsModule, AboutComponent, ProductComponent, RouterLink, CommonModule], //librerias necesarias
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica';

  // Definimos las variables que vamos a usar
  personajes: any [] = [];

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.obtenerPersonajes().subscribe((data) => {
      this.personajes.push(...data.results);
      console.log(data.results);
    });
  }
}


