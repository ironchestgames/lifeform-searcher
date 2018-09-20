
const colors = {
	bg: 0x222034,
	frames: 0x3f3f74,
	active: 0x5b6ee1,
	interactive: 0x5fcde4,
	error_bg: 0xac3232,
	error_fg: 0xd95763,
	page_bg: 0x141226, // NOTE: only used on html page
}

const fontStyle = { font: { size: 16, name: 'ironchestcapital' } }

const gameWidth = 192
const gameHeight = 128

const gameConstants = {
	STATUS_OFF: 'STATUS_OFF',
	STATUS_INITIALIZING: 'STATUS_INITIALIZING',
	STATUS_RUNNING: 'STATUS_RUNNING',
	STATUS_ERROR: 'STATUS_ERROR',
}

export {
	colors,
	fontStyle,
	gameWidth,
	gameHeight,
	gameConstants,
}
