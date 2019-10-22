import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  /* { path: 'heroes', loadChildren: () => import('./heroes/hero.module').then(mod => mod.HeroModule) },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
