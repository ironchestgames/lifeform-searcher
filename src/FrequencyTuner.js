import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setMastFrequencyAction } from './Actions'
import { Container, Sprite } from 'react-pixi-fiber'
import * as PIXI from 'pixi.js'
import clamp from 'clamp'
import FrameArea from './FrameArea'
import SignalIndicator from './SignalIndicator'
import { colors } from './vars'

import frqBarImg1 from './assets/images/frq_bar_1.png'
import frqBarImg2 from './assets/images/frq_bar_2.png'
import frqBarImg3 from './assets/images/frq_bar_3.png'
import frqBarImg4 from './assets/images/frq_bar_4.png'
import frqBarImg5 from './assets/images/frq_bar_5.png'
import frqBarImg6 from './assets/images/frq_bar_6.png'
import frqBarImg7 from './assets/images/frq_bar_7.png'
import frqBarImg8 from './assets/images/frq_bar_8.png'
import frqBarImg9 from './assets/images/frq_bar_9.png'

const FRAME_BORDER_WIDTH = 1
const FRAME_WIDTH = 44
const INPUT_WIDTH = FRAME_WIDTH - FRAME_BORDER_WIDTH * 2
const HANDLE_WIDTH = 4
const HANDLE_X_MAX = FRAME_BORDER_WIDTH + INPUT_WIDTH - HANDLE_WIDTH / 2

class FrequencyTuner extends Component {
	state = {
		isDragging: false,
	}

	constructor(props) {
		super(props)
		const frqBarImgs = [
			frqBarImg1,
			frqBarImg1,
			frqBarImg2,
			frqBarImg3,
			frqBarImg4,
			frqBarImg5,
			frqBarImg6,
			frqBarImg7,
			frqBarImg8,
			frqBarImg9,
		]
		this.frqBarTextures = frqBarImgs.map(function (img) {
			return PIXI.Texture.from(img)
		})
		this.startDragging = this.startDragging.bind(this)
		this.onDragging = this.onDragging.bind(this)
		this.stopDragging = this.stopDragging.bind(this)
		this.getFrqBars = this.getFrqBars.bind(this)
	}

	startDragging(event) {
		this.setState({
			isDragging: true,
		})
		this.setMastFrequency(event.data.getLocalPosition(event.target).x)
	}

	onDragging(event) {
		if (this.state.isDragging) {
			this.setMastFrequency(event.data.getLocalPosition(event.target).x)
		}
	}

	stopDragging() {
		this.setState({
			isDragging: false,
		})
	}

	getFrqBars() {
		return [...Array(14)].map((x, i) => {
			let textureIndex = Math.round(Math.abs(i - 12 * this.props.mastFrequency))
			if (textureIndex >= this.frqBarTextures.length) {
				textureIndex = this.frqBarTextures.length - 1
			}

			return <Sprite
				key={i}
				texture={this.frqBarTextures[textureIndex]}
				x={2 + 3 * i}
				y={2}
				/>
		})
	}

	setMastFrequency(mastFrequency) {
		setMastFrequencyAction(mastFrequency)
	}

	render() {
		return (
			<Container x={this.props.x || 0} y={this.props.y || 0}>
				<FrameArea
					color={colors.bg}
					frameColor={colors.frames}
					width={FRAME_WIDTH}
					height={10}
					/>
				{ this.getFrqBars() }
				<FrameArea
					color={colors.interactive}
					x={clamp(
							Math.round(this.props.mastFrequency * INPUT_WIDTH - HANDLE_WIDTH / 2 - 1),
							FRAME_BORDER_WIDTH,
							HANDLE_X_MAX)}
					y={1}
					width={HANDLE_WIDTH}
					height={8}
					/>
				<Sprite
					texture={PIXI.Texture.EMPTY}
					x={1}
					y={1}
					width={INPUT_WIDTH}
					height={8}
					interactive={true}
					pointerdown={this.startDragging}
					pointerout={this.stopDragging}
					pointerup={this.stopDragging}
					pointermove={this.onDragging}
					/>

				<SignalIndicator
					x={43}
					y={0}
					signal={this.props.mastFrequency /* TODO: change to signal value */}
					width={4}
					height={10}
					orientation={SignalIndicator.VERTICAL}
					/>
			</Container>
		)
	}
}

function mapStateToProps(state) {
	return {
		mastFrequency: state.mastFrequency,
	}
}

export default connect(mapStateToProps)(FrequencyTuner)
