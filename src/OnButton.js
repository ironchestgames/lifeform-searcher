import React, { Component } from 'react'
import { Sprite, Container } from 'react-pixi-fiber'
import * as PIXI from 'pixi.js'

import imgOn from './assets/images/onbutton_on.png'
import imgOff from './assets/images/onbutton_off.png'
import imgBar from './assets/images/onbutton_bar.png'

class OnButton extends Component {
	state = {
		isOn: false,
		image: imgOff,
	}

	render() {
		return (
			<Container x={this.props.x} y={this.props.y}>
				<Sprite
					texture={PIXI.Texture.fromImage(imgBar)}
					width={this.props.width}
					visible={this.state.isOn}
					/>
				<Sprite
					texture={PIXI.Texture.fromImage(this.state.image)}
					interactive={true}
					pointertap={() => {
						this.setState(function (prevState) {
							const nextState = {
								isOn: !prevState.isOn,
								image: imgOn
							}
							if (nextState.isOn === false) {
								nextState.image = imgOff
							}
							return nextState
						})
					}}
					/>
			</Container>
		)
	}
}

export default OnButton
