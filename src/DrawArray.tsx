import {Col, Container, Row} from "react-bootstrap";
import React from "react";

interface IDrawArray {
    array: number[];
    a: number;
    b: number;
    done: boolean;
    heading?: string;
    end?: boolean;
    debug?: { shouldDebug: boolean, state: any };
}

function DrawArray(props: IDrawArray) {
    const {array, a, b, done, end = false, heading} = props;
    const out = array.map((v: number, i: number) => {
        const astyle = i === a ? {border: `medium solid #0f0`} : {backgroundColor: '#ddd'};
        const bstyle = i === b ? {outline: `medium solid #f00`} : {backgroundColor: '#ddd'};


        return (<span key={i} style={{
            margin: "0.5em",
            padding: "0.5em",
            display: "inline-block",
            borderRadius: "50%",
            ...astyle,
            ...bstyle
        }}>{v}</span>);
    });
    return (
        <Container fluid>
            <Row>
                <Col><h3>{heading}</h3></Col>
            </Row>
            <Row>
                <Col>
                    <>
                        {out}
                    </>
                </Col>
            </Row>
            <Row>
                <Col>
                    {props?.debug?.shouldDebug ? JSON.stringify(props.debug.state, null, 4) : null}
                </Col>
            </Row>

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