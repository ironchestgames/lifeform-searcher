import React, { Component } from 'react'
import { format } from 'd3-format'
import { Container, BitmapText } from 'react-pixi-fiber'
import { colors, fontStyle } from './vars'

const frqAndDegNumberFormatter = format('.3f')
const recNumberFormatter = format('.1f')

class MastValueDisplay extends Component {
	render() {
		return (
			<Container x={this.props.x || 0} y={this.props.y || 0} >
				<BitmapText
					x={0}
					y={0}
					text={'FRQ'}
					style={fontStyle}
					tint={colors.frames}
					/>
				<BitmapText
					x={46}
					y={0}
					anchor={[1, 0]}
					text={frqAndDegNumberFormatter(this.props.frequencyNumber)}
					style={fontStyle}
					align={'right'}
					tint={colors.active}
					/>

				<BitmapText
					x={0}
					y={7}
					text={'DEG'}
					style={fontStyle}
					tint={colors.frames}
					/>
				<BitmapText
					x={46}
					y={7}
					anchor={[1, 0]}
					text={frqAndDegNumberFormatter((Math.abs(this.props.mastAngle * 180 / Math.PI - 90) % 360) - 180)}
					style={fontStyle}
					align={'right'}
					tint={colors.active}
					/>

				<BitmapText
					x={0}
					y={14}
					text={'REC                         %'}
					style={fontStyle}
					tint={colors.frames}
					/>
				<BitmapText
					x={38}
					y={14}
					anchor={[1, 0]}
					text={recNumberFormatter(this.props.receptionProcent * 100)}
					style={fontStyle}
					align={'right'}
					tint={colors.active}
					/>
			</Container>
		)
	}
}

export default MastValueDisplay
