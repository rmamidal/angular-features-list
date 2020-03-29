import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// tslint:disable-next-line:max-line-length
const routes: Routes = [
  { path: '', loadChildren: () => import('./default/default.module').then(m => m.DefaultModule)},
  { path: 'default', loadChildren: () => import('./default/default.module').then(m => m.DefaultModule)},
  { path: 'example-search', loadChildren: () => import('./example-search/example-search.module').then(m => m.ExampleSearchModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
