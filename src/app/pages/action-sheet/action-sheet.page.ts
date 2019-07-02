import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
	selector: 'app-action-sheet',
	templateUrl: './action-sheet.page.html',
	styleUrls: [ './action-sheet.page.scss' ]
})
export class ActionSheetPage implements OnInit {
	constructor(private actionSheetCtrl: ActionSheetController) {}

	ngOnInit() {}

	async presentActionSheet() {
		const actionSheet = await this.actionSheetCtrl.create({
			header: 'Albums',
			backdropDismiss: false, // al hacer click fuera del actionSheet ahora NO se cierra.
			buttons: [
				{
					text: 'Delete',
					role: 'destructive',
					icon: 'trash',
					cssClass: 'rojo',
					// lo pongo en global.scss para que "DELETE" aparezca en rojo
					// para que aparezca en rojo el icono y el texto
					// .rojo span, .rojo .sc-ion-action-sheet-md { color: red !important; }

					handler: () => {
						console.log('Delete clicked');
					}
				},
				{
					text: 'Share',
					icon: 'share',
					handler: () => {
						console.log('Share clicked');
					}
				},
				{
					text: 'Play (open modal)',
					icon: 'arrow-dropright-circle',
					handler: () => {
						console.log('Play clicked');
					}
				},
				{
					text: 'Favorite',
					icon: 'heart',
					handler: () => {
						console.log('Favorite clicked');
					}
				},
				{
					text: 'Cancel',
					icon: 'close',
					role: 'cancel',
					handler: () => {
						console.log('Cancel clicked');
					}
				}
			]
		});

		await actionSheet.present();
	}
}
