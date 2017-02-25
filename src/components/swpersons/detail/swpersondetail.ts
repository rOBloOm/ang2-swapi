import { ActivatedRoute } from '@angular/router';
import { SWPerson } from './../../../models/swperson';
import { SwserviceService } from './../../../services/swservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-swpersondetail',
    templateUrl: 'swpersondetail.html',
})
export class SWPersonDetailComponent implements OnInit {

    private _id: number;
    public person: SWPerson;
    constructor(private _swserviceService: SwserviceService,
                private _activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        this._activatedRoute.params
        .flatMap(params => {
            this._id = +params['id'];
            return this._swserviceService.cast(this._id);
        }).subscribe(person => this.person = person);
    }
}

