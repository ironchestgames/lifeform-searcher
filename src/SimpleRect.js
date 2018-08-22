import React, { Component } from "react";
import { Texture } from 'pixi.js'
import { Sprite } from "react-pixi-fiber";

class SimpleRect extends Component {
	state = {
		width: 100,
		tint: 0x000000,
	}

	render() {
		return (
			<Sprite
				texture={Texture.WHITE}
				x={100}
				y={100}
				width={this.state.width}
				height={100}
				rotation={0.5}
				tint={this.state.tint}
				interactive={true}
				pointertap={() => {
					this.setState(prevState => ({
						width: prevState.width + 50,
						tint: prevState.tint + 0x151515,
					}))
				}}
				/>
		)
	}
}

export default SimpleRect
