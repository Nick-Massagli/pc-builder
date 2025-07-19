import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Build } from '../build.model';

@Component({
  selector: 'app-build-item',
  standalone: false,
  templateUrl: './build-item.component.html',
  styleUrl: './build-item.component.css'
})
export class BuildItemComponent implements OnInit{
  @Input() build: Build;
   @Output() buildSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.buildSelected.emit();
  }

}
