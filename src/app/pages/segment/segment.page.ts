import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-segment',
	templateUrl: './segment.page.html',
	styleUrls: [ './segment.page.scss' ]
})
export class SegmentPage implements OnInit {
	@ViewChild(IonSegment) segmento: IonSegment;
	superheroes: Observable<any>;
	textoBuscar = '';
	constructor(private dataService: DataService) {}

	ngOnInit() {
		this.segmento.value = 'todos';
		this.superheroes = this.dataService.getSuperHeroes();
	}

	segmentChanged(e) {
		const valorSegmento = e.detail.value;
		this.textoBuscar = valorSegmento;
		console.log(valorSegmento);
	}
}
