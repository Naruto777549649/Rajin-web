import React from 'react'
import ReactDOM from 'react-dom/client'

const Page2 = () => <h1>This is Page 2</h1>

ReactDOM.createRoot(document.getElementById('page2-root')).render(
  <React.StrictMode>
    <Page2 />
  </React.StrictMode>
)
