import React, {ChangeEvent, useEffect, useState} from 'react';
import {Container, Row, Col, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

interface IBubbleSortState {
    original: number[]
    array: number[]
    i: number
    j: number
    compareI: number
    compareJ: number
    comparisons: number
    swaps: number
    done: boolean
    size: number
}

function bubbleSortInit(size: number = 10): IBubbleSortState {
    const original = Array(size).fill(0).map(_ => Math.floor(Math.random() * 100));
    return {
        original,
        array: original.map((i: number) => i),
        i: 0,
        j: 1,
        compareI: 0,
        compareJ: 1,
        comparisons: 0,
        swaps: 0,
        done: false,
        size: size
    };
}

function isSorted(array: number[]) {
    return array.reduce((a: boolean, c: number, i: number) => a && c < (array[i + 1] || Infinity), true);
}

function bubbleSortStep(state: IBubbleSortState): IBubbleSortState {
    let {array, i, j, compareI, compareJ, comparisons, swaps, original, size} = state;

    if (compareJ > size - 1) {
        compareI = 0;
        compareJ = 1;
        i++;
    }

    const a = array[compareI];
    const b = array[compareJ];
    if (a > b) {
        swaps++;
        array[compareI] = b;
        array[compareJ] = a;
    }
    comparisons++;
    compareI++;
    compareJ++;

    // bails out quicker. Not a real bubble sort. Watching bubble sort is punishment.
    let done = isSorted(array) || i > size;
    if (done) {
        compareI = -1;
        compareJ = -1;
    }
    return {...state, array, i, j, compareI, compareJ, comparisons, swaps, done, original};
}

function BubbleSort() {
    const [inputSize, setInputSize] = useState(5);
    const [state, setState] = useState(bubbleSortInit(inputSize));

    useEffect(() => {
        const id = setTimeout(() => {
            if (state.done) {
                clearTimeout(id);
            } else {
                setState(bubbleSortStep(state));
            }

        }, 500);
        return () => clearTimeout(id);
    });

    function updateRange(value: number) {
        setInputSize(value);
        setState(bubbleSortInit(value));
    }

    return (

        <Container fluid>
            <Row>
                <Col className="col-md-3">
                    <Form>
                        <Form.Group controlId="formBasicRange">
                            <Form.Label>Range (5-25)</Form.Label>
                            <Form.Control type="range" value={inputSize} min={5} max={25}
                                          onChange={(e: ChangeEvent<HTMLInputElement>) => updateRange(parseInt(e.target.value))}/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ShowArray
                        array={state.original}
                        a={-1} b={-1}
                        done={state.done}
                        heading={"Initial state of the array"}
                        end={true}/>
                    <hr/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <ShowArray array={state.array} a={state.compareI - 1} b={state.compareJ - 1} done={state.done}
                               heading={"Working"}/>
                </Col>
            </Row>
        </Container>

    );
}

export default BubbleSort;


interface IShowArray {
    array: number[]
    a: number
    b: number
    done: boolean
    heading?: string
    end?: boolean
}

function ShowArray(props: IShowArray) {
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

