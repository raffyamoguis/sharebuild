import React, { useState } from 'react'
import { Container, Navbar, Nav, Offcanvas, InputGroup, FormControl } from 'react-bootstrap'
import '../css/Navbar.css'
import { MdOutlineMenuOpen } from 'react-icons/md'
import { BiSearch } from 'react-icons/bi'

const Navigation = () => {
    // const [focus, setFocused] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Navbar className='navigation mt-2'>
            <Container fluid>
                <Navbar.Brand className='brand' href="#home">ShareBuild</Navbar.Brand>
                <Nav id='search' className='me-auto'>
                    <InputGroup>
                        <InputGroup.Text className='search-form-addon' id="search-addon">
                            <BiSearch />
                        </InputGroup.Text>
                        <FormControl
                            className="search-form shadow-none"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                        />
                    </InputGroup>
                </Nav>
                <Nav id='menu' className='justify-content-end'>
                    <Nav.Link className='menu-link' onClick={handleShow} ><MdOutlineMenuOpen /></Nav.Link>
                </Nav>
                <Offcanvas show={show} onHide={handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        Some text as placeholder. In real life you can have the elements you
                        have chosen. Like, text, images, lists, etc.
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Navigation