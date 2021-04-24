import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import BubbleSort from "./BubbleSort";

function App() {
    return (
        <Container fluid className="App">
            <Row>
                <Col>
                    <BubbleSort/>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
