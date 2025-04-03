import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'trabajadores', component: TrabajadoresComponent },
    { path: '', redirectTo: 'trabajadores', pathMatch: 'full' }
];
