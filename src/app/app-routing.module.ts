import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SampleDetailsComponent} from "./sample-details/sample-details.component";
import {SampleListComponent} from "./sample-list/sample-list.component";



const routes: Routes = [
  { path: '', redirectTo: 'sample', pathMatch: 'full' },
  { path: 'samples', component: SampleListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
