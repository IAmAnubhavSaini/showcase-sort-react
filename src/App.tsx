import React from 'react';
import {Container, Row, Col, Nav, FormControl, Form, Navbar, Button, Jumbotron} from 'react-bootstrap';
import BubbleSort from "./BubbleSort";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import SelectionSort from "./SelectionSort";

function App() {
    return (
        <Router>
            <Container fluid className="App">
                <Row>
                    <Col>
                        <Navbar bg="danger" variant="dark">
                            <Navbar.Brand href="/">Sorting visualisations</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link href="/bubble">Bubble</Nav.Link>
                                <Nav.Link href="/selection">Selection</Nav.Link>
                                {/*<Nav.Link href="/insertion">Insertion</Nav.Link>*/}
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>

                <Row><Col>

                    <Switch>
                        <Route exact path="/">
                            <Jumbotron>
                                <h1>Hello to sorting visualisations</h1>
                                <p>Click on the links to go see the visualisation.</p>
                            </Jumbotron>
                        </Route>
                        <Route path="/bubble" component={BubbleSort}/>
                        <Route path="/selection" component={SelectionSort}/>
                        <Redirect to="/"/>
                    </Switch>

                </Col></Row>
            </Container>
        </Router>
    );
}

export default App;
