import { dispatch } from './GameModel'

export const SET_MAST_FREQUENCY = 'SET_MAST_FREQUENCY'
export const SET_MAST_ANGLE = 'SET_MAST_ANGLE'
export const INC_MAST_SPEED = 'INC_MAST_SPEED'
export const DEC_MAST_SPEED = 'DEC_MAST_SPEED'

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
