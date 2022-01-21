// Angular
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { SwPush } from '@angular/service-worker';
import { DashboardService } from './dashboard.service';

@Component({
	selector: 'kt-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
	readonly VAPID_PUBLIC_KEY = "BNbSRx1Fp5Bgp_qR-QZ0ETCYi_AS4mRlm98xvbPlb9v0LgVCFHi8qihcyr23jscKFSlitPyKVqjSMmmUoGZRZ2k";
	public user;

	constructor(
		private router: Router,
		private swPush: SwPush,
		private _snackBar: MatSnackBar,
		private dashboardService: DashboardService
	) {
	}

	ngOnInit(): void {
		this.user = JSON.parse(localStorage.getItem('user'));
		// User does not enabled notifications?
		// if (!this.user.notifications_enabled) {
		this.subscribeToNotifications();
		// }
	}

	redirectToList(param) {
		this.router.navigate(['/' + param]);
	}

	subscribeToNotifications() {
		this.swPush.requestSubscription({
			serverPublicKey: this.VAPID_PUBLIC_KEY
		})
			.then(sub => {
				this.dashboardService.enableNotifications(sub).subscribe((response: any) => {
					// this.user.notifications_enabled = 1;
					// localStorage.setItem('user', JSON.stringify(this.user));
					// this._snackBar.open(response.message, 'X');
				}, (error) => {
					this._snackBar.open(error.error.message, 'X');
				});
			})
			.catch((err) => {
				// console.error("Could not subscribe to notifications", err)
				this._snackBar.open(err, 'X');
			});
	}
}
