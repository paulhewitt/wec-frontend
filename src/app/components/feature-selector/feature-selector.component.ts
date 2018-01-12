import { Component, OnInit , NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Selector } from '../../models/component-selector';

@Component({
  selector: 'app-root',
  templateUrl: './feature-selector.component.html',
  styleUrls: ['./feature-selector.component.css']
})
export class FeatureSelectorComponent implements OnInit {

  featureSelector: Selector;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  

}
