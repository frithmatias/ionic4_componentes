import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
	selector: 'app-list',
	templateUrl: './list.page.html',
	styleUrls: [ './list.page.scss' ]
})
export class ListPage implements OnInit {
	users: Observable<any>;
	// referencia local "lista" para cerrar el SlidingItem
	@ViewChild('lista') lista: IonList; // le digo a angular que busque el objeto lista, el tipo IonList es para que me liste los metodos.
	constructor(private dataService: DataService, private toastController: ToastController) {}

	ngOnInit() {
		this.users = this.dataService.getUsers();
	}

	favorite(user) {
		this.presentToast('Agregado a Favoritos');
		console.log('favorite', user);
		this.lista.closeSlidingItems();
	}
	share(user) {
		this.presentToast('Compartir publicación...');
		console.log('share', user);
		this.lista.closeSlidingItems();
	}
	borrar(user) {
		this.presentToast('Borrando Item...');
		console.log('borrar', user);
		this.lista.closeSlidingItems();
	}

	// TOAST
	async presentToast(message: string) {
		const toast = await this.toastController.create({
			message,
			duration: 2000
		});
		toast.present();
	}
}
