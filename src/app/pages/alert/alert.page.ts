import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.page.html',
	styleUrls: [ './alert.page.scss' ]
})
export class AlertPage implements OnInit {
	constructor(private alertController: AlertController) {}
	titulo = 'Alert Page';
	ngOnInit() {}

	async presentAlert() {
		const alert = await this.alertController.create({
			header: 'Alert',
			subHeader: 'Subtitle',
			message: 'This is an alert message.',
			// buttons: [ 'OK' ]
			buttons: [
				{
					text: 'Cancelar',
					role: 'cancel',
					cssClass: 'secondary',
					handler: (blah) => {
						console.log('Confirm Cancel: blah');
					}
				},
				{
					text: 'OK',
					cssClass: 'secondary',
					handler: (blah) => {
						console.log('Botón OK');
					}
				}
			]
		});

		await alert.present();
	}

	async presentAlertInput() {
		const alert = await this.alertController.create({
			header: 'INPUT',
			subHeader: 'Nombre',
			message: 'Ingrese su nombre.',
			// buttons: [ 'OK' ]
			inputs: [
				{
					name: 'name1',
					type: 'text',
					placeholder: 'Titulo de la página'
				}
			],
			buttons: [
				{
					text: 'Cancelar',
					role: 'cancel',
					cssClass: 'secondary',
					handler: (data) => {
						console.log('Confirm Cancel: blah', data);
					}
				},
				{
					text: 'OK',
					cssClass: 'secondary',
					handler: (data) => {
						this.titulo = data.name1;
						console.log('Botón OK', data);
					}
				}
			]
		});

		await alert.present();
	}
}
