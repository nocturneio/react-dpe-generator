import React from 'react'
import { DPE, GES } from 'react-dpe-generator'

const App = () => {
  return (
    <>
      <DPE value={200} shadow={true} lang={"fr"}/>
      <GES value={50} shadow={false} lang={"en"}/>
    </>
  )
}

export default App
