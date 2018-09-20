import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-pixi-fiber'
import FrameArea from './FrameArea'
import Mast from './Mast'
import GameValueDisplay from './GameValueDisplay'
import { addElapsedTimeAction } from './Actions'
import { colors, gameConstants } from './vars'

class Game extends Component {

	componentDidMount() {
		this.context.app.renderer.plugins.interaction.moveWhenInside = true

		// game update
		this.context.app.ticker.add(() => {
			addElapsedTimeAction(this.context.app.ticker.elapsedMS)
		})
	}

	render() {
		return (
			<Container>
				<Mast x={0} y={0} />
				<GameValueDisplay x={154} y={15} />
			</Container>
		)
	}
}

Game.contextTypes = {
	app: PropTypes.object,
}

export default Game
