import React, { Component } from 'react'
import { Container } from 'react-pixi-fiber'
import FrameArea from './FrameArea'
import StatusBar from './StatusBar'
import FrequencyTuner from './FrequencyTuner'
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
        <FrequencyTuner x={3} y={59} />
      </Container>
    )
  }
}

export default Game
