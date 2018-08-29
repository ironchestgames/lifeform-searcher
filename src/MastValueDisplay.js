import React, { Component } from 'react'
import { format } from 'd3-format'
import { Container, BitmapText } from 'react-pixi-fiber'
import { colors, fontOptions } from './vars'

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
					style={{font: fontOptions}}
					tint={colors.frames}
					/>
				<BitmapText
					x={46}
					y={0}
					anchor={[1, 0]}
					text={frqAndDegNumberFormatter(this.props.frequency * 8000)}
					style={{font: fontOptions}}
					align={'right'}
					tint={colors.active}
					/>

				<BitmapText
					x={0}
					y={7}
					text={'DEG'}
					style={{font: fontOptions}}
					tint={colors.frames}
					/>
				<BitmapText
					x={46}
					y={7}
					anchor={[1, 0]}
					text={frqAndDegNumberFormatter(this.props.mastAngle * 180 / Math.PI)}
					style={{font: fontOptions}}
					align={'right'}
					tint={colors.active}
					/>

				<BitmapText
					x={0}
					y={14}
					text={'REC                         %'}
					style={{font: fontOptions}}
					tint={colors.frames}
					/>
				<BitmapText
					x={38}
					y={14}
					anchor={[1, 0]}
					text={recNumberFormatter(this.props.receptionProcent * 100)}
					style={{font: fontOptions}}
					align={'right'}
					tint={colors.active}
					/>
			</Container>
		)
	}
}

export default MastValueDisplay
