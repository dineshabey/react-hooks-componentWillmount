import React from 'react'

export default function StudentForm() {
    return (
        <div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <div>

                    <div style={{ marginTop: '15px' }}>
                        <label>Name :</label>
                        <input style={{ fontSize: '25px' }} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Email :</label>
                        <input style={{ fontSize: '25px' }} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Phone :</label>
                        <input style={{ fontSize: '25px' }} />
                    </div>
                    <div style={{ marginTop: '15px' }}>
                        <label>Address :</label>
                        <input style={{ fontSize: '25px' }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>

                        <button style={{fontSize:'20px'}}>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
