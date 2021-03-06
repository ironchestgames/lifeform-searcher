import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, BitmapText } from 'react-pixi-fiber'
import FrameArea from './FrameArea'
import StatusBar from './StatusBar'
import { toggleGameValueDisplayAction } from './Actions'
import { colors, gameConstants, fontStyle } from './vars'

function msToTimeFormatter(ms) {
	var pad = (n, z = 2) => ('00' + n).slice(-z)
	return pad((ms % 5940000) / 60000 | 0) + ':' + pad((ms % 60000) / 1000|0)
}

class GameValueDisplay extends Component {

	constructor(props) {
		super(props)
		this.toggleStatus = this.toggleStatus.bind(this)
	}

	toggleStatus() {
		toggleGameValueDisplayAction()
	}

	render() {
		return (
			<Container x={this.props.x || 0} y={this.props.y || 0} >
				<FrameArea
					color={colors.bg}
					frameColor={colors.frames}
					width={38}
					height={37}
					/>
				<StatusBar
					x={3}
					y={3}
					width={32}
					status={this.props.gameValueDisplayStatus}
					onTap={this.toggleStatus}
					/>

				{this.props.gameValueDisplayStatus !== gameConstants.STATUS_OFF ?
					<Container>
						<BitmapText
							x={3}
							y={12}
							text={'lifefrms'}
							style={fontStyle}
							tint={colors.frames}
							/>
						<BitmapText
							x={3}
							y={19}
							text={'found'}
							style={fontStyle}
							tint={colors.frames}
							/>

						<BitmapText
							x={35}
							y={19}
							anchor={[1, 0]}
							text={this.props.lifeformsFoundCounter + ''}
							style={fontStyle}
							align={'right'}
							tint={colors.active}
							visible={this.props.gameValueDisplayStatus === gameConstants.STATUS_RUNNING}
							/>

						<BitmapText
							x={3}
							y={28}
							text={'dur'}
							style={fontStyle}
							tint={colors.frames}
							/>
						<BitmapText
							x={17}
							y={28}
							text={msToTimeFormatter(this.props.elapsedGameTime)}
							style={fontStyle}
							tint={colors.active}
							visible={this.props.gameValueDisplayStatus === gameConstants.STATUS_RUNNING}
							/>
						</Container>
					: null }
			</Container>
		)
	}
}

function mapStateToProps(state) {
	return {
		lifeformsFoundCounter: state.lifeformsFoundCounter,
		elapsedGameTime: state.elapsedGameTime,

		gameValueDisplayStatus: state.gameValueDisplayStatus,
	}
}

export default connect(mapStateToProps)(GameValueDisplay)
