import { Component, Input } from '@angular/core';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
	@Input() title = '';
	@Input() description = '';
	@Input() imagePath = '';
	@Input() imageAlt = '';
	@Input() techStack: string[] = [];
	@Input() url = '';
	@Input() isContentRightSide = true;
	faArrowUpRightFromSquare = faArrowUpRightFromSquare;
}
