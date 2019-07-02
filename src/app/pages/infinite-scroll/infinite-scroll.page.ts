import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
	selector: 'app-infinite-scroll',
	templateUrl: './infinite-scroll.page.html',
	styleUrls: [ './infinite-scroll.page.scss' ]
})
export class InfiniteScrollPage implements OnInit {
	data: any[] = Array(20);
	@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
	constructor() {}

	ngOnInit() {}

	loadData(event) {
		console.log('Cargando Siguientes...');
		// Vamos a simular una carga sincrona

		// Si sólo existe un maximo de datos de 50 tengo que cancelar
		if (this.data.length > 50) {
			event.target.complete();
			// El problema es que aunque ya no carga mas de 60 registros, sigue mostrando el LOADING con
			// un espacio al final. Para esto vamos a usar el ViewChild que es para obtener algún elemento
			// del HTML. Obtengo el infiniteScroll y le asingo el valor disabled = true.
			this.infiniteScroll.disabled = true;
			return;
		}

		setTimeout(() => {
			const nuevoArr = Array(20);
			this.data.push(...nuevoArr);
			// Una vez cargados TODOS los items tengo que cancelar el LOADING.
			event.target.complete();
		}, 1000);
	}
}
