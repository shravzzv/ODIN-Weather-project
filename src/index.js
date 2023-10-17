import React from 'react'
import { createRoot } from 'react-dom/client'
import 'normalize.css'
import './main.css'
import App from './app.jsx'

const root = createRoot(document.getElementById('root'))
root.render(<App />)
