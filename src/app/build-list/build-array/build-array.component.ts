import { Component, OnInit, OnDestroy } from '@angular/core';
import { Build } from '../build.model';
import { BuildService } from '../build.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-build-array',
  standalone: false,
  templateUrl: './build-array.component.html',
  styleUrl: './build-array.component.css'
})
export class BuildArrayComponent implements OnInit, OnDestroy{
  builds: Build[] = []
  private subscription: Subscription;
    constructor(private buildService: BuildService) { }

  ngOnInit(): void {
    this.builds = this.buildService.getBuilds();
    this.subscription = this.buildService.buildListChangedEvent
    .subscribe((builds: Build[]) => {
        this.builds = builds;
      }
    )
  }

  //onSelectedBuild(build: Build) {
    //this.buildService.buildSelectedEvent.emit(build);
  //}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
