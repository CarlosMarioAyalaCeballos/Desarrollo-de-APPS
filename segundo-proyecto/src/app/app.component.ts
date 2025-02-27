import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Propiedades para enlazar con el formulario
  name: string = '';
  value: number = 0; // Inicializado como 0 en lugar de null
  cant: number = 0;  // Inicializado como 0 en lugar de null

  // Lista de artículos
  items: { name: string, value: number, cant: number, subtotal: number }[] = [];

  // Total de la compra
  total: number = 0;

  // Método para manejar el envío del formulario
  onSubmit() {
    // Calcular el subtotal del artículo
    const subtotal = this.value * this.cant;

    // Agregar el artículo a la lista
    this.items.push({
      name: this.name,
      value: this.value,
      cant: this.cant,
      subtotal: subtotal
    });

    // Actualizar el total
    this.updateTotal();

    // Limpiar el formulario
    this.resetForm();
  }

  // Método para eliminar un artículo
  removeItem(index: number) {
    // Eliminar el artículo de la lista
    this.items.splice(index, 1);

    // Actualizar el total
    this.updateTotal();
  }

  // Método para actualizar el total
  updateTotal() {
    this.total = this.items.reduce((acc, item) => acc + item.subtotal, 0);
  }

  // Método para limpiar el formulario
  resetForm() {
    this.name = '';
    this.value = 0;
    this.cant = 0;
  }
}