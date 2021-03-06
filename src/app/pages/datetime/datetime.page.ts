import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-datetime',
	templateUrl: './datetime.page.html',
	styleUrls: [ './datetime.page.scss' ]
})
export class DatetimePage implements OnInit {
	fcNac: Date = new Date();
	customPickerOptions;
	customDate: Date = new Date();
	constructor() {}

	ngOnInit() {
		this.customPickerOptions = {
			buttons: [
				{
					text: 'Save',
					handler: (evento) => {
						console.log('Clicked Save!');
						console.log(evento);
						//this.customDate = new Date();
					}
				},
				{
					text: 'Log',
					handler: () => {
						console.log('Clicked Log. Do not Dismiss.');
						return false;
					}
				}
			]
		};
	}

	cambioFecha(e) {
		console.log(e);
		console.log('Date formato ISO', e.detail.value);
		console.log('Date formato JS', new Date(e.detail.value));
	}
}
