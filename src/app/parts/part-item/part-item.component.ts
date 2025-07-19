import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Part } from '../part.model';

@Component({
  selector: 'app-part-item',
  standalone: false,
  templateUrl: './part-item.component.html',
  styleUrl: './part-item.component.css'
})
export class PartItemComponent {
  @Input() part: Part;
  @Output() partSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.partSelected.emit();
  }

}