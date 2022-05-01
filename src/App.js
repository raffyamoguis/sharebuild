import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import SideBar from './components/SideBar'
import Home from './components/Home'
import Navigation from './components/Navigation'
import TopBuild from './components/TopBuild'
import { useState, useEffect, } from 'react'

// Javascript get window dimensions
function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width
  };
}

function isMobile(width) {
  return width <= 991;
}

// useState, useEffect for realtime window tracking
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  const { width } = useWindowDimensions();

  return (
    <>
      <Container>
        {isMobile(width) ? <Navigation /> : ''}
        <Row>
          <Col lg={2} className={`sidebar-content ${isMobile(width) ? 'hide' : ''}`}>
            <SideBar screenWidth={width} />
          </Col>
          <Col lg={7} className='center-content'>
            <Home isMobile={isMobile(width)} />
          </Col>
          <Col lg={3} className='right-content'>
            <TopBuild screenWidth={width} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
