import { Router } from '@angular/router';
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

    constructor(private _starwarsService: SwserviceService,
                private _router: Router)
    {

    }

    public ngOnInit(): void
    {
        this._starwarsService.listShips().subscribe(
            list => this.shipsList = list);
    }

    onGridClick(ship: SWShip)
    {
        let parts:string[] = ship.url.split('/');
        parts.pop();
        let index:number = +parts.pop();
        this._router.navigate(['/ships', index]);   
    }
}