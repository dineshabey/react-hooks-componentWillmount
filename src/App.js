import React, { useState } from 'react'
import LearnReference from './learnRef/LearnReference'
import StudentForm from './formHandling/StudentForm';

export default function App() {
  const [isVisible, setVisible] = useState(false);
  return (
    <div>
      {/* <button onClick={() => { setVisible(!isVisible) }}>Show ref components</button>
      {isVisible && <LearnReference />} */}

      <StudentForm />

    </div>
  )
}
