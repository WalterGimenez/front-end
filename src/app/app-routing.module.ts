import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PaginaErroneaComponent } from './components/pagina-erronea/pagina-erronea.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path:'**', component: PaginaErroneaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
