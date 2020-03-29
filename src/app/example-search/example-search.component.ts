import { Component, OnInit } from '@angular/core';
import { SearchService } from './service/search.service';
@Component({
  selector: 'app-example-search',
  templateUrl: './example-search.component.html',
  styleUrls: ['./example-search.component.scss'],
  providers: [SearchService]
})
export class ExampleSearchComponent implements OnInit {
  public srchKeyword: any;
  public srchResults: any;
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}
  setSearchString(e) {
    this.srchKeyword = e.target.value;
  }
  callSearch() {
    this.searchService.getResultsByKeyWord(this.srchKeyword).subscribe(res => {
      this.srchResults = res;
    });
  }
}
