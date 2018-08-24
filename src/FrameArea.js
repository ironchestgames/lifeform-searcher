import React, { Component } from 'react'
import { Container, Sprite } from 'react-pixi-fiber'
import * as PIXI from 'pixi.js'

class FrameArea extends Component {
	render() {
		return (
			<Container x={this.props.x || 0} y={this.props.y || 0}>
				<Sprite
					texture={PIXI.Texture.WHITE}
					width={this.props.width}
					height={this.props.height}
					tint={this.props.frameColor || this.props.color}
				/>
				<Sprite
					texture={PIXI.Texture.WHITE}
					x={1}
					y={1}
					width={this.props.width - 2}
					height={this.props.height - 2}
					tint={this.props.color}
				/>
			</Container>
		)
	}
}

export default FrameArea
