import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as PIXI from 'pixi.js'
import { Sprite, Container } from 'react-pixi-fiber'
import { colors } from './vars'

import bgImg from './assets/images/mastaimer_bg.png'
import indicatorActiveImg from './assets/images/mastaimer_indicator_active.png'
import indicatorInteractiveImg from './assets/images/mastaimer_indicator_interactive.png'
import arrowLeftImg from './assets/images/mastaimer_arrowleft_on.png'
import arrowRightImg from './assets/images/mastaimer_arrowright_on.png'

const aimingAngleFilter = new PIXI.Filter(null, `
	varying vec2 vTextureCoord;
	uniform sampler2D uSampler;

	void main(void)
	{
		float r_interactive = 95.0 / 255.0;
		float g_interactive = 205.0 / 255.0;
		float b_interactive = 228.0 / 255.0;

		vec4 pixel = texture2D(uSampler, vTextureCoord);

		if (!(pixel.r == r_interactive && pixel.g == g_interactive && pixel.b == b_interactive)) {
			pixel.r = 0.0; // NOTE: have to set more than just alpha
			pixel.g = 0.0;
			pixel.b = 0.0;
			pixel.a = 0.0;
		}
		gl_FragColor = pixel;
	}
`)

const aimRangeFilter = new PIXI.Filter(null, `
	varying vec2 vTextureCoord;
	uniform sampler2D uSampler;

	void main(void)
	{
		float r_active = 91.0 / 255.0;
		float g_active = 110.0 / 255.0;
		float b_active = 225.0 / 255.0;

		vec4 pixel = texture2D(uSampler, vTextureCoord);

		if (!(pixel.r == r_active && pixel.g == g_active && pixel.b == b_active)) {
			pixel.r = 0.0; // NOTE: have to set more than just alpha
			pixel.g = 0.0;
			pixel.b = 0.0;
			pixel.a = 0.0;
		}
		gl_FragColor = pixel;
	}
`)

const aimRangeGraphics = new PIXI.Graphics()
const aimingAngleGraphics = new PIXI.Graphics()

class MastAimer extends Component {
	state = {
		isDragging: false,
		mastAngle: 0,
		aimingAngle: 0,
		breadth: Math.PI / 3,
		isGoingRight: true,
		isChangingMastAngle: false,
	}

	componentDidMount() {
		this.context.app.ticker.add(function (dt) {
			this.updateCurrentAngle(dt)
		}, this)
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
		if (this.state.isChangingMastAngle === true && this.state.isDragging === false) {
			const d = this.state.aimingAngle - this.state.mastAngle
			const angleDiff = Math.atan2(Math.sin(d), Math.cos(d))
			if (Math.abs(angleDiff) < this.props.speed) {
				this.setState({
					isChangingMastAngle: false
				})
			} else {
				let newAngle = this.state.mastAngle + this.props.speed
				let isGoingRight = true
				if (angleDiff < 0) {
					newAngle = this.state.mastAngle - this.props.speed
					isGoingRight = false
				}
				this.setState({
					mastAngle: newAngle,
					isGoingRight: isGoingRight,
				})
			}
		}
	}

	render() {
		// aim range
		aimRangeGraphics.clear()
		aimRangeGraphics.beginFill(colors.bg)
		aimRangeGraphics.drawRect(-2, -2, 1, 1)
		aimRangeGraphics.beginFill(colors.active)
		const rangeLimitLeftAngle = this.state.mastAngle - this.state.breadth / 2
		const rangeLimitRightAngle = this.state.mastAngle + this.state.breadth / 2
		aimRangeGraphics.drawPolygon([
				15.5, 15.5,
				15 + Math.cos(rangeLimitLeftAngle) * 16.5, 15 + Math.sin(rangeLimitLeftAngle) * 16.5,
				15 + Math.cos(this.state.mastAngle) * 16.5, 15 + Math.sin(this.state.mastAngle) * 16.5,
				15 + Math.cos(rangeLimitRightAngle) * 16.5, 15 + Math.sin(rangeLimitRightAngle) * 16.5
				])
		aimRangeGraphics.endFill()

		const aimRangeTexture = aimRangeGraphics.generateCanvasTexture(PIXI.SCALE_MODES.NEAREST, 1)

		// aiming angle line
		aimingAngleGraphics.clear()
		aimingAngleGraphics.beginFill(colors.bg)
		aimingAngleGraphics.drawRect(-2, -2, 1, 1)
		aimingAngleGraphics.lineStyle(1.001, colors.interactive)
		aimingAngleGraphics.moveTo(15.5, 15.5)
		aimingAngleGraphics.lineTo(15 + Math.cos(this.state.aimingAngle) * 15, 15 + Math.sin(this.state.aimingAngle) * 15)
		aimingAngleGraphics.endFill()

		const aimingAngleTexture = aimingAngleGraphics.generateCanvasTexture(PIXI.SCALE_MODES.NEAREST, 1)

		return (
			<Container
				x={this.props.x}
				y={this.props.y}>

				<Sprite
					texture={aimRangeTexture}
					x={-2}
					y={-2}
					filters={[aimRangeFilter]}
					/>
				<Sprite
					texture={aimingAngleTexture}
					x={-2}
					y={-2}
					filters={[aimingAngleFilter]}
					/>

				<Sprite
					x={-16}
					y={-16}
					texture={PIXI.Texture.from(bgImg)}
					/>

				<Sprite
					texture={PIXI.Texture.from(arrowLeftImg)}
					x={0}
					y={0}
					visible={this.state.isChangingMastAngle && !this.state.isDragging && !this.state.isGoingRight}
					/>
				<Sprite
					texture={PIXI.Texture.from(arrowRightImg)}
					x={23}
					y={0}
					visible={this.state.isChangingMastAngle && !this.state.isDragging && this.state.isGoingRight}
					/>
				<Sprite
					texture={PIXI.Texture.from(indicatorActiveImg)}
					x={0}
					y={27}
					visible={this.props.isOn}
					/>
				<Sprite
					texture={PIXI.Texture.from(indicatorActiveImg)}
					x={27}
					y={27}
					visible={this.state.isChangingMastAngle && !this.state.isDragging}
					/>
				<Sprite
					texture={PIXI.Texture.from(indicatorInteractiveImg)}
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
					pointerdown={(event) => {
						this.setState({
							isDragging: true,
						})
						this.setAimingAngle(this.getAimingAngle(
								event.data.getLocalPosition(event.target).x,
								event.data.getLocalPosition(event.target).y))
					}}
					pointerout={() => {
						this.setState({
							isDragging: false,
						})
					}}
					pointerup={() => {
						this.setState({
							isDragging: false,
						})
					}}
					pointermove={(event) => {
						if (this.state.isDragging) {
							this.setAimingAngle(this.getAimingAngle(
									event.data.getLocalPosition(event.target).x,
									event.data.getLocalPosition(event.target).y))
						}
					}}
					/>

			</Container>
		)
	}
}

MastAimer.contextTypes = {
	app: PropTypes.object,
}

export default MastAimer
