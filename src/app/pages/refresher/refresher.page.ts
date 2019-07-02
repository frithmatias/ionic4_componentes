import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-refresher',
	templateUrl: './refresher.page.html',
	styleUrls: [ './refresher.page.scss' ]
})
export class RefresherPage implements OnInit {
	constructor() {}
	items: any[] = [];
	ngOnInit() {}
	doRefresh(e) {
		// Es MUY SIMILAR al infiniteScroll.
		setTimeout(() => {
			this.items = Array(40);
			e.target.complete();
		}, 1500);
		console.log(e);
	}
}
