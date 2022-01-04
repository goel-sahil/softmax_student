// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'kt-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

	constructor(private router: Router) {
	}

	ngOnInit(): void {
	}

	redirectToList(param) {
		// console.log(param, "cfghj")
		this.router.navigate(['/' + param]);
	}
}
