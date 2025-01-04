import { Component } from '@angular/core';
import { faZ } from '@fortawesome/free-solid-svg-icons';
import { ROUTES } from '../utils/enums';
import { StateStoreService } from '../services/state-store.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	faZ = faZ;
	readonly ROUTES = ROUTES;

	constructor(private stateStoreService: StateStoreService) {}

	onSelectRoute(selectedRoute: ROUTES) {
		this.stateStoreService.setCurrentRoute(selectedRoute);
	}
}
