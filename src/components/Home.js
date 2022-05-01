import React from 'react'
import { Card, Image, Row, Col, OverlayTrigger, Tooltip, Form, InputGroup, FormControl } from 'react-bootstrap'
import { BiLike, BiDislike, BiComment, BiSearch } from 'react-icons/bi'
import { GiCharacter } from 'react-icons/gi'
import { VscTypeHierarchy } from 'react-icons/vsc'
import { GiGlowingArtifact } from 'react-icons/gi'
import { IoMdPhotos } from 'react-icons/io'
import johnavatar from '../img/cow.png'
import '../css/Home.css'

const Home = ({ isMobile }) => {
    const [focus, setFocused] = React.useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)

    React.useEffect(() => {
        console.log(focus)
    })

    return (
        <>
            <Card className={`search-card ${isMobile ? 'hide' : ''}`}>
                <Card.Body>
                    <InputGroup>
                        <InputGroup.Text className={`${focus ? 'focus' : 'search-form-addon'}`} id="search-addon">
                            <BiSearch />
                        </InputGroup.Text>
                        <FormControl
                            className="search-form shadow-none"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                            onFocus={onFocus}
                            onBlur={onBlur}
                        />
                    </InputGroup>
                </Card.Body>
            </Card>

            <Card className='post-card mt-2'>
                <Card.Body>
                    <Card.Title><small>Create build</small></Card.Title>
                    <Form>
                        <Form.Group size='sm' className=" mb-3 " controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" className='post-card-content shadow-none' rows={1} />
                        </Form.Group>
                    </Form>
                    <Row>
                        <Col className='post-menu'><GiCharacter className='me-2' /> Character</Col>
                        <Col className='post-menu'><VscTypeHierarchy className='me-2' /> Type</Col>
                        <Col className='post-menu'><GiGlowingArtifact className='me-2' /> Artifact</Col>
                        <Col className='post-menu'><IoMdPhotos className='me-2' /> Photo/video</Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card className='home-card shadow-none border-0 mt-2'>
                <Card.Body>
                    <Card.Title className='post-name'>
                        <Image roundedCircle={true} src={johnavatar} /> John Doe
                    </Card.Title>
                    <Card.Text className='post-text'>
                        Lorem ipsum
                    </Card.Text>
                    <Image src='https://cdn.pixabay.com/photo/2019/12/09/04/04/call-of-duty-4682628_960_720.jpg' fluid rounded />
                    <Row className='mt-2'>
                        <Col>
                            <OverlayTrigger key='bottom' placement='bottom' overlay={
                                <Tooltip id='tooltip-bottom'>
                                    Great!
                                </Tooltip>
                            }>
                                <BiLike className='post-icons' />
                            </OverlayTrigger>
                            <BiDislike className='post-icons' />
                        </Col>
                        <Col>
                            <BiComment className='post-icons' /> <span><small>100k</small></span>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            <Card className='home-card shadow-none border-0 mt-2'>
                <Card.Body>
                    <Card.Title className='post-name'>
                        <Image roundedCircle={true} src={johnavatar} /> John Doe
                    </Card.Title>
                    <Card.Text className='post-text'>
                        Lorem ipsum
                    </Card.Text>
                    <Image alt='Image' src='https://cdn.pixabay.com/photo/2019/12/09/04/04/call-of-duty-4682628_960_720.jpg' fluid rounded />
                    <Row className='mt-2'>
                        <Col>
                            <OverlayTrigger placement='bottom' overlay={
                                <Tooltip id='tooltip-bottom'>
                                    Great!
                                </Tooltip>
                            }>
                                <BiLike className='post-icons' />
                            </OverlayTrigger>
                            <BiDislike className='post-icons' />
                        </Col>
                        <Col>
                            <BiComment className='post-icons' /> <span><small>100k</small></span>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default Home