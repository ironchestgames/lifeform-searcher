import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Sprite } from 'react-pixi-fiber'
import { CRTFilter } from 'pixi-filters'
import * as PIXI from 'pixi.js'
import Button from './Button'
import { zoomScale } from './vars'

import videoFrameImg from './assets/images/video_display_frame.png'

const WIDTH = 58
const HEIGHT = 46

const crtFilter = new CRTFilter({
	curvature: 0,
	lineWidth: 0,
	lineContrast: 0,
	noise: 1,
	noiseSize: zoomScale,
	vignetting: 0.33,
	vignettingAlpha: 0.7,
	vignettingBlur: 0.3,
})
let seedTime = 0

class MastVideoDisplay extends Component {

	componentDidMount() {
		this.context.app.ticker.add((dt) => {
			crtFilter.time += 0.4 * dt

			seedTime += 0.2 * dt
			if (seedTime > 1) {
				crtFilter.seed = Math.random()
				seedTime = 0
			}
		})
	}

	render() {
		return (
			<Container x={this.props.x || 0} y={this.props.y || 0} >
				<Sprite
					texture={PIXI.Texture.WHITE /* TODO: show lifeforms here */}
					x={1}
					y={1}
					width={WIDTH - 2}
					height={HEIGHT - 2}
					filters={[crtFilter]}
					/>
				<Sprite
					texture={PIXI.Texture.from(videoFrameImg)}
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
					pointertap={(event) => {
						// TODO: save lifeform on frequency
					}}
					/>
			</Container>
		)
	}
}

MastVideoDisplay.contextTypes = {
	app: PropTypes.object,
}

export default MastVideoDisplay
