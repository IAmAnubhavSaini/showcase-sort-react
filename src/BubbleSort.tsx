import React, {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DrawArray from "./DrawArray";
import ControlBox from "./ControlBox";

interface IBubbleSortState {
    original: number[];
    array: number[];
    i: number;
    j: number;
    compareI: number;
    compareJ: number;
    comparisons: number;
    swaps: number;
    done: boolean;
    size: number;
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
    const [visualisationSpeed, setVisualisationSpeed] = useState(500);
    const [debug, setDebug] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            if (state.done) {
                clearTimeout(id);
            } else {
                setState(bubbleSortStep(state));
            }

        }, visualisationSpeed);
        return () => clearTimeout(id);
    });

    function updateRange(value: number) {
        setInputSize(value);
        setState(bubbleSortInit(value));
    }

    function updateVisualisationSpeed(value: number) {
        setVisualisationSpeed(value);
        setState(bubbleSortInit(inputSize));
    }


    return (

        <>
            <div>
                <h1>Bubble sort</h1>
                <p>Use the range slider to increase/decrease the number of numbers in bubble sort visualisation.</p>

                <p>
                    <a href="https://en.wikipedia.org/wiki/Bubble_sort">Learn more about bubble sort</a>
                </p>
            </div>

            <ControlBox inputSize={inputSize} updateRange={updateRange} debug={debug} setDebug={setDebug}
                        visualisationSpeed={visualisationSpeed} updateVisualisationSpeed={updateVisualisationSpeed}/>

            <Row>
                <Col>
                    <DrawArray
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
                    <DrawArray array={state.array} a={state.compareI - 1} b={state.compareJ - 1} done={state.done}
                               heading={"Working"} debug={({shouldDebug: debug, state})}/>
                </Col>
            </Row>
        </>

    );
}

export default BubbleSort;


