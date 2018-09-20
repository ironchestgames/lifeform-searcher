import { createStore } from 'redux'
import * as actions from './Actions'
import clamp from 'clamp'
import { gameConstants } from './vars'

const mastSpeedFactorStep = 0.25

const initalState = {

	lifeformsFoundCounter: 0,
	elapsedGameTime: 0, // ms

	// Mast
	mastStatus: gameConstants.STATUS_OFF,
	mastFrequency: 0.5,
	mastFrequencyNumber: 4000, 
	mastAngle: 0,
	mastSpeedFactor: mastSpeedFactorStep,
	mastIsSpinning: false,

	// GameValueDisplay
	gameValueDisplayStatus: gameConstants.STATUS_OFF,
	gameValueDisplayInitTimer: 0,
}

const reducer = function (state, action) {
	switch (action.type) {

		case actions.INC_LIFEFORMS_FOUND:
			return {
				...state,
				lifeformsFoundCounter: state.lifeformsFoundCounter + 1,
			}

		case actions.ADD_ELAPSED_TIME:
			return {
				...state,
				elapsedGameTime: state.elapsedGameTime + action.payload.dt,
			}

		case actions.TICK:
			{
				let newStatus = state.gameValueDisplayStatus
				if (state.gameValueDisplayStatus === gameConstants.STATUS_INIT &&
						state.gameValueDisplayInitTimer <= 0) {
					newStatus = gameConstants.STATUS_RUNNING
				}
				return {
					...state,
					gameValueDisplayStatus: newStatus,
					gameValueDisplayInitTimer: Math.max(state.gameValueDisplayInitTimer - action.payload.value, 0),
				}
			}

		// Mast
		case actions.SET_MAST_STATUS:
			const mastStatusTextMap = {
				[gameConstants.STATUS_OFF]: '',
				[gameConstants.STATUS_RUNNING]: 'RUNNING',
			}
			return {
				...state,
				mastStatusText: mastStatusTextMap[action.payload.value],
				mastStatus: action.payload.value,
			}

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

		case actions.TOGGLE_MAST_SPINNING:
			return {
				...state,
				mastIsSpinning: !state.mastIsSpinning,
			}

		// GameValueDisplay
		case actions.TOGGLE_GAME_VALUE_DISPLAY:
			let newStatus = gameConstants.STATUS_OFF
			let gameValueDisplayInitTimer = 0
			if (state.gameValueDisplayStatus === gameConstants.STATUS_OFF) {
				newStatus = gameConstants.STATUS_INIT
				gameValueDisplayInitTimer = 1000
			}
			return {
				...state,
				gameValueDisplayStatus: newStatus,
				gameValueDisplayInitTimer: gameValueDisplayInitTimer,
			}

		case actions.SET_GAME_VALUE_DISPLAY_STATUS:
			return {
				...state,
				gameValueDisplayStatus: action.payload.value,
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
