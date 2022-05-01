import React from 'react'
import { Nav, Card } from 'react-bootstrap'
import { BiHomeAlt, BiNews } from 'react-icons/bi'
import { AiOutlineBuild } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import '../css/SideBar.css'

const SideBar = ({ screenWidth }) => {
    const hide = screenWidth <= 991 ? 'hide' : '';
    return (
        <>
            <Card className={`sidebar-card ${hide}`}>
                <Card.Body>
                    <Card.Title>
                        <div className='side-bar-headline'><h4>SHAREBUILD</h4></div>
                    </Card.Title>
                    <Nav defaultActiveKey="/home" className="side-bar-navigation flex-column">
                        <Nav.Link className='side-bar-link' href="/home"> <BiHomeAlt className='me-2' /> Home</Nav.Link>
                        <Nav.Link className='side-bar-link' eventKey="link-1"><BiNews className='me-2' /> News</Nav.Link>
                        <Nav.Link className='side-bar-link' eventKey="link-2"><AiOutlineBuild className='me-2' /> Build</Nav.Link>
                        <Nav.Link className='side-bar-link' eventKey="link-3"><CgProfile className='me-2' /> Profile</Nav.Link>
                    </Nav>
                </Card.Body>
            </Card>
        </>
    )
}

export default SideBar