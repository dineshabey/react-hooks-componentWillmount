import React, { useState } from 'react'

export default function StudentForm() {
    const [name, setName] = useState('');
    const [nic, setNic] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');


    const handleSubmit = () => {
        const student = { name, nic, email, phone, address };
        console.log(student)

    };


    return (
        <div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <div>

                    <div style={{ marginTop: '15px' }}>
                        <label>Name :</label>
                        <input style={{ fontSize: '25px' }} onChange={e => setName(e.target.value)} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>NIC :</label>
                        <input style={{ fontSize: '25px' }} onChange={e => setNic(e.target.value)} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Email :</label>
                        <input style={{ fontSize: '25px' }} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Phone :</label>
                        <input style={{ fontSize: '25px' }} onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Address :</label>
                        <input style={{ fontSize: '25px' }} onChange={e => setAddress(e.target.value)} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>

                        <button style={{ fontSize: '20px' }} onClick={handleSubmit}>
                            {''}
                            Submit
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}
