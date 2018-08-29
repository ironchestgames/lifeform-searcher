import React, { Component } from 'react'
import { Container, Sprite } from 'react-pixi-fiber'
import * as PIXI from 'pixi.js'
import clamp from 'clamp'
import FrameArea from './FrameArea'
import { colors } from './vars'

import colorPixelActive from './assets/images/color_active.png'

class SignalIndicator extends Component {
	render() {
		const signal = clamp(this.props.signal, 0, 1) // NOTE: expects a value between 0.0 - 1.0
		const orientation = this.props.orientation || SignalIndicator.VERTICAL
		return (
			<Container x={this.props.x || 0} y={this.props.y || 0} >
				<FrameArea
					color={colors.bg}
					frameColor={colors.frames}
					width={this.props.width}
					height={this.props.height}
					/>
				<Sprite
					texture={PIXI.Texture.from(colorPixelActive)}
					x={1}
					y={this.props.height - 1}
					anchor={[0, 1]}
					width={
							orientation === SignalIndicator.HORIZONTAL ?
							Math.round(signal * (this.props.width - 2)) :
							this.props.width - 2}
					height={
							orientation === SignalIndicator.VERTICAL ?
							Math.round(signal * (this.props.height - 2)) :
							this.props.height - 2}
					/>
			</Container>
		)
	}
}

SignalIndicator.VERTICAL = 'VERTICAL'
SignalIndicator.HORIZONTAL = 'HORIZONTAL'

export default SignalIndicator
