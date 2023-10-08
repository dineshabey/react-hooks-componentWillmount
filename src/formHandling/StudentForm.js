import React, { useState } from 'react'

export default function StudentForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');


    const handleSubmit = () => {
        console.log(name)
        console.log(email)
        console.log(phone)
        console.log(address)
    };

    handleSubmit();

    return (
        <div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <div>

                    <div style={{ marginTop: '15px' }}>
                        <label>Name :</label>
                        <input style={{ fontSize: '25px' }} onChange={e => setName(e.target.value)} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Email :</label>
                        <input style={{ fontSize: '25px' }} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Phone :</label>
                        <input style={{ fontSize: '25px' }} onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Address :</label>
                        <input style={{ fontSize: '25px' }} onChange={e => setAddress(e.target.value)}/>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>

                        <button style={{ fontSize: '20px' }}>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
