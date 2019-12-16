import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Com1Component } from './com1/com1.component';
import { Com2Component } from './com2/com2.component';
import { Com3Component } from './com3/com3.component';
import { Com4Component } from './com4/com4.component';
import { Com5Component } from './com5/com5.component';
import { Com6Component } from './com6/com6.component';


const routes: Routes = [
{
    path:"",
    component:Com1Component,
},
{
  path:"holder",
  component:Com2Component,
  children:[
    {
      path:"dashbord",
      component:Com3Component
    },
    {
      path:"productlist",
      component:Com4Component
    },
    {
      path:"creatproduct",
      component:Com5Component
    }
    ,
    {
      path:"editproduct",
      component:Com6Component
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
