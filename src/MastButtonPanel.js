import React, { Component } from 'react'
import { Container, Sprite } from 'react-pixi-fiber'
import * as PIXI from 'pixi.js'
import FrameArea from './FrameArea'
import { Button, BUTTON } from './Button'
import { colors } from './vars'

class MastButtonPanel extends Component {
	state = {
		isSpinToggled: false,
	}

	render() {
		return (
			<Container x={this.props.x || 0} y={this.props.y || 0} >
				<Button
					x={0}
					y={0}
					width={20}
					height={9}
					text={'SPIN'}
					textOffset={[2, 2]}
					state={this.state.isSpinToggled ? BUTTON.TOGGLED : BUTTON.ENABLED}
					pointertap={(event) => {
						this.setState({
							isSpinToggled: !this.state.isSpinToggled,
						})
					}}
				 />
			</Container>
		)
	}
}

export default MastButtonPanel
