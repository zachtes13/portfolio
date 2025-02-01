import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactService } from './services/contact.service';
import { MatChipsModule } from '@angular/material/chips';
import { ProjectComponent } from './project/project.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		FooterComponent,
		ProjectsComponent,
		ContactComponent,
		ProjectComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		MatCardModule,
		MatIconModule,
		MatChipsModule,
		MatToolbarModule,
		MatButtonModule,
		MatFormFieldModule,
		MatInputModule,
		MatDividerModule,
		FontAwesomeModule,
		ReactiveFormsModule,
		HttpClientModule,
		MatMenuModule,
	],
	providers: [ContactService],
	bootstrap: [AppComponent],
})
export class AppModule {}
