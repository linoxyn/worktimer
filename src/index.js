import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from 'styled-components'

injectGlobal`

:root {
  box-sizing: border-box;
  color: #beb4ab;
  font-family: sans-serif;
  font-size: 18px;
  height: 100%;
}
@media (min-width: 900px) {
  :root {
    font-size: 19px;
  }
}
@media (min-width: 1200px) {
  :root {
    font-size: 20px;
  }
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  background-color: #342f28;
  display: grid;
  font-family: sans-serif;
  height: 100vh;
  margin: .3rem;
  overflow: hidden;
}

.root {
  height: 100%;
  margin: 0;
  background-color: #342f28;
  color: #beb4ab;
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  font-size: 2rem;
}


h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0;
  margin-top: 0;
}

p {
  line-height: 1.3rem;
  margin-bottom: 0;
  margin-top: 0;

}

a {
  text-decoration: none;
  color: inherit;
}`

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
