import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BComponent } from './b/b.component';
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
const routes:  Routes = [
  {path:'',component: AComponent},
  {path:'b/:c',component: BComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 

 }
