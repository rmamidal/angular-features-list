import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ExampleSearchRoutingModule } from './example-search-routing.module';
import { ExampleSearchComponent } from './example-search.component';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [ExampleSearchComponent],
  imports: [
    CommonModule,
    ExampleSearchRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ExampleSearchModule { }
