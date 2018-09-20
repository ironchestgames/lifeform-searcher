import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Container } from 'react-pixi-fiber'
import FrameArea from './FrameArea'
import StatusBar from './StatusBar'
import FrequencyTuner from './FrequencyTuner'
import MastAimer from './MastAimer'
import MastValueDisplay from './MastValueDisplay'
import MastButtonPanel from './MastButtonPanel'
import MastVideoDisplay from './MastVideoDisplay'
import GameValueDisplay from './GameValueDisplay'
import { addElapsedTimeAction, setMastStatus } from './Actions'
import { colors, gameConstants } from './vars'

class Game extends Component {

	constructor(props) {
		super(props)
		this.toggleMastStatus = this.toggleMastStatus.bind(this)
	}

	componentDidMount() {
		this.context.app.renderer.plugins.interaction.moveWhenInside = true

		this.context.app.ticker.add(() => {
			addElapsedTimeAction(this.context.app.ticker.elapsedMS)
		})
	}

	toggleMastStatus() {
		if (this.props.mastStatus === gameConstants.STATUS_OFF) {
			setMastStatus(gameConstants.STATUS_RUNNING)
		} else if (this.props.mastStatus === gameConstants.STATUS_RUNNING) {
			setMastStatus(gameConstants.STATUS_OFF)
		}
	}

	render() {
		return (
			<Container>
				<FrameArea
					color={colors.bg}
					frameColor={colors.frames}
					width={86}
					height={94}
					/>
				<StatusBar
					x={3}
					y={3}
					width={80}
					status={this.props.mastStatus}
					onTap={this.toggleMastStatus}
					/>
				<MastAimer
					x={52}
					y={60}
					speedFactor={this.props.mastSpeedFactor}
					isSpinning={this.props.mastIsSpinning}
					/>
				<FrequencyTuner x={3} y={60} />
				<MastValueDisplay
					x={3}
					y={72}
					frequencyNumber={this.props.mastFrequencyNumber}
					mastAngle={this.props.mastAngle}
					receptionProcent={0}
					/>
				<MastButtonPanel
					x={63}
					y={23}
					speedValue={this.props.mastSpeedFactor}
					isSpinning={this.props.mastIsSpinning}
					/>
				<MastVideoDisplay x={3} y={12} />
				<GameValueDisplay
					x={154}
					y={15}
					elapsedTime={this.props.elapsedGameTime}
					lifeformsFoundCounter={this.props.lifeformsFoundCounter}
					/>
			</Container>
		)
	}
}

Game.contextTypes = {
	app: PropTypes.object,
}

function mapStateToProps(state) {
	return {
		mastStatus: state.mastStatus,
		mastFrequencyNumber: state.mastFrequencyNumber,
		mastAngle: state.mastAngle,
		mastSpeedFactor: state.mastSpeedFactor,
		mastIsSpinning: state.mastIsSpinning,

		lifeformsFoundCounter: state.lifeformsFoundCounter,

		elapsedGameTime: state.elapsedGameTime,
	}
}

export default connect(mapStateToProps)(Game)
