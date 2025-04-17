import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink } from 'react-router'
import { relative } from 'path';
type Props = {}

const Navbar = (props: Props) => {
  return (
   <NavbarBs sticky="top" className='bg-white shadow-sm mb-3'>
        <Container>
            <Nav>
                <Nav.Link to="/" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/store" as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to="/about" as={NavLink}>
                    About
                </Nav.Link>
            </Nav>

             <Button style={{ width:"3rem", height:"3rem", position:"relative"}}>
                 <CiShoppingCart />
                 <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{color:"white", width: "1.5rem", position:"absolute",
                    bottom: 0,
                    right: 0,
                    transform: "translate(25%, 25%)"
                  }}>
                    3
                 </div>
             </Button>   
           
          
        </Container>
   </NavbarBs>
  )
}

export default Navbar