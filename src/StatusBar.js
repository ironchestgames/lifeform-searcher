import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as PIXI from 'pixi.js'
import { Sprite, Container, BitmapText } from 'react-pixi-fiber'
import FrameArea from './FrameArea'
import { colors } from './vars'

import imgOn from './assets/images/onbutton_on.png'
import imgOff from './assets/images/onbutton_off.png'

class StatusBar extends Component {
	state = {
		isOn: false,
	}

	render() {
		return (
			<Container
				x={this.props.x}
				y={this.props.y}
				interactive={true}
				pointertap={() => {
					this.setState((prevState) => ({
						isOn: !prevState.isOn,
					}))
				}}>
				<FrameArea
					color={this.state.isOn ? colors.frames : colors.bg}
					height={7}
					width={this.props.width}
					/>
				<Sprite
					texture={this.state.isOn ? PIXI.Texture.fromImage(imgOn) : PIXI.Texture.fromImage(imgOff)}
					/>
				<BitmapText
					x={7}
					y={1}
					text={this.state.isOn ? 'ON' : 'OFF'}
					style={{font: { size: 16, name: 'ironchestcapital' }}}
					tint={this.state.isOn ? colors.active : colors.frames}
					/>
				<BitmapText
					x={this.props.width - 2}
					y={1}
					anchor={{x: 1, y: 0}}
					text={this.props.statusText || ''}
					style={{font: { size: 16, name: 'ironchestcapital' }}}
					align={'right'}
					tint={this.state.isOn ? colors.active : colors.frames}
					visible={this.state.isOn}
					/>

			</Container>
		)
	}
}

StatusBar.contextTypes = {
  app: PropTypes.object,
}

export default StatusBar
