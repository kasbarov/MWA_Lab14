import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataDrivenComponent } from './data-driven/data-driven.component';
import { ThankyouComponent } from './data-driven/thankyou.component';

const routes: Routes = [
  { path: '', component: DataDrivenComponent},
  { path: 'thankyou', component: ThankyouComponent},
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//    exports: [RouterModule]
// })
//export class AppModuleRoutingModule { }
export const myRoutes = RouterModule.forRoot(routes);

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}