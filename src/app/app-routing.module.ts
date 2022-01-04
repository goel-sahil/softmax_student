// Angular
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import { BaseComponent } from './views/theme/base/base.component';
// Auth
import { UserAuthGuard } from './_helpers/auth.guard';
import { ProfileComponent } from './views/pages/profile/profile.component';

const routes: Routes = [
	{ path: '', loadChildren: () => import('app/views/pages/auth/auth.module').then(m => m.AuthModule) },
	{
		path: '',
		component: BaseComponent,
		canActivate: [UserAuthGuard],
		children: [
			{
				path: 'dashboard',
				loadChildren: () => import('app/views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
			},
			{
				path: 'notice',
				loadChildren: () => import('./views/pages/notice/notice.module').then(m => m.NoticeModule)
			},
			{
				path: 'homework',
				loadChildren: () => import('./views/pages/homework/homework.module').then(m => m.HomeworkModule)
			},
			{
				path: 'profile',
				component: ProfileComponent,
			},
		]
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
