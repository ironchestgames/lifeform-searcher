import { createStore } from 'redux'
import * as actions from './Actions'
import clamp from 'clamp'

const mastSpeedFactorStep = 0.25

const initalState = {
	mastFrequency: 0.5,
	mastFrequencyNumber: 4000, 
	mastAngle: 0,
	mastSpeedFactor: mastSpeedFactorStep,
}

const reducer = function (state, action) {
	switch (action.type) {
		case actions.SET_MAST_FREQUENCY:
			const clampedValue = clamp(action.payload.value, 0, 1)
			return {
				...state,
				mastFrequency: clampedValue,
				mastFrequencyNumber: clampedValue * 8000,
			}

		case actions.SET_MAST_ANGLE:
			return {
				...state,
				mastAngle: action.payload.value,
			}

		case actions.INC_MAST_SPEED:
			return {
				...state,
				mastSpeedFactor: clamp(state.mastSpeedFactor + mastSpeedFactorStep, 0.05, 1),
			}

		case actions.DEC_MAST_SPEED:
			return {
				...state,
				mastSpeedFactor: clamp(state.mastSpeedFactor - mastSpeedFactorStep, 0.05, 1),
			}

		default:
			return state
	}
}

const store = createStore(reducer, initalState)

const dispatch = function (action) {
	store.dispatch(action)
}

export { store, dispatch }
