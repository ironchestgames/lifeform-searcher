import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as PIXI from 'pixi.js'
import { Sprite, Container } from 'react-pixi-fiber'
import { colors } from './vars'

import {
	setMastAngleAction
} from './Actions'

import bgImg from './assets/images/mastaimer_bg.png'
import indicatorActiveImg from './assets/images/mastaimer_indicator_active.png'
import indicatorInteractiveImg from './assets/images/mastaimer_indicator_interactive.png'
import arrowLeftImg from './assets/images/mastaimer_arrowleft_on.png'
import arrowRightImg from './assets/images/mastaimer_arrowright_on.png'
import arrowRightInteractiveImg from './assets/images/mastaimer_arrowright_interactive.png'
import arrowLeftInteractiveImg from './assets/images/mastaimer_arrowleft_interactive.png'
import aimingAngleImg from './assets/images/mastaimer_angle.png'
import aimRangeImg from './assets/images/mastaimer_range.png'

class MastAimer extends Component {
	state = {
		isDragging: false,
		mastAngle: 0,
		aimingAngle: 0,
		breadth: Math.PI / 3,
		isGoingRight: false,
		isChangingMastAngle: false,
		mastSpeed: 0.008,
	}

	constructor(props) {
		super(props)
		this.startDragging = this.startDragging.bind(this)
		this.onDragging = this.onDragging.bind(this)
		this.stopDragging = this.stopDragging.bind(this)

		this.textureBg = PIXI.Texture.from(bgImg)
		this.textureLeftArrow = PIXI.Texture.from(arrowLeftImg)
		this.textureInteractiveLeftArrow = PIXI.Texture.from(arrowLeftInteractiveImg)
		this.textureRightArrow = PIXI.Texture.from(arrowRightImg)
		this.textureInteractiveRightArrow = PIXI.Texture.from(arrowRightInteractiveImg)

		this.textureIndicatorActive = PIXI.Texture.from(indicatorActiveImg)
		this.textureIndicatorInteractive = PIXI.Texture.from(indicatorInteractiveImg)

		this.textureAimRange = PIXI.Texture.from(aimRangeImg)
		this.textureAimingAngle = PIXI.Texture.from(aimingAngleImg)
	}

	componentWillMount() {
		this.context.app.ticker.add(function (dt) {
			if (this.props.isSpinning && !this.state.isDragging) {
				this.setState({
					aimingAngle: this.state.mastAngle + this.state.mastSpeed * this.props.speedFactor * (
							this.state.isGoingRight ? 1.1 : -1.1),
					isChangingMastAngle: true,
				})
			}
			this.updateCurrentAngle(dt)
		}, this)
	}

	startDragging(event) {
		this.setState({
			isDragging: true,
		})
		this.setAimingAngle(this.getAimingAngle(
				event.data.getLocalPosition(event.target).x,
				event.data.getLocalPosition(event.target).y))
	}

	onDragging(event) {
		if (this.state.isDragging) {
			this.setAimingAngle(this.getAimingAngle(
					event.data.getLocalPosition(event.target).x,
					event.data.getLocalPosition(event.target).y))
		}
	}

	stopDragging() {
		this.setState({
			isDragging: false,
		})
	}

	setAimingAngle(angle) {
		if (angle < 0) {
			angle += Math.PI * 2
		}
		this.setState({
			aimingAngle: angle,
			isChangingMastAngle: true,
		})
	}

	getAimingAngle(x, y) {
		return Math.atan2(y - 0.5, x - 0.5)
	}

	updateCurrentAngle(dt) {
		const d = this.state.aimingAngle - this.state.mastAngle
		const angleDiff = Math.atan2(Math.sin(d), Math.cos(d))
		let newAngle = this.state.mastAngle + this.state.mastSpeed * this.props.speedFactor
		let isGoingRight = true
		if (angleDiff < 0) {
			newAngle = this.state.mastAngle - this.state.mastSpeed * this.props.speedFactor
			isGoingRight = false
		}
		this.setState({
			isGoingRight: isGoingRight,
		})

		if (this.state.isChangingMastAngle === true && this.state.isDragging === false) {
			if (Math.abs(angleDiff) < this.state.mastSpeed * this.props.speedFactor) {
				this.setState({
					isChangingMastAngle: false
				})
			} else {
				this.setState({
					mastAngle: newAngle,
				})
				setMastAngleAction(newAngle) // TODO: maybe not like this?
			}
		}
	}

	render() {
		return (
			<Container
				x={this.props.x}
				y={this.props.y}>

				<Sprite
					texture={this.textureAimRange}
					anchor={[0.5, 0.5]}
					x={15.5}
					y={16}
					rotation={this.state.mastAngle}
					/>
				<Sprite
					texture={this.textureAimingAngle}
					anchor={[0.5, 0.5]}
					x={15.5}
					y={16}
					rotation={this.state.aimingAngle}
					/>

				<Sprite
					x={-16}
					y={-16}
					texture={this.textureBg}
					/>

				<Sprite
					texture={this.textureLeftArrow}
					x={0}
					y={0}
					visible={(this.props.isSpinning && !this.state.isGoingRight) ||
						 this.state.isChangingMastAngle && !this.state.isDragging && !this.state.isGoingRight}
					/>
				<Sprite
					texture={this.textureInteractiveLeftArrow}
					x={0}
					y={0}
					visible={this.props.isSpinning && !this.state.isGoingRight && this.state.isDragging}
					/>

				<Sprite
					texture={this.textureRightArrow}
					x={23}
					y={0}
					visible={(this.props.isSpinning && this.state.isGoingRight) ||
						 this.state.isChangingMastAngle && !this.state.isDragging && this.state.isGoingRight}
					/>
				<Sprite
					texture={this.textureInteractiveRightArrow}
					x={23}
					y={0}
					visible={this.props.isSpinning && this.state.isGoingRight && this.state.isDragging}
					/>
				<Sprite
					texture={this.textureIndicatorActive}
					x={0}
					y={27}
					visible={this.props.isOn}
					/>
				<Sprite
					texture={this.textureIndicatorActive}
					x={27}
					y={27}
					visible={this.props.isSpinning || this.state.isChangingMastAngle && !this.state.isDragging}
					/>
				<Sprite
					texture={this.textureIndicatorInteractive}
					x={27}
					y={27}
					visible={this.state.isDragging}
					/>

				<Sprite
					texture={PIXI.Texture.EMPTY}
					x={0}
					y={0}
					width={32}
					height={32}
					interactive={true}
					pointerdown={this.startDragging}
					pointerout={this.stopDragging}
					pointerup={this.stopDragging}
					pointermove={this.onDragging}
					/>

			</Container>
		)
	}
}

MastAimer.contextTypes = {
	app: PropTypes.object,
}

export default MastAimer
