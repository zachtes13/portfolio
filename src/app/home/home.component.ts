import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BREAKPOINT } from '../utils/enums';
import { Subject, takeUntil } from 'rxjs';
import { isWeb } from '../utils/utils';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
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
					console.log('WEB');
				}
			});
		this.breakpointObserver
			.observe([Breakpoints.TabletLandscape])
			.pipe(takeUntil(this.componentDestroyed$))
			.subscribe((result) => {
				if (result.matches) {
					this.breakpoint = BREAKPOINT.TABLET;
					console.log('TABLET');
					console.log(Breakpoints.TabletLandscape);
				}
			});
		this.breakpointObserver
			.observe([Breakpoints.Handset])
			.pipe(takeUntil(this.componentDestroyed$))
			.subscribe((result) => {
				if (result.matches) {
					this.breakpoint = BREAKPOINT.HANDSET;
					console.log('HANDSET');
				}
			});
	}

	isWeb() {
		return isWeb(this.breakpoint);
	}
}
