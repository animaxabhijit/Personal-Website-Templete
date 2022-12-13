import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedIndex: any;
  navMenu = [
    {btnName: 'Home'},
    {btnName: 'About'},
    {btnName: 'Contact'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  public selectedBtn(_index: number) {
    this.selectedIndex = _index;
  }

}
