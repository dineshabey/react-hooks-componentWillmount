import React, { useState } from 'react'
import LearnReference from './learnRef/LearnReference'

export default function App() {
  const [isVisible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => { setVisible(!isVisible) }}>Show ref components</button>
      {isVisible && <LearnReference />}
    </div>
  )
}
