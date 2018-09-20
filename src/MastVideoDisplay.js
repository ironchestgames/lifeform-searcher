import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Sprite } from 'react-pixi-fiber'
import { CRTFilter } from 'pixi-filters'
import * as PIXI from 'pixi.js'
import Button from './Button'

import videoFrameImg from './assets/images/video_display_frame.png'

const WIDTH = 58
const HEIGHT = 46

const crtFilters = [new CRTFilter({
	curvature: 0,
	lineWidth: 0,
	lineContrast: 0,
	noise: 1,
	noiseSize: 1,
	vignetting: 0.33,
	vignettingAlpha: 0.7,
	vignettingBlur: 0.3,
})]
let seedTime = 0

class MastVideoDisplay extends Component {

	constructor(props) {
		super(props)
		this.textureVideoFrame = PIXI.Texture.from(videoFrameImg)

		this.videoFrameMask = new PIXI.Graphics()
		this.videoFrameMask.beginFill()
		this.videoFrameMask.drawRect(props.x, props.y, WIDTH, HEIGHT)
		this.videoFrameMask.endFill()

		this.saveLifeform = this.saveLifeform.bind(this)
	}

	componentDidMount() {
		this.context.app.ticker.add((dt) => {
			crtFilters[0].time += 0.4 * dt

			seedTime += 0.3 * dt
			if (seedTime > 1) {
				crtFilters[0].seed = Math.random()
				seedTime = 0
			}
		})
	}

	saveLifeform() {
		// TODO: save the lifeform frequency
	}

	render() {
		return (
			<Container x={this.props.x || 0} y={this.props.y || 0} >
				<Container
					x={1}
					y={1}
					mask={this.videoFrameMask}
					>
					<Sprite
						texture={PIXI.Texture.WHITE /* TODO: show lifeforms here */}
						width={WIDTH - 2}
						height={HEIGHT - 2}
						filters={crtFilters}
						/>
					</Container>
				<Sprite
					texture={this.textureVideoFrame}
					x={-2}
					y={-2}
					/>
				<Button
					x={60}
					y={0}
					width={20}
					height={9}
					text={'sAve'}
					textOffset={[2, 2]}
					state={Button.ENABLED}
					pointertap={this.saveLifeform}
					/>
			</Container>
		)
	}
}

MastVideoDisplay.contextTypes = {
	app: PropTypes.object,
}

export default MastVideoDisplay
