import { SWPerson } from './../../models/swperson';
import { SwserviceService } from './../../services/swservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swpersons',
  templateUrl: './swpersons.html',
})
export class SwpersonsComponent implements OnInit {

  public swPersonList: Array<SWPerson>;

  constructor(private _starwarsService: SwserviceService) { }

  ngOnInit() {
    this._starwarsService.listCast()
      .subscribe(list => this.swPersonList = list);
  }

}
