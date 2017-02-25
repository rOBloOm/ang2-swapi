import { SWShipDetailComponent } from './../components/swships/detail/swshipdetail';
import { ErrComponent } from './../components/root/err/err';
import { SWShipsComponent } from './../components/swships/swships';
import { SWPersonDetailComponent } from './../components/swpersons/detail/swpersondetail';
import { SwpersonsComponent } from './../components/swpersons/swpersons';
import { HomeComponent } from './../components/home/home';
import { Component } from '@angular/core';

export const ROUTES =
[
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'   
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cast',
        component: SwpersonsComponent
    },
    {
        path: 'cast/:id',
        component: SWPersonDetailComponent
    },
    {
        path: 'ships',
        component: SWShipsComponent
    },
    {
        path: 'ships/:id',
        component: SWShipDetailComponent
    },
    {
        path: '**',
        component: ErrComponent  
    }
];