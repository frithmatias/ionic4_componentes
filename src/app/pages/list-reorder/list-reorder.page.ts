import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-list-reorder',
	templateUrl: './list-reorder.page.html',
	styleUrls: [ './list-reorder.page.scss' ]
})
export class ListReorderPage implements OnInit {
	personajes = [ 'Aquamen', 'superman', 'flash', 'batman' ];
	constructor() {}

	ngOnInit() {}

	reorder(event) {
		console.log(event);
		const itemMover = this.personajes.splice(event.detail.from, 1)[0];
		this.personajes.splice(event.detail.to, 0, itemMover); // no quiero eliminar ningun item por eso pongo 0
		event.detail.complete();
	}
	guardar() {
		console.log(this.personajes);
	}
}
