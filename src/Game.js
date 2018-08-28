import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-pixi-fiber'
import FrameArea from './FrameArea'
import StatusBar from './StatusBar'
import FrequencyTuner from './FrequencyTuner'
import MastAimer from './MastAimer'
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
				<FrequencyTuner x={3} y={59} />
				<MastAimer
					x={51}
					y={59}
					speed={0.005}
					isOn={true} />
			</Container>
		)
	}
}

Game.contextTypes = {
	app: PropTypes.object,
}

export default Game
