import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponent implements OnInit {

  constructor(private route : ActivatedRoute, private router: Router) {

   }

  ngOnInit() {
    
  }

}
