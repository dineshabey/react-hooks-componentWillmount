
import React, { useState } from 'react'
import { useForm } from '../customHooks/useForm';


export default function ExaminationFormCopy() {

    const [{ maths, chemistry, physics, english }, handleChanges, handleSubmit] = useForm({ maths: 0, chemistry: 0, physics: 0, english: 0 });
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
                        <input value={maths} name='maths' style={{ fontSize: '25px' }} onChange={handleChanges} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Chemistry result :</label>
                        <input value={chemistry} name='chemistry' style={{ fontSize: '25px' }} onChange={handleChanges} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Physics result :</label>
                        <input value={physics} name='physics' style={{ fontSize: '25px' }} onChange={handleChanges} />
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
