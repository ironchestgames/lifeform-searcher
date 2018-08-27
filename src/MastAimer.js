import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as PIXI from 'pixi.js'
import { Sprite, Container } from 'react-pixi-fiber'
import FrameArea from './FrameArea'
import { colors } from './vars'

import bgImg from './assets/images/mastaimer_bg.png'

import angle1Img from './assets/images/mastaimer_angle_1.png'
import angle2Img from './assets/images/mastaimer_angle_2.png'
import angle3Img from './assets/images/mastaimer_angle_3.png'
import angle4Img from './assets/images/mastaimer_angle_4.png'
import angle5Img from './assets/images/mastaimer_angle_5.png'
import angle6Img from './assets/images/mastaimer_angle_6.png'
import angle7Img from './assets/images/mastaimer_angle_7.png'
import angle8Img from './assets/images/mastaimer_angle_8.png'
import angle9Img from './assets/images/mastaimer_angle_9.png'
import angle10Img from './assets/images/mastaimer_angle_10.png'
import angle11Img from './assets/images/mastaimer_angle_11.png'
import angle12Img from './assets/images/mastaimer_angle_12.png'
import angle13Img from './assets/images/mastaimer_angle_13.png'
import angle14Img from './assets/images/mastaimer_angle_14.png'
import angle15Img from './assets/images/mastaimer_angle_15.png'
import angle16Img from './assets/images/mastaimer_angle_16.png'
import angle17Img from './assets/images/mastaimer_angle_17.png'
import angle18Img from './assets/images/mastaimer_angle_18.png'
import angle19Img from './assets/images/mastaimer_angle_19.png'
import angle20Img from './assets/images/mastaimer_angle_20.png'
import angle21Img from './assets/images/mastaimer_angle_21.png'
import angle22Img from './assets/images/mastaimer_angle_22.png'
import angle23Img from './assets/images/mastaimer_angle_23.png'
import angle24Img from './assets/images/mastaimer_angle_24.png'
import angle25Img from './assets/images/mastaimer_angle_25.png'
import angle26Img from './assets/images/mastaimer_angle_26.png'
import angle27Img from './assets/images/mastaimer_angle_27.png'
import angle28Img from './assets/images/mastaimer_angle_28.png'
import angle29Img from './assets/images/mastaimer_angle_29.png'
import angle30Img from './assets/images/mastaimer_angle_30.png'
import angle31Img from './assets/images/mastaimer_angle_31.png'
import angle32Img from './assets/images/mastaimer_angle_32.png'
import angle33Img from './assets/images/mastaimer_angle_33.png'
import angle34Img from './assets/images/mastaimer_angle_34.png'
import angle35Img from './assets/images/mastaimer_angle_35.png'
import angle36Img from './assets/images/mastaimer_angle_36.png'
import angle37Img from './assets/images/mastaimer_angle_37.png'
import angle38Img from './assets/images/mastaimer_angle_38.png'
import angle39Img from './assets/images/mastaimer_angle_39.png'
import angle40Img from './assets/images/mastaimer_angle_40.png'
import angle41Img from './assets/images/mastaimer_angle_41.png'
import angle42Img from './assets/images/mastaimer_angle_42.png'
import angle43Img from './assets/images/mastaimer_angle_43.png'
import angle44Img from './assets/images/mastaimer_angle_44.png'
import angle45Img from './assets/images/mastaimer_angle_45.png'
import angle46Img from './assets/images/mastaimer_angle_46.png'
import angle47Img from './assets/images/mastaimer_angle_47.png'
import angle48Img from './assets/images/mastaimer_angle_48.png'
import angle49Img from './assets/images/mastaimer_angle_49.png'
import angle50Img from './assets/images/mastaimer_angle_50.png'
import angle51Img from './assets/images/mastaimer_angle_51.png'
import angle52Img from './assets/images/mastaimer_angle_52.png'
import angle53Img from './assets/images/mastaimer_angle_53.png'
import angle54Img from './assets/images/mastaimer_angle_54.png'
import angle55Img from './assets/images/mastaimer_angle_55.png'
import angle56Img from './assets/images/mastaimer_angle_56.png'
import angle57Img from './assets/images/mastaimer_angle_57.png'
import angle58Img from './assets/images/mastaimer_angle_58.png'
import angle59Img from './assets/images/mastaimer_angle_59.png'
import angle60Img from './assets/images/mastaimer_angle_60.png'
import angle61Img from './assets/images/mastaimer_angle_61.png'
import angle62Img from './assets/images/mastaimer_angle_62.png'
import angle63Img from './assets/images/mastaimer_angle_63.png'
import angle64Img from './assets/images/mastaimer_angle_64.png'
import angle65Img from './assets/images/mastaimer_angle_65.png'
import angle66Img from './assets/images/mastaimer_angle_66.png'
import angle67Img from './assets/images/mastaimer_angle_67.png'
import angle68Img from './assets/images/mastaimer_angle_68.png'
import angle69Img from './assets/images/mastaimer_angle_69.png'
import angle70Img from './assets/images/mastaimer_angle_70.png'
import angle71Img from './assets/images/mastaimer_angle_71.png'
import angle72Img from './assets/images/mastaimer_angle_72.png'
import angle73Img from './assets/images/mastaimer_angle_73.png'
import angle74Img from './assets/images/mastaimer_angle_74.png'
import angle75Img from './assets/images/mastaimer_angle_75.png'
import angle76Img from './assets/images/mastaimer_angle_76.png'
import angle77Img from './assets/images/mastaimer_angle_77.png'
import angle78Img from './assets/images/mastaimer_angle_78.png'
import angle79Img from './assets/images/mastaimer_angle_79.png'
import angle80Img from './assets/images/mastaimer_angle_80.png'
import angle81Img from './assets/images/mastaimer_angle_81.png'
import angle82Img from './assets/images/mastaimer_angle_82.png'
import angle83Img from './assets/images/mastaimer_angle_83.png'
import angle84Img from './assets/images/mastaimer_angle_84.png'

