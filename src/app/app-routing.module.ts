import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { AliadosComponent } from './components/aliados/aliados.component';


const routes: Routes = [
{path: '', component: NosotrosComponent},
{path: 'ofertas', component: OfertasComponent},
{path: 'aliados', component: AliadosComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}