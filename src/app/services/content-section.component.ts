import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../shared/config.service';

@Component({
  selector: 'app-content-section',
  templateUrl: './content-section.component.html',
  styleUrls: ['./content-section.component.css']
})
export class ContentSectionComponent implements OnInit {

  services = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.services = this.getServices();
  }
  getServices(){
    return this.config.getConfig().services;
  }

}
