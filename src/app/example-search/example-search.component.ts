import { Component, OnInit } from '@angular/core';
import { SearchService } from './service/search.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-example-search',
  templateUrl: './example-search.component.html',
  styleUrls: ['./example-search.component.scss'],
  providers: [SearchService]
})
export class ExampleSearchComponent implements OnInit {
  public srchKeyword: string;
  public srchResults: any;
  constructor(
    private searchService: SearchService,
    private router: ActivatedRoute
  ) {
    this.srchKeyword = this.router.snapshot.params.keyword;
    if (!this.srchKeyword) {
      this.router.queryParams.subscribe(params => {
        this.srchKeyword = params.keyword;
      });
    }
    if (this.srchKeyword) {
      this.callSearch();
    }
  }

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
