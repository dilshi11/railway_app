import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom'

export default function AdminLogin() {
    const direct = useNavigate()

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [wrong, setWrong] = useState('')

    function submit(e) {
        e.preventDefault()
        if (email == 'dilshi@gmail.com' && pass == '123') {
            direct('/panel')
        } else {
            setWrong('Invalid Details ')
        }
    }

    return (
        <div style={{ backgroundColor: "lightblue", height: "100vh", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} className='wrapper__form'>
            <Form onSubmit={submit} style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
                <h2 className='text-center m-3 text-danger'>Railway Department</h2>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => {
                        setEmail(e.target.value)
                    }} value={email} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => {
                        setPass(e.target.value)
                    }} value={pass} type="password" placeholder="Password" required />
                </Form.Group>
                <Button style={{ width: "100%" }} variant="info" type="submit">
                    Login
                </Button>
                {wrong && <><h4 style={{ color: 'red', textAlign: 'center', margin: "2rem 0" }}>{wrong}</h4></>}

            </Form>

        </div>
    )
}
