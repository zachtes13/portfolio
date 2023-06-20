import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
	userContactFormGroup: FormGroup = new FormGroup({
		name: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		subject: new FormControl('', [Validators.required]),
		message: new FormControl('', [Validators.required]),
	});

	constructor(private contactService: ContactService) {}

	onSubmit() {
		this.contactService
			.sendContactEmail(this.userContactFormGroup.getRawValue())
			.subscribe((response) => {
				location.href = 'https://mailthis.to/confirm';
			});
	}

	getErrorMessage(
		formControl: AbstractControl | null,
		formFieldName: string
	): string {
		let errorMessage = 'Invalid entry.';

		if (formControl?.errors?.['required']) {
			errorMessage = `${formFieldName} is required.`;
		}
		if (formControl?.errors?.['email']) {
			errorMessage = 'Please enter a valid email address.';
		}

		return errorMessage;
	}
}
