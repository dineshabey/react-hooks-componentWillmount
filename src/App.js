
import { useState } from 'react';

function App() {
  // const [bgColor, setBgColor] = useState('teal');
  const [isFocus, setIsFocus] = useState('teal');
  const [count, setCount] = useState(0);

  // const []

  const handleChangeColor = () => {
    // setBgColor('pink');
    // setIsFocus('true');
  };



  return (
    <div style={{ marginLeft: '10px' }}>
      <button onClick={handleChangeColor}>Color change to PINK</button>
      <br/>
      <br/>
      <button onClick={() => setCount(count + 1)}>Count +</button>
      <br />
      <br />
      <input autoFocus={false} />
      <br />
      <br />
      <input />
      <br />
      <br />


      <div
        style={{
          width: '100px',
          height: '100px',
          // backgroundColor: bgColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        <h1>{count}</h1>

      </div>
    </div>
  );
}

export default App;
