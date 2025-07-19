import { Component, OnInit } from '@angular/core';
import { Build } from './build.model';
import { BuildService } from './build.service';

@Component({
  selector: 'app-build-list',
  standalone: false,
  templateUrl: './build-list.component.html',
  styleUrl: './build-list.component.css'
})
export class BuildListComponent implements OnInit{
  selectedBuild: Build;

   constructor() { }

  ngOnInit(): void {
  }
}
