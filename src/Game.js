import React, { Component } from 'react'
import { Container, Sprite } from 'react-pixi-fiber'
import * as PIXI from 'pixi.js'
import StatusBar from './StatusBar'
import {
  colors
} from './vars'

import imgFrames from './assets/images/frames.png'

class Game extends Component {
  render() {
    return (
      <Container options={{ backgroundColor: colors.bg }}>
        <Sprite texture={PIXI.Texture.fromImage(imgFrames)} />
        <StatusBar x={3} y={3} width={80} statusText={'RUNNING'} />
      </Container>
    )
  }
}

export default Game
