import React, { Component } from "react";
import { Stage } from "react-pixi-fiber";
import SimpleRect from "./SimpleRect"

// PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST

class App extends Component {
  render() {
    return (
      <Stage width={800} height={600} options={{ backgroundColor: 0x10bb99 }}>
        <SimpleRect />
      </Stage>
    )
  }
}

export default App
