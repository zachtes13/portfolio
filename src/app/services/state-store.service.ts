import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class StateStoreService {
	private readonly _currentRoute = new BehaviorSubject<string>('HOME');
	readonly currentRoute$ = this._currentRoute.asObservable();

	constructor() {}

	getCurrentRoute(): string {
		return this._currentRoute.getValue();
	}

	public setCurrentRoute(newRoute: string): void {
		this._currentRoute.next(newRoute);
	}
}
