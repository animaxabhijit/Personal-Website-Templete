import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  id: any;
  selectedIndex: any;
  navMenu = [{btnName: 'Home'}, {btnName: 'About'}, {btnName: 'Contact'}];

  constructor() {
  }

  ngOnInit(): void {
  }

  public selectedBtn(_index: number, btnName: any) {
    this.selectedIndex = _index;
    if (btnName === 'Home') {
      this.id = 'landing-page';
      this.scroll(this.id)
    } else if (btnName === 'About') {
      this.id = 'about-page';
      this.scroll(this.id)
    } else if (btnName === 'Contact') {
      this.id = 'contact-us-page';
      this.scroll(this.id)
    }
  }

  scroll(id: any) {
    let el = document.getElementById(id);
    // @ts-ignore: Object is possibly 'null'.
    el.scrollIntoView({behavior: "smooth"});
  }
}
