import React, { Component } from 'react'
import { Container, Sprite, BitmapText } from 'react-pixi-fiber'
import * as PIXI from 'pixi.js'
import { colors, fontOptions } from './vars'

const BUTTON = { // NOTE: state constants
	ENABLED: 'ENABLED', // NOTE: when it is clickable
	DISABLED: 'DISABLED', // NOTE: when it's not clickable
	DISABLED_NOFRAMES: 'DISABLED_NOFRAMES',
	TOGGLED: 'TOGGLED', // NOTE: when it is toggled on and clickable
}

const activeColors = {
	[BUTTON.ENABLED]: {
		bg: colors.frames,
		frame: colors.frames,
		text: colors.interactive,
	},
	[BUTTON.DISABLED]: {
		bg: colors.bg,
		frame: colors.frames,
		text: colors.frames,
	},
	[BUTTON.DISABLED_NOFRAMES]: {
		bg: colors.frames,
		frame: colors.frames,
		text: colors.bg,
	},
	[BUTTON.TOGGLED]: {
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
					style={{font: fontOptions}}
					tint={activeColors[this.props.state].text}
					/>

				<Sprite
					texture={PIXI.Texture.EMPTY}
					width={this.props.width}
					height={this.props.height}
					interactive={true}
					pointertap={this.props.pointertap ? (event) => {
						if (this.props.state === BUTTON.ENABLED ||
								this.props.state === BUTTON.TOGGLED) {
							this.props.pointertap(event)
						}
					} : null}
					/>
			</Container>
		)
	}
}

export default Button
export { Button, BUTTON }
