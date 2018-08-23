import React, { Component } from 'react'
import { Stage, Container } from 'react-pixi-fiber'
import Loading from './Loading'
import OnButton from './OnButton'
import * as PIXI from 'pixi.js'
import {
  colors,
  zoomScale,
  gameWidth,
  gameHeight
} from './vars'

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST

class App extends Component {
  state = {
    isLoadingDone: false,
  }

  onLoadingComplete() {
    console.log('Loader is complete')
    this.setState(function () {
      return {
        isLoadingDone: true
      }
    })
  }

  render() {
    return (
      <Stage
        width={gameWidth * zoomScale}
        height={gameHeight * zoomScale}
        options={{ backgroundColor: colors.bg }}>
        <Container scale={zoomScale}>
          { this.state.isLoadingDone ?
            <OnButton x={3} y={3} width={100} /> :
            <Loading onComplete={this.onLoadingComplete.bind(this)} />
          }
        </Container>
      </Stage>
    )
  }
}

export default App
