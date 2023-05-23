import React, { useContext } from "react";
import { Container, Col, Button, Row } from "react-bootstrap";
import { Box, Typography } from "@mui/material";
import NavBar from "../NavBar";
import Table from "react-bootstrap/Table";
import { ChatContext } from "../../context/ChatProvider";
import SupervisorNavbar from "../Navbar/SupervisorNavbar";
import PostAddTwoToneIcon from '@mui/icons-material/PostAddTwoTone';
const Help = () => {
  
  const { user } = useContext(ChatContext);
  return (
    <Box sx={{ display: "flex" ,bgcolor:"lightgrey" }}>
    <Box sx={{ width: "20%", backgroundColor: "#28282B" }}>
    {user && user.type === "Student" && <NavBar />}
      {user && user.type === "Supervisor" && <SupervisorNavbar />}
    </Box>
    <div style={{  width: "80%",backgroundColor: "lightgray", }}>
      

      <div>
        
        <Container >
          <div style={{width:"100%",marginTop:"6%"}}> 
          <Col style={{ textAlign: "center",
              marginBottom: "10px",
              fontFamily: "bold",
              color:"white",
              
              borderRadius:"10px",
              width: "60%",
              padding:"5px",backgroundColor:"#28282B",marginLeft: "20%",}}>
              <h3 style={{ marginTop: "15px" }}>Request</h3>
            </Col>
          </div>
             
          <Row
            style={{
              bgcolor: "white",
            backgroundColor:'white',
            padding: "20px",
            width: "100%",
            margin: "20px auto",
            marginBottom: "20px",
            borderRadius:"10px",
            boxShadow: "0 2px 4px #052f72",
           marginTop:"4%"
            }}
          >
            <Col></Col>

            <Col>
              <Button
                variant="primary"
                size="lg"
                active
                style={{ marginLeft: "450px", marginTop: "10px",backgroundColor:'#28282B' }}
              >
                <PostAddTwoToneIcon/>
              </Button>
            </Col>

            <Row style={{ alignItems: "center", justifyContent: "center" }}>
              <Table
                striped
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "90%",
                  border: "none",
                  marginTop:"3%"
                }}
              >
                <thead style={{boxShadow: "0 1px 2px #052f72",}}>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Row>
        </Container>
        <Container style={{marginBottom:"5%"}}>
          <div style={{width:"100%",marginTop:"10%",}}> 
          <Col style={{ textAlign: "center",
              marginBottom: "10px",
              fontFamily: "bold",
              color:"white",
              
              borderRadius:"10px",
              width: "60%",
              padding:"5px",backgroundColor:"#28282B",marginLeft: "20%",}}>
              <h3 style={{ marginTop: "15px" }}>Query</h3>
            </Col>
          </div>
             
          <Row
            style={{
              bgcolor: "white",
            backgroundColor:'white',
            padding: "20px",
            width: "100%",
            margin: "20px auto",
            marginBottom: "20px",
            borderRadius:"10px",
            boxShadow: "0 2px 4px #052f72",
           marginTop:"4%"
            }}
          >
            <Col></Col>

            <Col>
              <Button
                variant="primary"
                size="lg"
                active
                style={{ marginLeft: "450px", marginTop: "10px",backgroundColor:'#28282B' }}
              >
                <PostAddTwoToneIcon/>
              </Button>
            </Col>

            <Row style={{ alignItems: "center", justifyContent: "center" }}>
              <Table
                striped
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "90%",
                  border: "none",
                  marginTop:"3%"
                }}
              >
                <thead style={{boxShadow: "0 1px 2px #052f72",}}>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Row>
        </Container>
      </div>
    </div>
    </Box>
  );
};

export default Help;