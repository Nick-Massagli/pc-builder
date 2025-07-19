import { Component, OnInit } from '@angular/core';
import { Build } from '../build.model';
import { BuildService } from '../build.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-build-detail',
  standalone: false,
  templateUrl: './build-detail.component.html',
  styleUrl: './build-detail.component.css'
})
export class BuildDetailComponent implements OnInit{
  build: Build;

  constructor(private buildService: BuildService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.build = this.buildService.getBuild(params['id']);
      }
    )
  }


  onDelete() {
    this.buildService.deleteBuild(this.build);
    this.router.navigateByUrl('/build');
  }
}
