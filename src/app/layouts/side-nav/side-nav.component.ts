import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  @Input() isExpanded: boolean;

  showSubMenu: boolean = false;
  showSubSubMenu: boolean = false;
  showSubMenu1: boolean = false;
  showSubSubMenu1: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
