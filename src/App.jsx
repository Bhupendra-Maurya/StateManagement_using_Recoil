import React from 'react'
import { RecoilRoot } from 'recoil'
import Counter from './components/Counter'

const App = () => {
  return (
    <RecoilRoot>
      <Counter/>
    </RecoilRoot>
  )
}

export default App
