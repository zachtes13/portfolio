import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
	userContactFormGroup: FormGroup = new FormGroup({
		name: new FormControl(''),
		email: new FormControl(''),
		subject: new FormControl(''),
		message: new FormControl(''),
	});

	constructor(private contactService: ContactService) {}

	onSubmit() {
		this.contactService
			.sendContactEmail(this.userContactFormGroup.getRawValue())
			.subscribe((response) => {
				location.href = 'https://mailthis.to/confirm';
			});
	}
}
