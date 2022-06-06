import { NgModule } from '@angular/core';

import { HeroisComponent } from './Herois/Herois.component';
import { Routes, RouterModule } from '@angular/router';
import { ViloesComponent } from './Viloes/Viloes.component';

const routes: Routes = [
  { path: 'herois', component: HeroisComponent, data: { title: 'Heróis' } },
  { path: 'viloes', component: ViloesComponent, data: { title: 'Vilões' } },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
