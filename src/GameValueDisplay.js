import React, { Component } from 'react'
import { Container, BitmapText } from 'react-pixi-fiber'
import FrameArea from './FrameArea'
import StatusBar from './StatusBar'
import { colors, fontOptions } from './vars'

function msToTimeFormatter(ms) {
	var pad = (n, z = 2) => ('00' + n).slice(-z)
	return pad((ms % 5940000) / 6000 | 0) + ':' + pad((ms % 6000) / 1000|0)
}

class GameValueDisplay extends Component {
	state = {
		isOn: true,
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
				<StatusBar x={3} y={3} width={32} />

				<BitmapText
					x={2}
					y={12}
					text={'lifefrms'}
					style={{font: fontOptions}}
					tint={colors.frames}
					/>
				<BitmapText
					x={2}
					y={19}
					text={'found'}
					style={{font: fontOptions}}
					tint={colors.frames}
					/>

				<BitmapText
					x={34}
					y={19}
					anchor={[1, 0]}
					text={'19'}
					style={{font: fontOptions}}
					align={'right'}
					tint={colors.active}
					visible={this.state.isOn}
					/>

				<BitmapText
					x={2}
					y={28}
					text={'dur'}
					style={{font: fontOptions}}
					tint={colors.frames}
					/>
				<BitmapText
					x={16}
					y={28}
					text={msToTimeFormatter(this.props.elapsedTime)}
					style={{font: fontOptions}}
					tint={colors.active}
					visible={this.state.isOn}
					/>
			</Container>
		)
	}
}

export default GameValueDisplay
