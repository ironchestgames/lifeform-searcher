import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Sprite, Container, BitmapText } from 'react-pixi-fiber'
import * as PIXI from 'pixi.js'

import imgOn from './assets/images/onbutton_on.png'
import imgOff from './assets/images/onbutton_off.png'
import imgBarOn from './assets/images/onbutton_bar_on.png'
import imgBarOff from './assets/images/onbutton_bar_off.png'
// import fontIronchestCapitalPxFNT from './assets/fonts/ironchest-capitalpx.fnt'
// import fontIronchestCapitalPxPNG from './assets/fonts/ironchest-capitalpx.png'

// PIXI.extras.BitmapText.registerFont(
// 		fontIronchestCapitalPxFNT,
// 		PIXI.Texture.fromImage(fontIronchestCapitalPxPNG))

class OnButton extends Component {
	state = {
		isOn: false,
		buttonImage: imgOff,
		barImage: imgBarOff,
	}

	componentDidMount() {
    console.log(this.context.app.loader)
  }

	render() {
		console.log(BitmapText.fonts)
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
				<BitmapText
					x={10}
					y={10}
					text={'HEJ hej'}
					style={{font: { size: 16, name: 'ironchestcapital' }}}
					/>

			</Container>
		)
	}
}


OnButton.contextTypes = {
  app: PropTypes.object,
}

export default OnButton
