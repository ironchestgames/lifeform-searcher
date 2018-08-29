import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-pixi-fiber'
import FrameArea from './FrameArea'
import StatusBar from './StatusBar'
import FrequencyTuner from './FrequencyTuner'
import MastAimer from './MastAimer'
import MastValueDisplay from './MastValueDisplay'
import MastButtonPanel from './MastButtonPanel'
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
					speed={0.005}
					isOn={true} />
				<FrequencyTuner x={3} y={60} />
				<MastValueDisplay x={3} y={72} frequency={0.5} mastAngle={Math.PI} receptionProcent={0} />
				<MastButtonPanel x={63} y={23} />
			</Container>
		)
	}
}

Game.contextTypes = {
	app: PropTypes.object,
}

export default Game
