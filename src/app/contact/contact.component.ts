import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { isHandset, isTablet, isWeb } from '../utils/utils';
import { BREAKPOINT } from '../utils/enums';
import { Subject, takeUntil } from 'rxjs';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
	componentDestroyed$: Subject<boolean> = new Subject();
	faPaperPlane = faPaperPlane;
	userContactFormGroup: FormGroup = new FormGroup({
		name: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		subject: new FormControl('', [Validators.required]),
		message: new FormControl('', [Validators.required]),
	});
	breakpoint = BREAKPOINT.WEB;

	constructor(
		private contactService: ContactService,
		private breakpointObserver: BreakpointObserver
	) {}

	ngOnInit() {
		this.breakpoint = this.breakpointObserver.isMatched(BREAKPOINT.WEB)
			? BREAKPOINT.WEB
			: BREAKPOINT.TABLET;

		this.breakpointObserver
			.observe([Breakpoints.WebLandscape])
			.pipe(takeUntil(this.componentDestroyed$))
			.subscribe((result) => {
				if (result.matches) {
					this.breakpoint = BREAKPOINT.WEB;
				}
			});
		this.breakpointObserver
			.observe([Breakpoints.TabletLandscape])
			.pipe(takeUntil(this.componentDestroyed$))
			.subscribe((result) => {
				if (result.matches) {
					this.breakpoint = BREAKPOINT.TABLET;
				}
			});
		this.breakpointObserver
			.observe([Breakpoints.Handset])
			.pipe(takeUntil(this.componentDestroyed$))
			.subscribe((result) => {
				if (result.matches) {
					this.breakpoint = BREAKPOINT.HANDSET;
				}
			});
	}

	isWeb() {
		return isWeb(this.breakpoint);
	}

	isTablet() {
		return isTablet(this.breakpoint);
	}

	isHandset() {
		return isHandset(this.breakpoint);
	}

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
