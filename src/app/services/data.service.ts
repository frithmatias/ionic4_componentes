import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';
@Injectable({
	providedIn: 'root'
	// con provideIn: root ya no es necesario inyectarlos o proveerlos en los módulos.
})
export class DataService {
	constructor(private http: HttpClient) {}

	getUsers() {
		return this.http.get('https://jsonplaceholder.typicode.com/users');
	}

	getMenu() {
		// Para evitar error en el componente menu.component.ts de digo que tipo de dato es el que regresa
		// que es un array de Componentes.
		return this.http.get<Componente[]>('/assets/data/menu.json');
	}
	getAlbums() {
		// Para evitar error en el componente menu.component.ts de digo que tipo de dato es el que regresa
		// que es un array de Componentes.
		return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
	}
	getSuperHeroes() {
		return this.http.get<Componente[]>('/assets/data/superheroes.json').pipe(
			// pipe de rxjs no de angular
			delay(3000)
		);
	}
}
