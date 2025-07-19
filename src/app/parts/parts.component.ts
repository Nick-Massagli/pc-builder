import { Component, OnInit } from '@angular/core';
import { Part } from './part.model';
import { PartService } from './part.service';

@Component({
  selector: 'app-parts',
  standalone: false,
  templateUrl: './parts.component.html',
  styleUrl: './parts.component.css'
})
export class PartsComponent implements OnInit{
selectedPart: Part;

constructor(private partService: PartService) {}

ngOnInit(): void {
  this.partService.partChangedEvent.subscribe((part: Part) => {
      this.selectedPart = part;
    }
  );
}
}
