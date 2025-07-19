  import { Injectable, EventEmitter } from '@angular/core';
  import { Part } from './part.model';
  import { MOCKPARTS } from './MOCKPARTS';
  import { Subject } from 'rxjs';

  @Injectable({
    providedIn: 'root'
})
  export class PartService {
     partChangedEvent = new EventEmitter<Part[]>();
     partListChangedEvent = new Subject<Part[]>();
     maxPartId: number;

    parts: Part[];

    constructor() {
      this.parts = MOCKPARTS;
      this.maxPartId = this.getMaxId();
    }

  getParts() {
    return this.parts.slice();
  }

   getPart(id: string): Part {
    // //loop through all parts
    // this.parts.forEach(part +> {
    // //if ids mathc
    // if (part.id === id) {
    //    return part;
    //  }
    //})
    // //if no id is found
    // return null;

    for (const part of this.parts) {
      if (part.id === id) {
        return part;
      }
    }
    return null;

   }

    getMaxId(): number {
		let maxId = 0;
		for (const part of this.parts) {
			const currentId = +part.id;
			if (currentId > maxId) {
				maxId = currentId;
			}
		}
		return maxId;
	}

	addPart(newPart: Part) {
		if (newPart === null || newPart === undefined) {
			return;
		}

		this.maxPartId++;
		newPart.id = this.maxPartId.toString();
		this.parts.push(newPart);
		const partListClone = this.parts.slice();
		this.partListChangedEvent.next(partListClone);
	}

	updatePart(originalPart: Part, newPart: Part) {
		if (originalPart === null || originalPart === undefined || newPart === null || newPart === undefined) {
			return;
		}

		const pos = this.parts.indexOf(originalPart);
		if (pos < 0) {
			return;
		}

		newPart.id = originalPart.id;
		this.parts[pos] = newPart;
		const partListClone = this.parts.slice();
		this.partListChangedEvent.next(partListClone);
	}

	deletePart(part: Part) {
		if (part === null || part === undefined) {
			return;
		}
		const pos = this.parts.indexOf(part);

		if (pos < 0) {
			return;
		}
		this.parts.splice(pos, 1);
		this.partListChangedEvent.next(this.parts.slice());
	}
}