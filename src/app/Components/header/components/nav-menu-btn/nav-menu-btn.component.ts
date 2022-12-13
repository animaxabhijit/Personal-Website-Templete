import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-nav-menu-btn',
  templateUrl: './nav-menu-btn.component.html',
  styleUrls: ['./nav-menu-btn.component.css']
})
export class NavMenuBtnComponent implements OnInit, OnChanges {
  @Input() menu: any;
  @Input() currentIndex: number | undefined;
  @Input() selectedIndex: number | undefined;
  @Output() handleClick = new EventEmitter();

  isSelected = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.isSelected = this.selectedIndex === this.currentIndex;
  }

  selectNavBtn() {
    return this.handleClick.emit(this.currentIndex);
  }

}
