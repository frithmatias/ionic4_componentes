import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-check',
	templateUrl: './check.page.html',
	styleUrls: [ './check.page.scss' ]
})
export class CheckPage implements OnInit {
	titulo = 'CheckBox';
	lista = [
		{
			name: 'bananas',
			color: 'primary',
			check: false
		},
		{
			name: 'manzanas',
			color: 'secondary',
			check: false
		},
		{
			name: 'naranjas',
			color: 'tertiary',
			check: false
		},
		{
			name: 'mandarinas',
			color: 'success',
			check: false
		}
	];
	constructor() {}

	ngOnInit() {}

	mostrarvalor() {
		console.log(this.lista);
	}
}
