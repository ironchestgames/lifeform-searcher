import React, { Component } from 'react'
import { Container } from 'react-pixi-fiber'
import Button from './Button'
import SignalIndicator from './SignalIndicator'
import {
	incMastSpeedAction,
	decMastSpeedAction,
	toggleMastIsSpinningAction
} from './Actions'

class MastButtonPanel extends Component {
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
						incMastSpeedAction()
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
						decMastSpeedAction()
					}}
				/>

				<SignalIndicator
					x={0}
					y={18}
					signal={this.props.speedValue}
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
					state={this.props.isSpinning ? Button.TOGGLED : Button.ENABLED}
					pointertap={(event) => {
						toggleMastIsSpinningAction()
					}}
				/>
			</Container>
		)
	}
}

export default MastButtonPanel
