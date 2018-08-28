import React, { Component } from 'react'
import { Container, Sprite } from 'react-pixi-fiber'
import * as PIXI from 'pixi.js'
import FrameArea from './FrameArea'
import { colors } from './vars'

import colorPixelActive from './assets/images/color_active.png'

class SignalIndicator extends Component {
	render() {
		return (
			<Container x={this.props.x || 0} y={this.props.y || 0} >
				<FrameArea
					color={colors.bg}
					frameColor={colors.frames}
					width={4}
					height={10}
					/>
				<Sprite
					texture={PIXI.Texture.from(colorPixelActive)}
					x={1}
					y={9}
					anchor={[0, 1]}
					width={2}
					height={Math.round(this.props.signal * 8)}
					/>
			</Container>
		)
	}
}

export default SignalIndicator


