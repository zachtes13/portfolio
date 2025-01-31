import { Component, OnInit } from '@angular/core';
import { faZ } from '@fortawesome/free-solid-svg-icons';
import { BREAKPOINT, ROUTES } from '../utils/enums';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { isWeb } from '../utils/utils';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	faZ = faZ;
	readonly ROUTES = ROUTES;
	componentDestroyed$: Subject<boolean> = new Subject();
	breakpoint = BREAKPOINT.WEB;

	constructor(private breakpointObserver: BreakpointObserver) {}

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
					console.log(Breakpoints.TabletLandscape);
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
}
