import React from 'react'
import { Card, Carousel, Badge, Nav } from 'react-bootstrap'
import '../css/TopBuild.css'

const TopBuild = ({ screenWidth }) => {
    const hide = screenWidth <= 991 ? 'hide' : '';
    return (
        <>
            <div className={hide}>
                <Card className='top-builds-card'>
                    <Card.Body>
                        <Card.Title><div className='top-builds-headline'><h6>Top builds</h6></div></Card.Title>
                        <Card.Text className='mt-4 top-builds-secondary'>
                            <div className='xyz'><a>1. <Badge bg="primary">DPS</Badge> Raiden Build</a></div>
                            <div className='xyz'><a>2. <Badge bg="success">SUB</Badge> Ayato Build</a></div>
                            <div className='xyz'><a>3. <Badge bg="primary">DPS</Badge> Ayaka Build</a></div>
                            <div className='xyz'><a>4. <Badge bg="info">SUP</Badge> Mona Build</a></div>
                            <div className='xyz'><a>5. <Badge bg="warning">DEF</Badge> Noel Build</a></div>
                        </Card.Text>
                        <a className='top-builds-more'>View more</a>
                    </Card.Body>
                </Card>

                <Card className='top-users-card mt-2'>
                    <Card.Body>
                        <Card.Title>
                            <div className='top-users-headline'><h6>Top users</h6></div>
                        </Card.Title>
                        <Card.Text className='mt-4 top-users-secondary'>
                            <div className='abc'>
                                <h6 className='ms-2'>honei12 <br /><span className='text-mute'>33k builds tried</span></h6>
                            </div>
                            <div className='abc'>
                                <h6 className='ms-2'>joma01 <br /><span className='text-mute'>33k builds tried</span></h6>
                            </div>
                            <div className='abc'>
                                <h6 className='ms-2'>ken_10 <br /><span className='text-mute'>33k builds tried</span></h6>
                            </div>
                            <div className='abc'>
                                <h6 className='ms-2'>ken001 <br /><span className='text-mute'>33k builds tried</span></h6>
                            </div>
                            <div className='abc'>
                                <h6 className='ms-2'>jessa1 <br /><span className='text-mute'>33k builds tried</span></h6>
                            </div>
                            <div className='abc'>
                                <h6 className='ms-2'>baal001 <br /><span className='text-mute'>33k builds tried</span></h6>
                            </div>
                            <div className='abc'>
                                <h6 className='ms-2'>eiii12 <br /><span className='text-mute'>33k builds tried</span></h6>
                            </div>
                            <div className='abc'>
                                <h6 className='ms-2'>simp4u <br /><span className='text-mute'>33k builds tried</span></h6>
                            </div>
                            <div className='abc'>
                                <h6 className='ms-2'>traveler123 <br /><span className='text-mute'>33k builds tried</span></h6>
                            </div>
                            <div className='abc'>
                                <h6 className='ms-2'>genshinforever111 <br /><span className='text-mute'>33k builds tried</span></h6>
                            </div>
                        </Card.Text>
                        <a className='top-builds-more'>View more</a>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default TopBuild