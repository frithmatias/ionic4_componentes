import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: [ './menu.component.scss' ]
})
export class MenuComponent implements OnInit {
	componentes: Observable<Componente[]>;
	constructor(private dataService: DataService) {}

	ngOnInit() {
		// Para evitar error de tipos, le digo en el servicio que tipo de dato es el que regresa
		// que es un array de Componentes.
		// return this.http.get<Componente[]>('/assets/data/menu.json');
		this.componentes = this.dataService.getMenu();
	}
}
