import { Response } from '@angular/http';
import { SwserviceService } from './../../../services/swservice.service';
import { ActivatedRoute } from '@angular/router';
import { SWShip } from './../../../models/swship';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-swshipdetail',
    templateUrl: 'swshipdetail.html',
})
export class SWShipDetailComponent implements OnInit { 

    private _id: number;
    public ship: SWShip;
    constructor(private _activatedRoute: ActivatedRoute,
                private _swserviceService: SwserviceService) {
        
    }
    ngOnInit()
    {
        this._activatedRoute.params
        .flatMap(params => {
            this._id = +params[`id`];
            return this._swserviceService.ship(this._id);
        })
        .subscribe(ship => this.ship = ship);
    }
}