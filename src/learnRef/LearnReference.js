import { type } from '@testing-library/user-event/dist/type';
import { useEffect, useRef, useState } from 'react';


function LearnReference() {
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

    
    /*
    Under useEffet hooks how to use componentWillUnmount
    */

    useEffect(() => {
        const onMousemove = e => {
            console.log('X', e.x);
            console.log('Y', e.y);
        };

        window.addEventListener('mousemove', onMousemove);
        //stop event listner (clean-up function)
        return () => {

            window.removeEventListener('mousemove', onMousemove);
        };

    }, []);


    const handleChange = (type) => {

        // console.log(type)

        switch (type) {
            case 'bgCPink':
                myDivRef.current.style.backgroundColor = 'pink';
                break;
            case 'bgCTeal':
                myDivRef.current.style.backgroundColor = 'teal';
                break;
            case 'marginLeft':
                myDivRef.current.style.marginLeft = '100px';
                break;
            case 'marginTop':
                myDivRef.current.style.marginTop = '20px';
                break;
            case 'boder':
                myDivRef.current.style.boder = '2px solid blue';
                // console.log(myDivRef.current.style.boder);
                break;
            case 'boderR':
                myDivRef.current.style.boderRadius = '40px';
                console.log(myDivRef.current.style.boderRadius);
                break;
            case 'height':
                myDivRef.current.style.height = '200px';
                break;
            case 'width':
                console.log(parseInt(myDivRef.current.style.width) + 100);
                myDivRef.current.style.width = parseInt(myDivRef.current.style.width) + 100 + 'px';
                break;


            default:
                return;
        }
    }


    return (
        <div style={{ marginLeft: '10px' }}>
            <button onClick={() => handleChange("bgCPink")}>Bg PINK</button>
            <button onClick={() => handleChange("bgCTeal")}>Bg Teal</button>
            <button onClick={() => handleChange("marginLeft")}>Margin Left</button>
            <button onClick={() => handleChange("marginTop")}>Margin Top</button>
            <button onClick={() => handleChange("boder")}>Boder</button>
            <button onClick={() => handleChange("boderR")}>Boder Radius</button>
            <button onClick={() => handleChange("height")}>Height</button>
            <button onClick={() => handleChange("width")}>Width</button>
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

                }}>

                <h1>{count}</h1>

            </div>
        </div>
    );
}

export default LearnReference;
