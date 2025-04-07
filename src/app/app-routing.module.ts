import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
// {  path:'homepage', component:HomepageComponent},
// {  path:'**', component:HomepageComponent}
{  path:'**', component:ParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
