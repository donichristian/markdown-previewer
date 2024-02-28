import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Markdown from './markdown.jsx'
import Footer from './footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Markdown />
    <Footer />
  </React.StrictMode>,
)
