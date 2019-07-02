import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-inicio',
	templateUrl: './inicio.page.html',
	styleUrls: [ './inicio.page.scss' ]
})
export class InicioPage implements OnInit {
	componentes: Observable<Componente[]>;

	// MENU MOVIDO A ASSETS/DATA/MENU.JSON
	// componentes: Componente[] = [
	// 	{
	// 		icon: 'american-football',
	// 		name: 'Action Sheet',
	// 		redirectTo: '/action-sheet'
	// 	},
	// 	{
	// 		icon: 'appstore',
	// 		name: 'Alert',
	// 		redirectTo: '/alert'
	// 	},
	// 	{
	// 		icon: 'beaker',
	// 		name: 'Avatar',
	// 		redirectTo: '/avatar'
	// 	},
	// 	{
	// 		icon: 'radio-button-on',
	// 		name: 'Botones',
	// 		redirectTo: '/buttons'
	// 	},
	// 	{
	// 		icon: 'card',
	// 		name: 'Cards',
	// 		redirectTo: '/cards'
	// 	},
	// 	{
	// 		icon: 'checkmark-circle-outline',
	// 		name: 'Checkbox',
	// 		redirectTo: '/check'
	// 	},
	// 	{
	// 		icon: 'calendar',
	// 		name: 'DataTime',
	// 		redirectTo: '/datetime'
	// 	},
	// 	{
	// 		icon: 'car',
	// 		name: 'Fabs',
	// 		redirectTo: '/fab'
	// 	},
	// 	{
	// 		icon: 'grid',
	// 		name: 'Grid Rows',
	// 		redirectTo: '/grid'
	// 	},
	// 	{
	// 		icon: 'infinite',
	// 		name: 'Infinite Scroll',
	// 		redirectTo: '/infinite-scroll'
	// 	},
	// 	{
	// 		icon: 'hammer',
	// 		name: 'Inputs - Forms',
	// 		redirectTo: '/input'
	// 	},
	// 	{
	// 		icon: 'list',
	// 		name: 'Listas - Sliding',
	// 		redirectTo: '/list'
	// 	},
	// 	{
	// 		icon: 'reorder',
	// 		name: 'Toggle - List Reorder',
	// 		redirectTo: '/list-reorder'
	// 	},
	// 	{
	// 		icon: 'refresh-circle',
	// 		name: 'Loading',
	// 		redirectTo: '/loading'
	// 	}
	// ];
	constructor(private menuController: MenuController, private dataService: DataService) {}

	ngOnInit() {
		this.componentes = this.dataService.getMenu();
	}

	abrirMenu() {
		// toggle va a cerrar el menu si esta abierto, y abrirlo si esta cerrado
		this.menuController.toggle();
	}
}

// La interface componente la moví a interfaces/interfaces.ts

// interface Componente {
// 	icon: string;
// 	name: string;
// 	redirectTo: string;
// }
