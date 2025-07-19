import { Component, OnInit } from '@angular/core';
import { Part } from '../part.model';
import { PartService } from '../part.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-part-detail',
  standalone: false,
  templateUrl: './part-detail.component.html',
  styleUrl: './part-detail.component.css'
})
export class PartDetailComponent implements OnInit {

  part: Part;
    constructor(private partService: PartService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.part = this.partService.getPart(params['id'])
      }
    )
  }
  onDelete() {
    this.partService.deletePart(this.part);
    this.router.navigateByUrl('/part');
  }
}
