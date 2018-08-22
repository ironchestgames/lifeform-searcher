import React, { Component } from 'react'
import { Stage, Container } from 'react-pixi-fiber'
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
  render() {
    return (
      <Stage
        width={gameWidth * zoomScale}
        height={gameHeight * zoomScale}
        options={{ backgroundColor: colors.bg }}>
        <Container scale={zoomScale}>
          <OnButton x={3} y={3} width={100} />
        </Container>
      </Stage>
    )
  }
}

export default App
