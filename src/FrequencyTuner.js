import React, { Component } from 'react'
import { Container, Sprite } from 'react-pixi-fiber'
import * as PIXI from 'pixi.js'
import FrameArea from './FrameArea'
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

const frqBarImgs = [
	frqBarImg1,
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

class FrequencyTuner extends Component {
	state = {
		frequency: 0,
		isDragging: false,
	}

	setFrequency(frequency) {
		this.setState({
			frequency: frequency,
		})
	}

	render() {
		return (
			<Container x={this.props.x || 0} y={this.props.y || 0} >
				<FrameArea
					color={colors.bg}
					frameColor={colors.frames}
					width={44}
					height={10}
					/>
				{
					[...Array(14)].map(function (x, i) {
						let imgIndex = Math.round(Math.abs(i - 13 * this.state.frequency))
						if (imgIndex >= frqBarImgs.length) {
							imgIndex = frqBarImgs.length - 1
						}
						
						return <Sprite
								key={i}
								texture={PIXI.Texture.from(frqBarImgs[imgIndex])}
								x={2 + 3 * i}
								y={2}
							/>
					}.bind(this))
				}
				<FrameArea
					color={colors.interactive}
					frameColor={colors.active}
					x={1 + Math.round(this.state.frequency * 38)}
					y={1}
					width={4}
					height={8}
					/>
				<Sprite
					texture={PIXI.Texture.EMPTY}
					x={1}
					y={1}
					width={38}
					height={8}
					interactive={true}
					pointerdown={(event) => {
						this.setState({
							isDragging: true,
						})
						this.setFrequency(event.data.getLocalPosition(event.target).x)
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
							this.setFrequency(event.data.getLocalPosition(event.target).x)
						}
					}}
					/>

			</Container>
		)
	}
}

export default FrequencyTuner
