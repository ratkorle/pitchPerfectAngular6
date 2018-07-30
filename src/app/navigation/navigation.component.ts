import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLinkActive } from '@angular/router';
import {AuthenticateService} from '../shared/authenticate.service';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  activetab: string;
  isloggedIn: boolean;

  constructor(private location: Location, private auth: AuthenticateService) { }

  ngOnInit() {
    this.activetab = this.location.path();
    console.log(`from ${this.activetab}`);
  }

  getActiveTab(tabname: string) {
    this.activetab = tabname;
    console.log(tabname);
  }

  logout() {
    this.auth.logout();
  }

}
