import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { XyzComponent } from './xyz/xyz.component';
import { AddComponent } from './material/create/add/add.component';

const routes: Routes = [
  {
    path:'hero',
    component:HeroComponent
  },
  {
    path:'xyz',
    component:XyzComponent
  },
  {
    path:'hero/add',
    component:AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
