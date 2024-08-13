import { useState } from 'react'

import './App.css'
import Header from './Components/Header'
// import Body from './Components/Body'
import { Provider } from 'react-redux'
import { store } from './utils/store'
import Body from './Components/Body'

function App() {
  

  return (
    <>
    <Provider store={store} >
      <Header />
      <Body />
    </Provider>
    
    </>
  )
}

export default App
