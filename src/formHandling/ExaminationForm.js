
import React, { useState } from 'react'

export default function ExaminationForm() {
    const [index, setIndex] = useState('');
    const [maths, setMaths] = useState('');
    const [chemistry, setChemistry] = useState('');
    const [physics, setPhysics] = useState('');
    const [english, setEnglish] = useState('');


    const handleSubmit = () => {
        const results = { index, maths, chemistry, physics, english };
        console.log(results)

    };


    return (
        <div style={{ marginLeft: '30px' }}>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <div style={{ marginTop: '15px' }}>
                        <label>Index number :</label>
                        <input style={{ fontSize: '25px' }} onChange={e => setIndex(e.target.value)} />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ marginTop: '15px' }}>
                        <label>Maths result :</label>
                        <input style={{ fontSize: '25px' }} onChange={e => setMaths(e.target.value)} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Chemistry result :</label>
                        <input style={{ fontSize: '25px' }} onChange={e => setChemistry(e.target.value)} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Physics result :</label>
                        <input style={{ fontSize: '25px' }} onChange={e => setPhysics(e.target.value)} />
                    </div>
                </div>
                <div style={{ marginTop: '15px' }}>
                    <label>English result :</label>
                    <input style={{ fontSize: '25px' }} onChange={e => setEnglish(e.target.value)} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>

                <button style={{ fontSize: '20px' }} onClick={handleSubmit}>
                    {''}
                    Submit</button>
            </div>

        </div>
    )
}
