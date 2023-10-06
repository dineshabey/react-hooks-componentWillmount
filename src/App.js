
import { type } from '@testing-library/user-event/dist/type';
import { useRef, useState } from 'react';

function App() {
  // const [bgColor, setBgColor] = useState('teal');
  const [isFocus, setIsFocus] = useState('teal');
  const [count, setCount] = useState(0);

  const myDivRef = useRef();
  const myInputRef = useRef();

  // const  handleChange = () => {
  //   // setBgColor('pink');
  //   // setIsFocus('true');
  //   console.log(myDivRef.current);
  //   myDivRef.current.style.backgroundColor = 'pink';
  //   myInputRef.current.focus();
  // };

  const handleChange = (type) => {

    console.log(type)
    
    switch (type) {
      case 'bgCPink':
        myDivRef.current.style.backgroundColor = 'pink';
        break;
      case 'bgCTeal':
        myDivRef.current.style.backgroundColor = 'teal';
        break;
      case 'marginLeft':
        myDivRef.current.style.marginLeft = 'marginLeft';
        break;
      case 'marginRight':
        myDivRef.current.style.marginRight = 'marginRight';
        break;
      case 'boder':
        // myDivRef.current.style.boder = '2x solid red';
        myDivRef.current.style.boderRadius = '40px';

        break;
      case 'boderR':
        myDivRef.current.style.fontSize = '40px';
        break;

      default:
        return;
    }
  }
  console.log('first')

  return (
    <div style={{ marginLeft: '10px' }}>
      <button onClick={() => handleChange("bgCPink")}>Bg PINK</button>
      <button onClick={() => handleChange("bgCTeal")}>Bg Teal</button>
      <button onClick={() => handleChange("marginLeft")}>Margin Left</button>
      <button onClick={() => handleChange("marginRiht")}>Margin Right</button>
      <button onClick={() => handleChange("boder")}>Boder</button>
      <button onClick={() => handleChange("boderR")}>Boder Radius</button>
      <button onClick={() => handleChange}>Height</button>
      <button onClick={() => handleChange}>Width</button>
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}>Count +</button>
      <br />
      <br />
      <input />
      <br />
      <br />
      <input ref={myInputRef} />
      <br />
      <br />


      <div
        ref={myDivRef}
        style={{
          width: '100px',
          height: '100px',
          // backgroundColor: bgColor,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boderRadius:'40px'
        
        }}>

        <h1>{count}</h1>

      </div>
    </div>
  );
}

export default App;
