import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.html',
  styleUrls: ['navigation.css']
})
export class NavigationComponent 
{
  public isCollapsed: boolean = true;
}