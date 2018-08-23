import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Text } from 'react-pixi-fiber'
import * as PIXI from 'pixi.js'

class Loading extends Component {

	componentDidMount() {
		console.log('LOADING...')
    const loader = this.context.app.loader
    loader.add('./assets/fonts/ironchest-capitalpx.fnt')
    loader.add('./assets/fonts/ironchest-capitalpx.png')
    loader.load((loader, resources) => {
    	console.log('LOADER DONE')
    	console.log(resources)
    	console.log(PIXI.BitmapText.fonts)
    	this.props.onComplete()
    })
  }

	render() {
		return (
			<Container>
			</Container>
		)
	}
}


Loading.contextTypes = {
  app: PropTypes.object,
}

export default Loading
