import React, {useState} from 'react';
import {Container, Row, Col, Nav, FormControl, Form, Navbar, Button, Jumbotron, Badge} from 'react-bootstrap';
import BubbleSort from "./BubbleSort";
import SelectionSort from "./SelectionSort";

function App() {
    const [component, setComponent] = useState('Greet');

    const ToRender = component === 'Greet' ? Greet :
        component === 'BubbleSort' ? BubbleSort :
            component === 'SelectionSort' ? SelectionSort : Greet;


    return (

        <Container fluid className="App">
            <Row>
                <Col>
                    <Navbar bg="danger" variant="dark">
                        <Navbar.Brand href="/">Sorting visualisations</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link onClick={() => setComponent('BubbleSort')}>Bubble</Nav.Link>
                            <Nav.Link onClick={() => setComponent('SelectionSort')}>Selection</Nav.Link>
                            {/*<Nav.Link href="/insertion">Insertion</Nav.Link>*/}
                        </Nav>
                        <Badge variant={"light"}>v0.7.0</Badge>
                    </Navbar>
                </Col>
            </Row>

            <Row><Col>
                <ToRender/>
            </Col></Row>
        </Container>
    );
}

export default App;

function Greet() {
    return (<Jumbotron>
        <h1>Hello to sorting visualisations</h1>
        <p>Click on the links to go see the visualisation.</p>
    </Jumbotron>);
}