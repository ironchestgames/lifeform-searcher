import React, { Component } from 'react'
import { Container } from 'react-pixi-fiber'
import StatusBar from './StatusBar'
import {
  colors
} from './vars'

class Game extends Component {
  render() {
    return (
      <Container options={{ backgroundColor: colors.bg }}>
        <StatusBar x={3} y={3} width={100} statusText={'RUNNING'} />
      </Container>
    )
  }
}

export default Game
