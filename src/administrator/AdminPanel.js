import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Swal from 'sweetalert2';
import { BrowserRouter } from 'react-router-dom';

export default function AdminPanel() {
    const [trains, setTrains] = useState([]);
    const [newTrain, setNewTrain] = useState({
        arrivalLocation: '',
        depatureLocation: '',
        price: '',
        date: ''
    });

    const API = 'https://localhost:7180/api/Values';

    useEffect(() => {
        getData();
    }, []);

    function getData() {
        fetch(API)
            .then(response => response.json())
            .then(info => {
                setTrains(info);
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function remove(id) {
        fetch(`${API}/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete item');
                }
                const updatedTrains = trains.filter(train => train.id !== id);
                setTrains(updatedTrains);
            })
            .catch(error => console.error('Error deleting item:', error));
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setNewTrain(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function addTrain() {
        fetch(API, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTrain),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add new train');
                }
                return response.json();
            })
            .then(data => {
                setTrains(prevTrains => [...prevTrains, data]);
                setNewTrain({
                    arrivalLocation: '',
                    depatureLocation: '',
                    price: '',
                    date: ''
                });
                Swal.fire('Success', 'New train added successfully!', 'success');
            })
            .catch(error => {
                console.error('Error adding new train:', error);
                Swal.fire('Error', 'Failed to add new train', 'error');
            });
    }

    async function update(id) {
        const trainToUpdate = trains.find(train => train.id === id);
        const { value: formValues } = await Swal.fire({
            title: "Update Train Information",
            html: `
                <input id="swal-input1" class="swal2-input" placeholder="New Arrival Location" value="${trainToUpdate.arrivalLocation}">
                <input id="swal-input2" class="swal2-input" placeholder="New Departure Location" value="${trainToUpdate.depatureLocation}">
                <input id="swal-input3" class="swal2-input" placeholder="New Price" value="${trainToUpdate.price}">
                <input id="swal-input4" class="swal2-input" type="date" placeholder="New Date" value="${trainToUpdate.date}">
            `,
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById("swal-input1").value,
                    document.getElementById("swal-input2").value,
                    document.getElementById("swal-input3").value,
                    document.getElementById("swal-input4").value
                ];
            }
        });

        if (formValues) {
            const updatedTrain = {
                ...trainToUpdate,
                arrivalLocation: formValues[0],
                depatureLocation: formValues[1],
                price: formValues[2],
                date: formValues[3]
            };

            fetch(`${API}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTrain),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to update train information');
                    }
                    // Update state to reflect changes
                    const updatedTrains = trains.map(train =>
                        train.id === id ? updatedTrain : train
                    );
                    setTrains(updatedTrains);
                    // Optionally, display a success message
                    Swal.fire('Success', 'Train information updated successfully!', 'success');
                })
                .catch(error => {
                    console.error('Error updating train information:', error);
                    Swal.fire('Error', 'Failed to update train information', 'error');
                });
        }
    }

    return (
        <div style={{ height: '100vh', padding: '2rem 0', backgroundColor: 'lightslategray' }} className='container_horizontal'>
            <Form style={{ width: '800px', margin: 'auto', padding: '1rem', border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <Form.Group className="mb-3 " controlId="arrivalLocation">
                    <Form.Label>Arrival Location</Form.Label>
                    <Form.Control type="text" name="arrivalLocation" value={newTrain.arrivalLocation} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="depatureLocation">
                    <Form.Label>Departure Location</Form.Label>
                    <Form.Control type="text" name="depatureLocation" value={newTrain.depatureLocation} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" name="price" value={newTrain.price} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" name="date" value={newTrain.date} onChange={handleInputChange} />
                </Form.Group>

                <Button variant="info" type="button" onClick={addTrain}>
                    Add
                </Button>
            </Form>
            <TableContainer>
                <Table sx={{ maxWidth: '1000px', margin: '1rem auto', border: '1px solid black' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ color: 'black', fontWeight: '600', backgroundColor: 'lightblue' }}>Edit or Delete</TableCell>
                            <TableCell style={{ color: 'black', fontWeight: '600', backgroundColor: 'lightblue' }}>Arrival Location</TableCell>
                            <TableCell style={{ color: 'black', fontWeight: '600', backgroundColor: 'lightblue' }}>Departure Location</TableCell>
                            <TableCell style={{ color: 'black', fontWeight: '600', backgroundColor: 'lightblue' }}>Price</TableCell>
                            <TableCell style={{ color: 'black', fontWeight: '600', backgroundColor: 'lightblue' }}>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {trains.map(train => (
                            <TableRow key={train.id}>
                                <TableCell>
                                    <Button style={{ margin: '0 0.3rem' }} onClick={() => update(train.id)} variant='info'>Update</Button>
                                    <Button onClick={() => remove(train.id)} variant='info'>Remove</Button>
                                </TableCell>
                                <TableCell>{train.arrivalLocation}</TableCell>
                                <TableCell>{train.depatureLocation}</TableCell>
                                <TableCell>{train.price}</TableCell>
                                <TableCell>{train.date}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
