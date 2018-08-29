import React, { Component } from 'react'
import { Container, Sprite } from 'react-pixi-fiber'
import * as PIXI from 'pixi.js'
import clamp from 'clamp'
import Button from './Button'
import SignalIndicator from './SignalIndicator'
import { colors } from './vars'

class MastButtonPanel extends Component {
	state = {
		isSpinToggled: false,
		speedValue: 0.25,
		speedValueStep: 0.25,
	}

	render() {
		return (
			<Container x={this.props.x || 0} y={this.props.y || 0} >
				<Button
					x={0}
					y={0}
					width={20}
					height={7}
					text={'spd +'}
					textOffset={[2, 1]}
					state={Button.ENABLED}
					pointertap={(event) => {
						this.setState({
							speedValue: clamp(this.state.speedValue + this.state.speedValueStep, 0, 1),
						})
					}}
				/>
				<Button
					x={0}
					y={9}
					width={20}
					height={7}
					text={'spd -'}
					textOffset={[2, 1]}
					state={Button.ENABLED}
					pointertap={(event) => {
						this.setState({
							speedValue: clamp(this.state.speedValue - this.state.speedValueStep, 0, 1),
						})
					}}
				/>

				<SignalIndicator
					x={0}
					y={18}
					signal={this.state.speedValue}
					width={20}
					height={6}
					orientation={SignalIndicator.HORIZONTAL}
				/>

				<Button
					x={0}
					y={26}
					width={20}
					height={9}
					text={'SPIN'}
					textOffset={[2, 2]}
					state={this.state.isSpinToggled ? Button.TOGGLED : Button.ENABLED}
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
