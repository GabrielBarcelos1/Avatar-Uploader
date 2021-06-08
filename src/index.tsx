import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyle } from './helpers/HelperStyles'
import Uploader from './pages/Uploader/Uploader'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Uploader />
  </React.StrictMode>,
  document.getElementById('root'),
)
