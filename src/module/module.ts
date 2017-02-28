import { SWShipDetailComponent } from './../components/swships/detail/swshipdetail';
import { SwserviceService } from './../services/swservice.service';
import { SWShipsComponent } from './../components/swships/swships';
import { HomeComponent } from './../components/home/home';
import { NavigationComponent } from './../components/navigation/navigation';
import { SWPersonDetailComponent } from './../components/swpersons/detail/swpersondetail';
import { SwpersonsComponent } from './../components/swpersons/swpersons';
import { RootComponent } from './../components/root/root';
import { ErrComponent } from '../components/root/err/err';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { ROUTES } from './routes';

@NgModule({
  declarations: [
    //Root
    RootComponent,
    ErrComponent,
    //Navigation
    HomeComponent,
    NavigationComponent,
    //Cast
    SwpersonsComponent,
    SWPersonDetailComponent,
    //Ships
    SWShipsComponent,
    SWShipDetailComponent,
  ],
  imports: [
    //Angular
    BrowserModule,
    FormsModule,
    HttpModule,
    //Routes
    RouterModule.forRoot(ROUTES, {useHash: true}),
    //Material
    MaterialModule
  ],
  providers: [SwserviceService],
  bootstrap: [RootComponent]
})
export class AppModule { }
