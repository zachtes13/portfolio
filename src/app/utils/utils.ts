import { BREAKPOINT } from './enums';

export function isWeb(orientation: BREAKPOINT) {
	return orientation === BREAKPOINT.WEB;
}

export function isTablet(orientation: BREAKPOINT) {
	return orientation === BREAKPOINT.TABLET;
}

export function isHandset(orientation: BREAKPOINT) {
	return orientation === BREAKPOINT.HANDSET;
}
