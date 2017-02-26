import { Router, ActivatedRoute } from '@angular/router';
import { SWShip } from './../../models/swship';
import { SwserviceService } from './../../services/swservice.service';
import { OnInit, Component } from '@angular/core';


@Component({
    selector: 'app-swships',
    templateUrl: 'swships.html'
})
export class SWShipsComponent implements OnInit
{
    private shipsList: Array<SWShip>;

    private nextUrl: string;
    private previousUrl: string;

    private pageId: number;    

    constructor(private _starwarsService: SwserviceService,
                private _router: Router,
                private _activatedRoute: ActivatedRoute)
    {

    }

    public ngOnInit(): void
    {
        this._activatedRoute.queryParams
        .subscribe(params => {

            this.pageId = +params['page'];

            this._starwarsService.listShips(this.pageId)
            .subscribe(result => 
            {
                this.nextUrl = result.next;
                this.previousUrl = result.previous;
                this.shipsList = result.results;
            })

        })
    }

  //Previous

  navigateToPrevious () {
    if(this.hasPrevious) 
    {
      this._router.navigate(['/ships'], {queryParams: {page : this.previousNr }});
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
      this._router.navigate(['/ships'], {queryParams: {page : this.nextNr }});
  }

  get nextNr():number {
    return +this.nextUrl.charAt(this.nextUrl.length -1);
  }

  get hasNext(): boolean {
    return this.nextUrl != null;
  }

    //GridClick
    onGridClick(ship: SWShip)
    {
        let parts:string[] = ship.url.split('/');
        parts.pop();
        let index:number = +parts.pop();
        this._router.navigate(['/ships', index]);   
    }
}