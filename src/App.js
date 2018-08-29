import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Stage, Container } from 'react-pixi-fiber'
import Loading from './Loading'
import Game from './Game'
import * as PIXI from 'pixi.js'
import {
  colors,
  zoomScale,
  gameWidth,
  gameHeight
} from './vars'

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST

const initalState = {
  mast_frequency: 0.5,
}

const reducer = function (state = initalState, action) {
  switch (action.type) {
    case 'SET_MAST_FREQUENCY':
      return {
        ...state,
        mast_frequency: action.value,
      }

    default:
      return state
  }
}

const gameModel = createStore(reducer)

class App extends Component {
  state = {
    isLoadingDone: false,
  }

  onLoadingComplete() {
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
            <Provider store={gameModel}>
              <Game />
            </Provider> :
            <Loading onComplete={this.onLoadingComplete.bind(this)} />
          }
        </Container>
      </Stage>
    )
  }
}

export default App
