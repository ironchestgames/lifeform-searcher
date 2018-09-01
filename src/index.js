import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import version from './version'

console.log('Lifeform Searcher ' + version)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
