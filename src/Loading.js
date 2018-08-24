import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-pixi-fiber'

class Loading extends Component {

	componentDidMount() {
		this.context.app.renderer.plugins.interaction.moveWhenInside = true

		const loader = this.context.app.loader

		// NOTE: load bitmap font like this (webpack messes it up otherwise)
		const fntPath = process.env.PUBLIC_URL + '/ironchestcapitalpx.fnt'
		const pngPath = process.env.PUBLIC_URL + '/ironchestcapitalpx.png'

		loader
		.add(pngPath)
		.add(fntPath)

		loader.onError.add(function (error, loader, resource) {
			console.log('error', error)
		})

		loader.load((loader, resources) => {
			this.props.onComplete()
		})
	}

	render() {
		return (
			<Container>
				{/* TODO: show loading progress */}
			</Container>
		)
	}
}


Loading.contextTypes = {
	app: PropTypes.object,
}

export default Loading
