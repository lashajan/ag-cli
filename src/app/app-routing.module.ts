import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { XyzComponent } from './xyz/xyz.component';

const routes: Routes = [
  {
    path:'hero',
    component:HeroComponent
  },
  {
    path:'xyz',
    component:XyzComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