const angleImgs = [
	angle1Img,
	angle2Img,
	angle3Img,
	angle4Img,
	angle5Img,
	angle6Img,
	angle7Img,
	angle8Img,
	angle9Img,
	angle10Img,
	angle11Img,
	angle12Img,
	angle13Img,
	angle14Img,
	angle15Img,
	angle16Img,
	angle17Img,
	angle18Img,
	angle19Img,
	angle20Img,
	angle21Img,
	angle22Img,
	angle23Img,
	angle24Img,
	angle25Img,
	angle26Img,
	angle27Img,
	angle28Img,
	angle29Img,
	angle30Img,
	angle31Img,
	angle32Img,
	angle33Img,
	angle34Img,
	angle35Img,
	angle36Img,
	angle37Img,
	angle38Img,
	angle39Img,
	angle40Img,
	angle41Img,
	angle42Img,
	angle43Img,
	angle44Img,
	angle45Img,
	angle46Img,
	angle47Img,
	angle48Img,
	angle49Img,
	angle50Img,
	angle51Img,
	angle52Img,
	angle53Img,
	angle54Img,
	angle55Img,
	angle56Img,
	angle57Img,
	angle58Img,
	angle59Img,
	angle60Img,
	angle61Img,
	angle62Img,
	angle63Img,
	angle64Img,
	angle65Img,
	angle66Img,
	angle67Img,
	angle68Img,
	angle69Img,
	angle70Img,
	angle71Img,
	angle72Img,
	angle73Img,
	angle74Img,
	angle75Img,
	angle76Img,
	angle77Img,
	angle78Img,
	angle79Img,
	angle80Img,
	angle81Img,
	angle82Img,
	angle83Img,
	angle84Img,
]

class MastAimer extends Component {
	state = {
		isDragging: false,
		currentAngle: 0,
		aimingAngle: 0,
		speed: 0.01 // NOTE: radians
	}

	setAimingAngle(angle) {
		this.setState({
			aimingAngle: angle,
		})
	}

	getAimingAngle(x, y) {
		return Math.atan2(y - 0.5, x - 0.5)
	}

	render() {
		let angleImgIndex = Math.round(
				this.state.aimingAngle / (Math.PI * 2) * angleImgs.length
				)
		if (angleImgIndex < 0) {
			angleImgIndex += angleImgs.length
		}
		return (
			<Container
				x={this.props.x}
				y={this.props.y}
				interactive={true}
				pointertap={() => {
					this.setState((prevState) => ({
						
					}))
				}}>
				<Sprite
					texture={PIXI.Texture.from(angleImgs[angleImgIndex])}
					x={0}
					y={0}
					/>
				<Sprite
					texture={PIXI.Texture.from(bgImg)}
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
