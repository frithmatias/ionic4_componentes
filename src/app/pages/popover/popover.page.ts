import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

@Component({
	selector: 'app-popover',
	templateUrl: './popover.page.html',
	styleUrls: [ './popover.page.scss' ]
})
export class PopoverPage implements OnInit {
	constructor(private popoverController: PopoverController) {}

	ngOnInit() {}

	async mostrarPop(e) {
		console.log(e);
		const popover = await this.popoverController.create({
			component: PopinfoComponent,
			event: e,
			mode: 'ios',
			backdropDismiss: false
		});
		await popover.present();

		// destructuracion de ES6

		// const { data } = await popover.onDidDismiss();
		// para evitar el delay hasta que se cierra el popover puedo usar onWillDismiss()
		const { data } = await popover.onWillDismiss();

		console.log('Padre:', data);
	}
}
