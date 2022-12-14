import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { CrearCategoriasComponent } from './categorias/crear-categorias/crear-categorias.component';
import { FichaClinicaComponent } from './ficha-clinica/ficha-clinica.component';
import { HorariosExcepcionComponent } from './horarios-excepcion/horarios-excepcion.component';
import { CrearHorarioComponent } from './horarios/crear-horario/crear-horario.component';
import { HorariosComponent } from './horarios/horarios.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CrearPacienteComponent } from './pacientes/crear-paciente/crear-paciente.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { CrearSubcategoriaComponent } from './subcategorias/crear-subcategoria/crear-subcategoria.component';
import { SubcategoriasComponent } from './subcategorias/subcategorias.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'categorias',
    component: CategoriasComponent,
  },
  {
    path: 'crear-categorias',
    component: CrearCategoriasComponent,
  },
  {
    path: 'subcategorias',
    component: SubcategoriasComponent
  },
  {
    path: 'crear-subcategoria',
    component: CrearSubcategoriaComponent
  },
  {
    path: 'pacientes',
    component: PacientesComponent
  },
  {
    path: 'crear-paciente',
    component: CrearPacienteComponent
  },
  {
    path: 'reservas',
    component: ReservasComponent
  },
  {
    path: 'horarios',
    component: HorariosComponent
  },
  {
    path: 'crear-horario',
    component: CrearHorarioComponent
  },
  {
    path: 'horarios-excepcion',
    component: HorariosExcepcionComponent
  },
  {
    path: 'fichas-clinicas',
    component: FichaClinicaComponent
  },
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }