import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BuildService } from '../build.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Build } from '../build.model';

@Component({
  selector: 'app-build-edit',
  standalone: false,
  templateUrl: './build-edit.component.html',
  styleUrl: './build-edit.component.css'
})
export class BuildEditComponent implements OnInit {
	originalBuild: Build;
	build: Build;
	editMode: boolean = false;

  constructor(private buildService: BuildService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
		this.route.params.subscribe(
			(params: Params) => {
				const id = params['id'];

				if (!id) {
					this.editMode = false;
					return;
				}
				this.originalBuild = this.buildService.getBuild(id);

				if (!this.originalBuild) {
					return;
				}

				this.editMode = true;
				this.build = JSON.parse(JSON.stringify(this.originalBuild));
			}
		)
	}

	onCancel() {
		this.router.navigate(['/builds'], { relativeTo: this.route });
	}

	onSubmit(form: NgForm) {
		const values = form.value;

		const newBuild = new Build(null, values.name, values.parts);

		if (this.editMode === true) {
			this.buildService.updateBuild(this.originalBuild, newBuild);
		} else {
			this.buildService.addBuild(newBuild);
		}

		this.router.navigate(['/builds'], { relativeTo: this.route });
	}

	isInvalidBuild(newBuild: Build) {
			if (!newBuild) {
				return true;
			}
	
			if (newBuild.id === this.build.id) {
				return true;
			}
	
	
			return false;
		}
}
