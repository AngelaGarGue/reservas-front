import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';

export const routes: Routes = [
    { path: 'trabajadores', component: TrabajadoresComponent },
    { path: '', redirectTo: 'trabajadores', pathMatch: 'full' }
];
