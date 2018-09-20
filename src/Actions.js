import { dispatch } from './GameModel'

// score actions
export const INC_LIFEFORMS_FOUND = 'INC_LIFEFORMS_FOUND'

// duration actions
export const ADD_ELAPSED_TIME = 'ADD_ELAPSED_TIME'

// Mast actions
export const SET_MAST_STATUS = 'SET_MAST_STATUS'
export const SET_MAST_FREQUENCY = 'SET_MAST_FREQUENCY'
export const SET_MAST_ANGLE = 'SET_MAST_ANGLE'
export const INC_MAST_SPEED = 'INC_MAST_SPEED'
export const DEC_MAST_SPEED = 'DEC_MAST_SPEED'
export const TOGGLE_MAST_SPINNING = 'TOGGLE_MAST_SPINNING'

// GameValueDisplay actions
export const SET_GAME_VALUE_DISPLAY_STATUS = 'SET_GAME_VALUE_DISPLAY_STATUS'


// score action creators
export const incLifeformsFoundAction = function () {
	dispatch({
		type: INC_LIFEFORMS_FOUND,
	})
}

// duration action creators
export const addElapsedTimeAction = function (dt) { // NOTE: dt is in ms
	dispatch({
		type: ADD_ELAPSED_TIME,
		payload: {
			dt: dt,
		}
	})
}

// mast action creators
export const setMastStatusAction = function (newStatus) {
	dispatch({
		type: SET_MAST_STATUS,
		payload: {
			value: newStatus,
		},
	})
}

export const setMastFrequencyAction = function (frequency) { // NOTE: a value between 0.0 - 1.0
	dispatch({
		type: SET_MAST_FREQUENCY,
		payload: {
			value: frequency,
		},
	})
}

export const setMastAngleAction = function (angle) { // NOTE: angle in radians
	dispatch({
		type: SET_MAST_ANGLE,
		payload: {
			value: angle,
		},
	})
}

export const incMastSpeedAction = function () {
	dispatch({
		type: INC_MAST_SPEED,
	})
}

export const decMastSpeedAction = function () {
	dispatch({
		type: DEC_MAST_SPEED,
	})
}

export const toggleMastIsSpinningAction = function () {
	dispatch({
		type: TOGGLE_MAST_SPINNING,
	})
}


// GameValueDisplay action creators
export const setGameValueDisplayStatusAction = function (newStatus) {
	dispatch({
		type: SET_GAME_VALUE_DISPLAY_STATUS,
		payload: {
			value: newStatus,
		},
	})
}
