import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as PIXI from 'pixi.js'
import { Sprite, Container, BitmapText } from 'react-pixi-fiber'
import FrameArea from './FrameArea'
import { colors, gameConstants } from './vars'

import imgOn from './assets/images/onbutton_on.png'
import imgOff from './assets/images/onbutton_off.png'

const getStatusText = function (status) {
	switch (status) {
		case gameConstants.STATUS_OFF:
			return ''

		case gameConstants.STATUS_INITIALIZING:
			return 'INIT'

		case gameConstants.STATUS_RUNNING:
			return 'RUNNING'

		case gameConstants.STATUS_ERROR:
			return 'ERROR'
	}
	return ''
}

class StatusBar extends Component {
	state = {
		isOn: false,
	}

	constructor(props) {
		super(props)
		this.textureOn = PIXI.Texture.fromImage(imgOn)
		this.textureOff = PIXI.Texture.fromImage(imgOff)
	}

	render() {
		return (
			<Container
				x={this.props.x}
				y={this.props.y}
				interactive={true}
				pointertap={this.props.onTap}>
				<FrameArea
					color={this.props.status === gameConstants.STATUS_OFF ? colors.bg : colors.frames}
					height={7}
					width={this.props.width}
					/>
				<Sprite
					texture={this.props.status === gameConstants.STATUS_OFF ? this.textureOff : this.textureOn}
					/>
				<BitmapText
					x={7}
					y={1}
					text={this.props.status === gameConstants.STATUS_OFF ? 'OFF' : 'ON'}
					style={{font: { size: 16, name: 'ironchestcapital' }}}
					tint={this.props.status === gameConstants.STATUS_OFF ? colors.frames : colors.active}
					/>
				<BitmapText
					x={this.props.width - 2}
					y={1}
					anchor={{x: 1, y: 0}}
					text={getStatusText(this.props.status)}
					style={{font: { size: 16, name: 'ironchestcapital' }}}
					align={'right'}
					tint={this.props.status === gameConstants.STATUS_OFF ? colors.frames : colors.active}
					/>

			</Container>
		)
	}
}

StatusBar.contextTypes = {
  app: PropTypes.object,
}

export default StatusBar
