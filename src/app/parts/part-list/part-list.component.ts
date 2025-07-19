import { Component, OnInit, OnDestroy } from '@angular/core';
import { Part } from '../part.model';
import { PartService } from '../part.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-part-list',
  standalone: false,
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css']
})
export class PartListComponent implements OnInit, OnDestroy{
  parts: Part[] = []
  private subscription: Subscription;
    constructor(private partService: PartService) { }


ngOnInit() {
  this.parts = this.partService.getParts();
  this.subscription = this.partService.partListChangedEvent
    .subscribe((parts: Part[]) => {
      this.parts = parts;
    });
}

//onPartSelected(part: Part) {
 // this.partService.partSelectedEvent.emit(part);
//}

 ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
