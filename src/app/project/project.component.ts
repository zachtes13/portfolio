import { Component, Input, OnInit } from '@angular/core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { isWeb } from '../utils/utils';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject, takeUntil } from 'rxjs';
import { BREAKPOINT } from '../utils/enums';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
	componentDestroyed$: Subject<boolean> = new Subject();
	@Input() title = '';
	@Input() description = '';
	@Input() imagePath = '';
	@Input() imageAlt = '';
	@Input() techStack: string[] = [];
	@Input() url = '';
	@Input() isContentRightSide = true;
	faArrowUpRightFromSquare = faArrowUpRightFromSquare;
	breakpoint = BREAKPOINT.TABLET;

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
