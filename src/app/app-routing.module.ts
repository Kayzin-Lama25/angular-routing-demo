import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'crisis-center', loadChildren: () => import('./crisis-center/crisis-center.module').then(mod => mod.CrisisCenterModule) },
  { path: 'heroes', loadChildren: () => import('./heroes/hero.module').then(mod => mod.HeroModule) },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
