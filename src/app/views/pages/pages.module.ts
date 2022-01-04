// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { NoticeModule } from './notice/notice.module';
import { HomeworkModule } from './homework/homework.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
	declarations: [ProfileComponent],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		CoreModule,
		PartialsModule,
		NoticeModule,
		HomeworkModule
	],
	providers: []
})
export class PagesModule {
}
