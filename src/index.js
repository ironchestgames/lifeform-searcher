import React from 'react'
import ReactDOM from 'react-dom'
import { registerObserver } from 'react-perf-devtool'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import version from './version'

console.log('Lifeform Searcher ' + version)

// assign the observer to the global scope, as the GC will delete it otherwise
window.observer = registerObserver()

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
