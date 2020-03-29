import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExampleSearchComponent } from './example-search.component';

const routes: Routes = [{ path: '', component: ExampleSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleSearchRoutingModule { }
