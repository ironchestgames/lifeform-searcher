import React, { Component } from 'react'
import { Sprite, Container } from 'react-pixi-fiber'
import * as PIXI from 'pixi.js'

import imgOn from './assets/images/onbutton_on.png'
import imgOff from './assets/images/onbutton_off.png'
import imgBarOn from './assets/images/onbutton_bar_on.png'
import imgBarOff from './assets/images/onbutton_bar_off.png'

class OnButton extends Component {
	state = {
		isOn: false,
		buttonImage: imgOff,
		barImage: imgBarOff,
	}

	render() {
		return (
			<Container
				x={this.props.x}
				y={this.props.y}
				interactive={true}
				pointertap={() => {
					this.setState(function (prevState) {
						const nextState = {
							isOn: !prevState.isOn,
							buttonImage: imgOn,
							barImage: imgBarOn,
						}
						if (nextState.isOn === false) {
							nextState.buttonImage = imgOff
							nextState.barImage = imgBarOff
						}
						return nextState
					})
				}} >
				<Sprite
					texture={PIXI.Texture.fromImage(this.state.barImage)}
					width={this.props.width}
					/>
				<Sprite
					texture={PIXI.Texture.fromImage(this.state.buttonImage)}
					/>
			</Container>
		)
	}
}

export default OnButton
