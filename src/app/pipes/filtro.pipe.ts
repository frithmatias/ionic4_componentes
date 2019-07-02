import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
	// Para hacer mas eficiente mi PIPE puedo recibir un TERCER argumento que sea la columna a filtrar.
	// Por ejemplo columna: string
	transform(array: any, texto: any, columna: string): any[] {
		if (texto === '') {
			return array;
		}

		// Va a retornar todos los items del array cuya evaluación me devuelva TRUE, aquellas evaluaciones
		// que me devuelvan FALSE simplemente las va a ignorar.
		texto = texto.toLowerCase();

		// puedo capturar el tercer argumento de columna, que puede ser id, title, userId.
		// 1:
		// 	id: 2
		// 	title: "sunt qui excepturi placeat culpa"
		// 	userId: 1

		// HTML
		// <ion-item *ngFor="let album of albumes | filtro: textoBuscar: 'title'">

		return array.filter((item) => {
			// return item.title.toLowerCase().includes(texto);
			return item[columna].toLowerCase().includes(texto);
		});
		// return array;
	}
}
