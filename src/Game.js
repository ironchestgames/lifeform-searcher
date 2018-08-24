import React, { Component } from 'react'
import { Container, Sprite } from 'react-pixi-fiber'
import * as PIXI from 'pixi.js'
import StatusBar from './StatusBar'
import FrameArea from './FrameArea'
import { colors } from './vars'

class Game extends Component {
  render() {
    return (
      <Container>
        <FrameArea
          color={colors.bg}
          frameColor={colors.frames}
          width={86}
          height={94}
          />
        <StatusBar x={3} y={3} width={80} statusText={'RUNNING'} />
      </Container>
    )
  }
}

export default Game
