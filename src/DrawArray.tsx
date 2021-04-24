import {Col, Container, Row} from "react-bootstrap";
import React from "react";

interface IDrawArray {
    array: number[]
    a: number
    b: number
    done: boolean
    heading?: string
    end?: boolean
}

function DrawArray(props: IDrawArray) {
    const {array, a, b, done, end = false, heading} = props;
    const out = array.map((v: number, i: number) => {
        const bgc = i === a || i === b ? "#f00" : "#ddd";
        return (<span key={i} style={{
            margin: "0.5em",
            padding: "1em",
            backgroundColor: bgc,
            display: "inline-block"
        }}>{v}</span>);
    });
    return (
        <Container fluid>
            <Row>
                <Col><h3>{heading}</h3></Col>
            </Row>

            <Col>
                <>
                    {out}
                </>
            </Col>
            <Row>
                <Col>
                    {done && !end ? <span style={{
                        margin: "0.5em",
                        padding: "1em",
                        backgroundColor: "green",
                        display: "inline-block"
                    }}>Done!</span> : ''}
                </Col>
            </Row>
        </Container>
    );
}

export default DrawArray;