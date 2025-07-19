import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Part } from '../part.model';
import { PartService } from '../part.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-part-edit',
  standalone: false,
  templateUrl: './part-edit.component.html',
  styleUrls: ['./part-edit.component.css']
})
export class PartEditComponent implements OnInit {
  part: Part = null;
  originalPart: Part = null;
  editMode: boolean = false;


  constructor(private partService: PartService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
		this.route.params.subscribe(
			(params: Params) => {
				const id = params['id'];

				if (!id) {
					this.editMode = false;
					return;
				}

				this.originalPart = this.partService.getPart(id);

				if (!this.originalPart) {
					return;
				}


				this.editMode = true;
				this.part = JSON.parse(JSON.stringify(this.originalPart));
			}
		)
	}

	onCancel() {
		this.router.navigate(['/parts'], { relativeTo: this.route });
	}

	onSubmit(form: NgForm) {
		const values = form.value;

		const newPart = new Part(null, values.name, values.brand, values.partType);

		if (this.editMode === true) {
			this.partService.updatePart(this.originalPart, newPart);
		} else {
			this.partService.addPart(newPart);
		}

		this.router.navigate(['/parts'], { relativeTo: this.route });
	}

	isInvalidPart(newPart: Part) {
		if (!newPart) {
			return true;
		}

		if (newPart.id === this.part.id) {
			return true;
		}


		return false;
	}

}