import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ContactService {
	emailAPI = 'https://mailthis.to/zachtes13';

	constructor(private httpClient: HttpClient) {}

	sendContactEmail(userInput: any) {
		return this.httpClient
			.post(this.emailAPI, userInput, { responseType: 'text' })
			.pipe(
				map(
					(response: any) => {
						if (response) {
							return response;
						}
					},
					(error: any) => {
						return error;
					}
				)
			);
	}
}
