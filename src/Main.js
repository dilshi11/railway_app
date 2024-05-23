import React from 'react';
import Heading from './Heading';
import train1 from './images/train-1.jpg'
import './style.css';
import train2 from './images/train-2.webp'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom'


export default function Main() {

    const direct = useNavigate()
    return (
        <>
            <Heading />
            <div className="containerad">
                <div className="header">
                    <h2>Sri Lankan Railway Department</h2>
                </div>
                <div className="illustration">
                    <img src={train1} alt="Train Illustration" style={{ width: "100%" }} />
                </div>
                <div className="content">
                    <p>Welcome to the Sri Lankan Railway Department! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus justo et placerat ullamcorper. Vestibulum malesuada metus nec sem congue efficitur. Nulla aliquam tincidunt volutpat. Phasellus at nisi id turpis mollis volutpat.</p>
                    <p>Whether you're commuting for work or traveling for leisure, we offer convenient and reliable train services across Sri Lanka.</p>
                    <ul>
                        <li>Fast ticket sales.</li>
                        <li>Multiple payment options.</li>
                        <li>Unparalleled service at modest rates.</li>
                    </ul>
                    <button style={{ border: "none" }} onClick={() => {
                        direct('/book-train')
                    }} className="button bg-danger">Book Now</button>
                </div>
            </div>


            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
                <h1 style={{ textAlign: 'center' }}>Sri Lanka Railway Tracker</h1>
                <p style={{ textAlign: 'center' }}>Sri Lanka Railways offers a network of train routes that connect various cities and regions across the country, offering scenic views and convenient transportation options for travelers. Here is a list of some of the notable train routes operated by Sri Lanka Railways:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <div style={{ width: '300px', margin: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                        <h2 className='bg-danger' style={{ backgroundColor: '#007ACC', color: '#fff', padding: '10px', textAlign: 'center', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>Colombo to Kandy</h2>
                        <p style={{ padding: '10px' }}>This scenic train route takes travelers from the bustling city of Colombo to the picturesque hill city of Kandy, passing through lush greenery, tea plantations, and beautiful landscapes along the way.</p>
                        <p style={{ padding: '10px' }}>Stations: Colombo Fort, Kandy</p>
                    </div>
                    <div style={{ width: '300px', margin: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                        <h2 className='bg-danger' style={{ backgroundColor: '#007ACC', color: '#fff', padding: '10px', textAlign: 'center', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>Colombo to Galle</h2>
                        <p style={{ padding: '10px' }}>This coastal train route offers stunning views of the Indian Ocean as it travels from Colombo to the historic city of Galle. Passengers can enjoy scenic views of beaches, palm trees, and coastal villages along the way.</p>
                        <p style={{ padding: '10px' }}>Stations: Colombo Fort, Galle</p>
                    </div>
                    <div style={{ width: '300px', margin: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                        <h2 className='bg-danger' style={{ backgroundColor: '#007ACC', color: '#fff', padding: '10px', textAlign: 'center', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>Colombo to Badulla</h2>
                        <p style={{ padding: '10px' }}>This scenic train journey takes passengers from Colombo to Badulla, traversing through the scenic hill country of Sri Lanka. Travelers can enjoy breathtaking views of mountains, waterfalls, and tea estates along the way.</p>
                        <p style={{ padding: '10px' }}>Stations: Colombo Fort, Badulla</p>
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
    );
}
