// Angular
import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'kt-user-profile2',
	templateUrl: './user-profile2.component.html',
})
export class UserProfile2Component implements OnInit {
	// Public properties
	user;

	@Input() avatar = true;
	@Input() greeting = true;
	@Input() badge: boolean;
	@Input() icon: boolean;

	constructor() {
	}

	/**
	 * On init
	 */
	ngOnInit(): void {
		this.user = JSON.parse(localStorage.getItem('user'));
		console.log(this.user);
	}

	/**
	 * Log out
	 */
	logout() {
		// this.store.dispatch(new Logout());
	}
}
