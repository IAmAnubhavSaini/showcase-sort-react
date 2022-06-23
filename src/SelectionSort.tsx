import React, {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DrawArray from "./DrawArray";
import ControlBox from "./ControlBox";

interface ISelectionSortState {
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

function selectionSortInit(size: number = 10): ISelectionSortState {
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

function selectionSortStep(state: ISelectionSortState): ISelectionSortState {
    let {array, i, j, compareI, compareJ, comparisons, swaps, original, size} = state;

    if (compareJ > size - 1) {
        //swap first
        const a = array[i];
        array[i] = array[compareI];
        array[compareI] = a;
        swaps++;

        // prepare for next iteration of the outer loop
        i++;
        compareI = i;
        compareJ = i + 1;
    }

    if (array[compareI] > array[compareJ]) {
        compareI = compareJ;
    }

    compareJ++;
    comparisons++;

    // bails out quicker. Not a real selection sort. Watching selection sort is punishment.
    let done = isSorted(array) || i > size;
    if (done) {
        compareI = -1;
        compareJ = -1;
    }
    return {...state, array, i, j, compareI, compareJ, comparisons, swaps, done, original};
}

function SelectionSort() {
    const [inputSize, setInputSize] = useState(5);
    const [state, setState] = useState(selectionSortInit(inputSize));
    const [visualisationSpeed, setVisualisationSpeed] = useState(500);
    const [debug, setDebug] = useState(false);

    useEffect(() => {
        const id = setTimeout(() => {
            if (state.done) {
                clearTimeout(id);
            } else {
                setState(selectionSortStep(state));
            }

        }, visualisationSpeed);
        return () => clearTimeout(id);
    });

    function updateRange(value: number) {
        setInputSize(value);
        setState(selectionSortInit(value));
    }

    function updateVisualisationSpeed(value: number) {
        setVisualisationSpeed(value);
        setState(selectionSortInit(inputSize));
    }

    return (

        <>
            <div>
                <h1>Selection sort</h1>
                <p>Use the range slider to increase/decrease the number of numbers in selection sort visualisation.</p>

                <p>
                    <a href="https://en.wikipedia.org/wiki/Selection_sort">Learn more about selection sort</a>
                </p>
            </div>

            <ControlBox inputSize={inputSize} updateRange={updateRange} debug={debug} setDebug={setDebug}
                        visualisationSpeed={visualisationSpeed} updateVisualisationSpeed={updateVisualisationSpeed}/>
            <Row>
                <Col>
                    <hr/>
                </Col>
            </Row>
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
                    <DrawArray array={state.array} a={state.compareI} b={state.compareJ - 1} done={state.done}
                               heading={"Working"} debug={({shouldDebug: debug, state})}/>
                </Col>
            </Row>
        </>

    );
}

export default SelectionSort;


