import React from 'react'
import Heading from './Heading'
import train from './images/train.webp'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function About() {
    return (
        <>
            <Heading />
            <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f5f7fa' }}>
                <div style={{ maxWidth: 1200, margin: '50px auto', padding: 20, backgroundColor: '#fff', borderRadius: 10, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>
                    <div style={{ padding: 30, backgroundColor: '#eceff1', borderRadius: 10, marginBottom: 20 }}>
                        <h2 style={{ fontSize: 24, marginBottom: 20 }}>About Sri Lanka Railway Department</h2>
                        <p style={{ fontSize: 18, lineHeight: 1.6, color: '#555' }}>
                            The Sri Lanka Railway Department, established with a vision to connect communities and foster transportation accessibility, has been serving the nation for decades. With a commitment to providing safe, reliable, and efficient railway services, we strive to enhance the travel experience for all passengers across the island.
                        </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                        <div style={{ flexBasis: 'calc(25% - 20px)', padding: 20, backgroundColor: '#fff', borderRadius: 10, textAlign: 'center' }}>
                            <h3 style={{ fontSize: 20, marginBottom: 10 }}>Decades</h3>
                            <p style={{ fontSize: 18, color: '#555' }}>Serving the Nation</p>
                        </div>
                        <div style={{ flexBasis: 'calc(25% - 20px)', padding: 20, backgroundColor: '#fff', borderRadius: 10, textAlign: 'center' }}>
                            <h3 style={{ fontSize: 20, marginBottom: 10 }}>1000+</h3>
                            <p style={{ fontSize: 18, color: '#555' }}>Kilometers of Railway Network</p>
                        </div>
                        <div style={{ flexBasis: 'calc(25% - 20px)', padding: 20, backgroundColor: '#fff', borderRadius: 10, textAlign: 'center' }}>
                            <h3 style={{ fontSize: 20, marginBottom: 10 }}>24/7</h3>
                            <p style={{ fontSize: 18, color: '#555' }}>Customer Support</p>
                        </div>
                        <div style={{ flexBasis: 'calc(25% - 20px)', padding: 20, backgroundColor: '#fff', borderRadius: 10, textAlign: 'center' }}>
                            <h3 style={{ fontSize: 20, marginBottom: 10 }}>Millions</h3>
                            <p style={{ fontSize: 18, color: '#555' }}>Passengers Served Annually</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 30 }}>
                        <img src={train} alt="Team Image" style={{ width: 200, height: 'auto', borderRadius: '20%', marginBottom: 10 }} />
                        <p>Sri Lanka Railway Department</p>
                    </div>
                </div>
            </div>

           
            <MDBFooter className='footer bg-danger text-center text-white'>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className='text-white' href='https://mdbootstrap.com/'>
                        Sri Lanka Railway Department.com
                    </a>
                </div>
            </MDBFooter>
        </>
    )
}
