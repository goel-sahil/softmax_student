// Angular
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// RxJS
import { Observable, } from 'rxjs';
// Auth
import { AuthNoticeService, AuthService } from '../../../../core/auth';

@Component({
	selector: 'kt-login',
	templateUrl: './login.component.html',
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {
	// Public params
	loginForm: FormGroup;
	loading = false;
	isLoggedIn$: Observable<boolean>;
	errors: any = [];

	/**
	 * Component constructor
	 *
	 * @param router: Router
	 * @param auth: AuthService
	 * @param authNoticeService: AuthNoticeService
	 * @param fb: FormBuilder
	 */
	constructor(
		private router: Router,
		private auth: AuthService,
		private authNoticeService: AuthNoticeService,
		private fb: FormBuilder,
	) {
	}

	/**
	 * On init
	 */
	ngOnInit(): void {
		this.initLoginForm();
	}

	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
		this.authNoticeService.setNotice(null);
		this.loading = false;
	}

	/**
	 * Form initalization
	 * Default params, validators
	 */
	initLoginForm() {
		this.loginForm = this.fb.group({
			phone_number: ["", Validators.compose([
				Validators.required,
			])
			],
			password: ["", Validators.compose([
				Validators.required,
			])
			]
		});
	}

	/**
	 * Form Submit
	 */
	submit() {
		const controls = this.loginForm.controls;
		/** check form */
		if (this.loginForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			return;
		}

		this.loading = true;
		this.auth
			.login(this.loginForm.value)
			.subscribe((response: any) => {
				this.loading = false;
				localStorage.setItem('user', JSON.stringify(response.data.user));
				localStorage.setItem('token', response.data.token);
				this.router.navigate(['/dashboard']); // Main page
			}, (error) => {
				this.loading = false;

				// Validation
				if (error.status == 422) {
					this.errors = error.error.errors;
				} else {
					// Other errors
					this.authNoticeService.setNotice(error.error.message, 'danger');
				}
			});
	}

	/**
	 * Checking control validation
	 *
	 * @param controlName: string => Equals to formControlName
	 * @param validationType: string => Equals to valitors name
	 */
	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.loginForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result = control.hasError(validationType) && (control.dirty || control.touched);
		return result;
	}

	/**
	 * Check for the backend error
	 * @param controlName 
	 * @returns 
	 */
	isControlHasBackendError(controlName) {
		if (this.errors) {
			return this.errors && this.errors.hasOwnProperty(controlName);
		}
		return false;
	}

}
