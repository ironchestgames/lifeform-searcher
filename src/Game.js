import React, { Component } from 'react'
import { connect } from 'react-redux'
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

		this.context.app.ticker.add(() => {
			addElapsedTimeAction(this.context.app.ticker.elapsedMS)
		})
	}

	render() {
		return (
			<Container>
				<Mast x={0} y={0} />
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
		lifeformsFoundCounter: state.lifeformsFoundCounter,
		elapsedGameTime: state.elapsedGameTime,
	}
}

export default connect(mapStateToProps)(Game)
