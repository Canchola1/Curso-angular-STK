import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HomeComponent } from './componentes/home/home.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { IniciasesionComponent } from './componentes/iniciasesion/iniciasesion.component';
import { LoginComponent } from './componentes/login/login.component';

import { AuthGuard } from './services/auth-guard.service';
import { TiendaComponent } from './componentes/tienda/tienda.component';

const appRoutes: Routes = [
  // cuando la ruta este vacia
  { path: '', component: HomeComponent },
  // cuando se popne el nombre del componente en la ruta
  { path: 'contacto', component: ContactoComponent },
  { path: 'noticias', component: NoticiasComponent, canActivate: [AuthGuard] },
  { path: 'registro', component: RegistroComponent },
  { path: 'inicia-sesion', component: IniciasesionComponent },
  { path: "login", component: LoginComponent },
  { path: "tienda", component: TiendaComponent, canActivate: [AuthGuard]  },
  // cuando no exita a ruta
  { path: '**', component: HomeComponent }
];


export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
