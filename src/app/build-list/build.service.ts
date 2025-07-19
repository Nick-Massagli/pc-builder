import { Injectable } from '@angular/core';
import { Build } from './build.model';
import { MOCKBUILDS } from './MOCKBUILDS';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BuildService {
  builds: Build[] = [];
  buildListChangedEvent = new Subject<Build[]>();
  maxBuildId: number;

  constructor() {
    this.builds = MOCKBUILDS;
    this.maxBuildId = this.getMaxId();
  }

  getBuilds() {
    return this.builds.slice();
  }

  getBuild(id: string): Build {
    for (const build of this.builds) {
      if (build.id === id) {
        return build;
      }
    }
    return null;
  }

  getMaxId(): number {
    let maxId = 0;
    for (const build of this.builds) {
      const currentId = +build.id;
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addBuild(newBuild: Build) {
    if (newBuild === null || newBuild === undefined) {
      return;
    }

    this.maxBuildId++;
    newBuild.id = this.maxBuildId.toString();
    this.builds.push(newBuild);
    const buildListClone = this.builds.slice();
    this.buildListChangedEvent.next(buildListClone);
  }

  updateBuild(originalBuild: Build, newBuild: Build) {
    if (originalBuild === null || originalBuild === undefined || newBuild === null || newBuild === undefined) {
      return;
    }

    const pos = this.builds.indexOf(originalBuild);
    if (pos < 0) {
      return;
    }

    newBuild.id = originalBuild.id;
    this.builds[pos] = newBuild;
    const buildListClone = this.builds.slice();
    this.buildListChangedEvent.next(buildListClone);
  }

  deleteBuild(build: Build) {
    if (build === null || build === undefined) {
      return;
    }
    const pos = this.builds.indexOf(build);

    if (pos < 0) {
      return;
    }
    this.builds.splice(pos, 1);
    this.buildListChangedEvent.next(this.builds.slice());
  }

}