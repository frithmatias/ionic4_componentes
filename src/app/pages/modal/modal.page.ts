import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.page.html',
	styleUrls: [ './modal.page.scss' ]
})
export class ModalPage implements OnInit {
	data: DataHijo = { nombre: '', pais: '' };
	constructor(private modalController: ModalController) {}

	ngOnInit() {}

	async abrirModal() {
		const modal = await this.modalController.create({
			component: ModalInfoPage,
			componentProps: {
				nombre: 'Matias',
				pais: 'argentina'
			}
		});
		await modal.present();

		// una promesa que escucha cuando el modal se cierra.
		const { data } = await modal.onDidDismiss();
		console.log('Retorno del Modal:');
		console.log(data);
		console.log(JSON.stringify(data));
		this.data = data;
	}
}

interface DataHijo {
	nombre: string;
	pais: string;
}
