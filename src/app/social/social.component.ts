import { Component, OnInit } from '@angular/core';
import { ConfigService} from '../shared/config.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  socialSites = {};
  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.socialSites = this.getSocialSites();
  }

  getSocialSites() {
    return this.config.getConfig().socialSites;
  }
}
