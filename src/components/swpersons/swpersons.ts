import { SwapiPage } from './../../../e2e/app.po';
import { Router, ActivatedRoute } from '@angular/router';
import { SWPerson } from './../../models/swperson';
import { SwserviceService } from './../../services/swservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swpersons',
  templateUrl: './swpersons.html',
})
export class SwpersonsComponent implements OnInit {

  public swPersonList: Array<SWPerson>;

  private nextUrl: string;
  private previousUrl: string;

  private pageId: number;

  constructor(private _starwarsService: SwserviceService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this._activatedRoute.queryParams
      .subscribe(params => {
       this.pageId = +params['page']
       console.log(this.pageId);

      this._starwarsService.listCast(this.pageId)
        .subscribe(result => 
        {
          this.nextUrl = result.next;
          this.previousUrl = result.previous;
          this.swPersonList = result.results;
        });       
    });
  }

  //Previous

  navigateToPrevious () {
    if(this.hasPrevious) 
    {
      this._router.navigate(['/cast'], {queryParams: {page : this.previousNr }});
    }
  }

  get previousNr():number {
    return +this.previousUrl.charAt(this.previousUrl.length -1);
  }

  get hasPrevious(): boolean {
    return this.previousUrl != null;
  }

  //Next

  navigateToNext () {
    if(this.hasNext)
      this._router.navigate(['/cast'], {queryParams: {page : this.nextNr }});
  }

  get nextNr():number {
    return +this.nextUrl.charAt(this.nextUrl.length -1);
  }

  get hasNext(): boolean {
    return this.nextUrl != null;
  }

  //GridClick
  onGridClick(person: SWPerson)
  {
        let parts:string[] = person.url.split('/');
        parts.pop();
        let index:number = +parts.pop();
        this._router.navigate(['/cast', index]);       
  }
}
