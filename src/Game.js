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
import { colors } from './vars'

class Game extends Component {

	componentDidMount() {
		this.context.app.renderer.plugins.interaction.moveWhenInside = true
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
				<StatusBar x={3} y={3} width={80} statusText={'RUNNING'} />
				<MastAimer
					x={52}
					y={60}
					speedFactor={this.props.mastSpeedFactor}
					/>
				<FrequencyTuner x={3} y={60} />
				<MastValueDisplay
					x={3}
					y={72}
					frequencyNumber={this.props.mastFrequencyNumber}
					mastAngle={this.props.mastAngle}
					receptionProcent={0}
					/>
				<MastButtonPanel x={63} y={23} speedValue={this.props.mastSpeedFactor} />
				<MastVideoDisplay x={3} y={12} />
				<GameValueDisplay x={154} y={15} elapsedTime={1000000} />
			</Container>
		)
	}
}

Game.contextTypes = {
	app: PropTypes.object,
}

function mapStateToProps(state) {
	return {
		mastFrequencyNumber: state.mastFrequencyNumber,
		mastAngle: state.mastAngle,
		mastSpeedFactor: state.mastSpeedFactor,
	}
}

export default connect(mapStateToProps)(Game)
