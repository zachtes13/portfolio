import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ROUTES } from '../utils/enums';

@Injectable({
	providedIn: 'root',
})
export class StateStoreService {
	private readonly _currentRoute = new BehaviorSubject<ROUTES>(ROUTES.HOME);
	readonly currentRoute$ = this._currentRoute.asObservable();

	constructor() {}

	getCurrentRoute(): ROUTES {
		return this._currentRoute.getValue();
	}

	public setCurrentRoute(newRoute: ROUTES): void {
		this._currentRoute.next(newRoute);
	}
}
