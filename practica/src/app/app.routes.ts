import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; //importar componente para convertirlo en una pagina
import { AboutComponent } from './pages/about/about.component';
import path from 'path';
import { ProductComponent } from './pages/product/product.component';
export const routes: Routes = [ //arreglo
    {path:'home', component: HomeComponent},//ruta de la pagina home
    {path:'about', component: AboutComponent},
    {path:'product', component: ProductComponent},
    {path: '**', redirectTo: '/home'}
];
