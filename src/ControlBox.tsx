import {Col, Form, Row} from "react-bootstrap";
import React, {ChangeEvent} from "react";

function ControlBox(props: any) {
    return (

        <Row>
            <Col className="col-md-3">
                <Form>
                    <Form.Group controlId="formInputSizeRange">
                        <Form.Label>Range (5-25)</Form.Label>
                        <Form.Control type="range" value={props.inputSize} min={5} max={25}
                                      onChange={(e: ChangeEvent<HTMLInputElement>) => props.updateRange(parseInt(e.target.value))}/>
                    </Form.Group>
                    <Form.Group controlId="formVisualisationSpeedRange">
                        <Form.Label>Visualisation speed (100-2500) lower is faster</Form.Label>
                        <Form.Control type="range" value={props.visualisationSpeed} min={100} max={2500} step={250}
                                      onChange={(e: ChangeEvent<HTMLInputElement>) => props.updateVisualisationSpeed(parseInt(e.target.value))}/>
                    </Form.Group>
                    <Form.Group controlId="formDebugCheckbox">
                        <Form.Label>Debugging (check to see state)</Form.Label>
                        <Form.Check type="checkbox" label="Debug" onChange={() => props.setDebug(!props.debug)}/>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    );
}

export default ControlBox;