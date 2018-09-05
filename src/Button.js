import React, { Component } from 'react'
import { Container, Sprite, BitmapText } from 'react-pixi-fiber'
import * as PIXI from 'pixi.js'
import { colors, fontStyle } from './vars'

const ENABLED = 'ENABLED'
const DISABLED = 'DISABLED'
const DISABLED_NOFRAMES = 'DISABLED_NOFRAMES'
const TOGGLED = 'TOGGLED'

const activeColors = {
	[ENABLED]: {
		bg: colors.frames,
		frame: colors.frames,
		text: colors.interactive,
	},
	[DISABLED]: {
		bg: colors.bg,
		frame: colors.frames,
		text: colors.frames,
	},
	[DISABLED_NOFRAMES]: {
		bg: colors.frames,
		frame: colors.frames,
		text: colors.bg,
	},
	[TOGGLED]: {
		bg: colors.frames,
		frame: colors.interactive,
		text: colors.interactive,
	}
}

class Button extends Component {
	render() {
		return (
			<Container x={this.props.x || 0} y={this.props.y || 0}>
				<Sprite
					texture={PIXI.Texture.WHITE}
					width={this.props.width}
					height={this.props.height}
					tint={activeColors[this.props.state].frame}
				/>
				<Sprite
					texture={PIXI.Texture.WHITE}
					x={1}
					y={1}
					width={this.props.width - 2}
					height={this.props.height - 2}
					tint={activeColors[this.props.state].bg}
				/>
				<BitmapText
					x={this.props.textOffset[0] - 1}
					y={this.props.textOffset[1]}
					text={this.props.text}
					style={fontStyle}
					tint={activeColors[this.props.state].text}
					/>

				<Sprite
					texture={PIXI.Texture.EMPTY}
					width={this.props.width}
					height={this.props.height}
					interactive={true}
					pointertap={this.props.pointertap ? (event) => {
						if (this.props.state === ENABLED ||
								this.props.state === TOGGLED) {
							this.props.pointertap(event)
						}
					} : null}
					/>
			</Container>
		)
	}
}

Button.ENABLED = ENABLED
Button.DISABLED = DISABLED
Button.DISABLED_NOFRAMES = DISABLED_NOFRAMES
Button.TOGGLED = TOGGLED

export default Button
