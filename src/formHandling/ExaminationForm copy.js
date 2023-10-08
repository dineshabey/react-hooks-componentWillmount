
import React, { useState } from 'react'
import { useForm } from '../customHooks/useForm';


export default function ExaminationFormCopy() {

    const [values,handleChanges] = useForm();

    // const [index, setIndex] = useState('');
    // const [maths, setMaths] = useState('');
    // const [chemistry, setChemistry] = useState('');
    // const [physics, setPhysics] = useState('');
    // const [english, setEnglish] = useState('');


    const handleSubmit = () => {
        // const results = { index, maths, chemistry, physics, english };
        // console.log(results)

    };

    console.log(values);
    console.log(handleChanges);


    return (

        <div style={{ marginLeft: '30px' }}>
        <h2>Examination Copy</h2>
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                    <div style={{ marginTop: '15px' }}>
                        <label>Index number :</label>
                        <input name='indexNo' style={{ fontSize: '25px' }} onChange={handleChanges} />
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div style={{ marginTop: '15px' }}>
                        <label>Maths result :</label>
                        <input name='maths' style={{ fontSize: '25px' }} onChange={handleChanges} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Chemistry result :</label>
                        <input name='chemistry' style={{ fontSize: '25px' }} onChange={handleChanges} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Physics result :</label>
                        <input name='physics' style={{ fontSize: '25px' }} onChange={handleChanges} />
                    </div>
                </div>
                <div style={{ marginTop: '15px' }}>
                    <label>English result :</label>
                    <input name='english' style={{ fontSize: '25px' }} onChange={handleChanges} />
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
