import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./style.css";

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Reservation() {
  const [arrivalLocation, setArrivalLocation] = useState("");
  const [departureLocation, setdepatureLocation] = useState("");
  const [date, setDate] = useState("");
  const [filteredTrains, setFilteredTrains] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [data, setData] = useState([]);
  const [selectedTrainData, setSelectedTrainData] = useState(null);

  useEffect(() => {
    fetchTrainData();
  }, []);

  const fetchTrainData = async () => {
    try {
      const response = await fetch("https://localhost:7180/api/Values");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching train data:", error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://localhost:7180/api/Values/detail?arrivalLocation=${arrivalLocation}&depatureLocation=${departureLocation}&date=${date}`
    )
      .then((res) => res.json())
      .then((data) => {
        setFilteredTrains(data);
        setSelectedRow(null);
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleBook = (train) => {
    setSelectedTrainData(train);
  };

  return (
    <>
      <Heading />

      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="box"
      >
        <Form
          onSubmit={handleFormSubmit}
          style={{
            width: "500px",
            margin: "2rem auto",
            padding: "1rem",
            border: "1px solid black",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            borderRadius: "10px",
          }}
        >
          <h3 className="text-center text-danger">Select Your Train</h3>

          <Form.Group className="mb-3 " controlId="arrivalLocation">
            <Form.Label>Arrival Location</Form.Label>
            <Form.Select
              value={arrivalLocation}
              onChange={(e) => setArrivalLocation(e.target.value)}
            >
              <option>Choose...</option>
              {data.map((detail) => {
                return (
                  <option key={detail.id}>{detail.arrivalLocation}</option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="departureLocation">
            <Form.Label>Departure Location</Form.Label>
            <Form.Select
              value={departureLocation}
              onChange={(e) => setdepatureLocation(e.target.value)}
            >
              <option value="">Choose...</option>
              {data.map((detail) => {
                return (
                  <option key={detail.id}>{detail.depatureLocation}</option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>

          <Button variant="danger" type="submit">
            Submit
          </Button>
        </Form>
        {filteredTrains && (
          <>
            {/* <TableContainer style={{ maxWidth: "1000px" }} variant="danger">
              <Table
                sx={{
                  maxWidth: "800px",
                  margin: "1rem auto",
                  border: "1px solid black",
                }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "600",
                        backgroundColor: "lightblue",
                      }}
                    >
                      Edit or Delete
                    </TableCell>
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "600",
                        backgroundColor: "lightblue",
                      }}
                    >
                      Arrival Location
                    </TableCell>
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "600",
                        backgroundColor: "lightblue",
                      }}
                    >
                      Departure Location
                    </TableCell>
                 
                    <TableCell
                      style={{
                        color: "black",
                        fontWeight: "600",
                        backgroundColor: "lightblue",
                      }}
                    >
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredTrains.map((datas) => (
                    <TableRow key={datas.id}>
                      <TableCell>
                        <Button
                          style={{ margin: "0 0.3rem" }}
                          variant="danger"
                          onClick={() => handleBook(datas)}
                        >
                          Book Now
                        </Button>
                      </TableCell>
                      <TableCell>{datas.arrivalLocation}</TableCell>
                      <TableCell>{datas.departureLocation}</TableCell>
                      <TableCell>{datas.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer> */}

            {filteredTrains.map((datas) => (
              <div key={datas.id}>
                <div>
                  <Button
                    style={{ margin: "0 0.3rem" }}
                    variant="danger"
                    onClick={() => handleBook(datas)}
                  >
                    Book Now
                  </Button>
                </div>
                <h2>{datas.arrivalLocation}</h2>
                <h2>{datas.departureLocation}</h2>
                <h2>{datas.date}</h2>
              </div>
            ))}
          </>
        )}
      </div>
      {selectedTrainData && (
        <>
          <Form
            onSubmit={() => {
              alert("Train Book Successfull");
            }}
            style={{
              width: "500px",
              margin: "2rem 13rem",
              padding: "1rem",
              border: "1px solid black",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              borderRadius: "10px",
            }}
          >
            <h3 className="text-center text-danger">Book Your Train</h3>
            <Form.Group className="mb-3 " controlId="arrivalLocation">
              <Form.Label>Arrival Location</Form.Label>
              <Form.Control
                type="text"
                value={
                  selectedTrainData ? selectedTrainData.arrivalLocation : ""
                }
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="departureLocation">
              <Form.Label>Departure Location</Form.Label>
              <Form.Control
                type="text"
                value={
                  selectedTrainData ? selectedTrainData.departureLocation : ""
                }
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="text"
                value={selectedTrainData ? selectedTrainData.date : ""}
                readOnly
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>NIC number</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Seats No</Form.Label>
              <Form.Control
                type="number"
                placeholder="maximum:5"
                required
                max={5}
                min={0}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="date">
              <Form.Label>Price tickey</Form.Label>
              <Form.Control type="text" value={250} readOnly />
            </Form.Group>

            <Button variant="danger" type="submit" >
              Submit
            </Button>
          </Form>
        </>
      )}
      <MDBFooter
        style={{ marginTop: "auto" }}
        className="footer bg-danger text-center text-white"
      >
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            Sri Lanka Railway Department.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
}

// import React, { useEffect, useState } from "react";
// import Heading from "./Heading";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import "./style.css";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBCol,
//   MDBRow,
//   MDBIcon,
//   MDBBtn,
// } from "mdb-react-ui-kit";

// export default function Reservation() {
//   const [arrivalLocation, setArrivalLocation] = useState("");
//   const [departureLocation, setdepatureLocation] = useState("");
//   const [date, setDate] = useState("");
//   const [filteredTrains, setFilteredTrains] = useState([]);
//   const [selectedRow, setSelectedRow] = useState(null);
//   const [data, setData] = useState([]);
//   const [selectedTrainData, setSelectedTrainData] = useState(null);

//   useEffect(() => {
//     fetchTrainData();
//   }, []);

//   const fetchTrainData = async () => {
//     try {
//       const response = await fetch("https://localhost:44327/api/Values");
//       const data = await response.json();
//       setData(data);
//     } catch (error) {
//       console.error("Error fetching train data:", error);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     // Filter the trains based on the user's input
//     const filteredData = data.filter((train) => {
//       return (
//         train.arrivalLocation.toLowerCase() === arrivalLocation.toLowerCase() &&
//         train.departureLocation.toLowerCase() ===
//           departureLocation.toLowerCase() &&
//         train.date === date
//       );
//     });

//     // Set the filtered trains to state
//     setFilteredTrains(filteredData);
//     setSelectedRow(null);
//   };

//   const handleBook = (train) => {
//     setSelectedTrainData(train);
//   };

//   return (
//     <>
//       <Heading />

//       <div
//         style={{
//           display: "flex",
//           width: "100%",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//         className="box"
//       >
//         <Form
//           onSubmit={handleFormSubmit}
//           style={{
//             width: "500px",
//             margin: "2rem auto",
//             padding: "1rem",
//             border: "1px solid black",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "1rem",
//             borderRadius: "10px",
//           }}
//         >
//           <h3 className="text-center text-danger">Select Your Train</h3>

//           <Form.Group className="mb-3 " controlId="arrivalLocation">
//             <Form.Label>Arrival Location</Form.Label>
//             <Form.Select
//               value={arrivalLocation}
//               onChange={(e) => setArrivalLocation(e.target.value)}
//             >
//               <option>Choose...</option>
//               {data.map((detail) => {
//                 return (
//                   <option key={detail.id}>{detail.arrivalLocation}</option>
//                 );
//               })}
//             </Form.Select>
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="departureLocation">
//             <Form.Label>Departure Location</Form.Label>
//             <Form.Select
//               value={departureLocation}
//               onChange={(e) => setdepatureLocation(e.target.value)}
//             >
//               <option value="">Choose...</option>
//               {data.map((detail) => {
//                 return (
//                   <option key={detail.id}>{detail.departureLocation}</option>
//                 );
//               })}
//             </Form.Select>
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="date">
//             <Form.Label>Date</Form.Label>
//             <Form.Control
//               type="date"
//               name="date"
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </Form.Group>

//           <Button variant="danger" type="submit">
//             Submit
//           </Button>
//         </Form>
//         {filteredTrains && (
//           <>
//             <TableContainer style={{ maxWidth: "1000px" }} variant="danger">
//               <Table
//                 sx={{
//                   maxWidth: "800px",
//                   margin: "1rem auto",
//                   border: "1px solid black",
//                 }}
//                 aria-label="simple table"
//               >
//                 <TableHead>
//                   <TableRow>
//                     <TableCell
//                       style={{
//                         color: "black",
//                         fontWeight: "600",
//                         backgroundColor: "lightblue",
//                       }}
//                     >
//                       Edit or Delete
//                     </TableCell>
//                     <TableCell
//                       style={{
//                         color: "black",
//                         fontWeight: "600",
//                         backgroundColor: "lightblue",
//                       }}
//                     >
//                       Arrival Location
//                     </TableCell>
//                     <TableCell
//                       style={{
//                         color: "black",
//                         fontWeight: "600",
//                         backgroundColor: "lightblue",
//                       }}
//                     >
//                       Departure Location
//                     </TableCell>
//                     {/* <TableCell style={{ color: 'black', fontWeight: '600', backgroundColor: 'lightblue' }}>Price</TableCell> */}
//                     <TableCell
//                       style={{
//                         color: "black",
//                         fontWeight: "600",
//                         backgroundColor: "lightblue",
//                       }}
//                     >
//                       Date
//                     </TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {filteredTrains.map((datas) => (
//                     <TableRow key={datas.id}>
//                       <TableCell>
//                         <Button
//                           style={{ margin: "0 0.3rem" }}
//                           variant="danger"
//                           onClick={() => handleBook(datas)}
//                         >
//                           Book Now
//                         </Button>
//                       </TableCell>
//                       <TableCell>{datas.arrivalLocation}</TableCell>
//                       <TableCell>{datas.departureLocation}</TableCell>
//                       {/* <TableCell>{datas.price}</TableCell> */}
//                       <TableCell>{datas.date}</TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           </>
//         )}
//       </div>
//       {selectedTrainData && (
//         <>
//           <Form
//             onSubmit={() => {
//               alert("Train Book Successfull");
//             }}
//             style={{
//               width: "500px",
//               margin: "2rem 13rem",
//               padding: "1rem",
//               border: "1px solid black",
//               alignItems: "center",
//               justifyContent: "center",
//               gap: "1rem",
//               borderRadius: "10px",
//             }}
//           >
//             <h3 className="text-center text-danger">Book Your Train</h3>
//             <Form.Group className="mb-3 " controlId="arrivalLocation">
//               <Form.Label>Arrival Location</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={
//                   selectedTrainData ? selectedTrainData.arrivalLocation : ""
//                 }
//                 readOnly
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="departureLocation">
//               <Form.Label>Departure Location</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={
//                   selectedTrainData ? selectedTrainData.departureLocation : ""
//                 }
//                 readOnly
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="date">
//               <Form.Label>Date</Form.Label>
//               <Form.Control
//                 type="text"
//                 value={selectedTrainData ? selectedTrainData.date : ""}
//                 readOnly
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="date">
//               <Form.Label>NIC number</Form.Label>
//               <Form.Control type="text" required />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="date">
//               <Form.Label>Seats No</Form.Label>
//               <Form.Control
//                 type="number"
//                 placeholder="maximum:5"
//                 required
//                 max={5}
//                 min={0}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3" controlId="date">
//               <Form.Label>Price tickey</Form.Label>
//               <Form.Control type="text" value={250} readOnly />
//             </Form.Group>

//             <Button variant="danger" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </>
//       )}
//       <MDBFooter
//         style={{ marginTop: "auto" }}
//         className="footer bg-danger text-center text-white"
//       >
//         <div
//           className="text-center p-3"
//           style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
//         >
//           © 2020 Copyright:
//           <a className="text-white" href="https://mdbootstrap.com/">
//             Sri Lanka Railway Department.com
//           </a>
//         </div>
//       </MDBFooter>
//     </>
//   );
// }
