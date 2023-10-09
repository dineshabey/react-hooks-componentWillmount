import React, { useState } from 'react'
import { useForm } from '../customHooks/useForm';




export default function StudentForm() {

    const [values,handleChange] = useForm();

    console.log(values);
    console.log(handleChange);

    return (
        <div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <div>

                    <div style={{ marginTop: '15px' }}>
                        <label>Name :</label>
                        <input name='name' style={{ fontSize: '25px' }} onChange={handleChange} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>NIC :</label>
                        <input name='nic' style={{ fontSize: '25px' }} onChange={handleChange} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Email :</label>
                        <input name='email' style={{ fontSize: '25px' }} onChange={handleChange} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Phone :</label>
                        <input name='phone' style={{ fontSize: '25px' }} onChange={handleChange} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Address :</label>
                        <input name='address' style={{ fontSize: '25px' }} onChange={handleChange} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>

                        <button style={{ fontSize: '20px' }} >
                            {''}
                            Submit
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
