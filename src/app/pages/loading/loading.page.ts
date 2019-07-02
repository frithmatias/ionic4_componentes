import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
	selector: 'app-loading',
	templateUrl: './loading.page.html',
	styleUrls: [ './loading.page.scss' ]
})
export class LoadingPage implements OnInit {
	constructor(public loadingController: LoadingController) {}
	loading: any;

	ngOnInit() {
		// simulamos una petición asíncrona que cuando se cumpla, cancele el loading...
		setTimeout(() => {
			this.loading.dismiss();
		}, 1500);

		this.presentLoading('Por favor espere...');
	}

	async presentLoading(mensaje) {
		this.loading = await this.loadingController.create({
			message: mensaje
			// duration: 2000
			// nosotros no sabemos cuanto va a demorar la solicitud por eso no vamos a trabajar con el duration
		});
		return this.loading.present();
	}
}
