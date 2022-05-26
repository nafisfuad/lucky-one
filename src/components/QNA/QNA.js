import React from 'react';

const QNA = () => {
    return (
        <div className='container text-start'>
            <h3>Q1. How React works?</h3>
            <p>Answer: In React, components are created to display in the UI. Components contain elements  to be inserted in DOM become React elements upon call render method of ReactDOM library and returns an object that is known as Virtual DOM. Reconciliation determines the part to replace using diffing algorithm. This makes the process more efficient since it'll compare and only rerender where changes applied. Later upon build the entire process, React tree inserts to the Browser DOM eventually.</p>
            <h3>Q2. Differences between Props and State?</h3>
            <p>Answer: Props are basically short form of properties which is or are arguments passed into a function called component that return JSX. State, on the other hand, holds the information about component. Props recieved is/are immutable but state is there to track the changes and apply. Props can be anything, wherever State is an structure. In conclusion, State helps to have Props dynamic.</p>
        </div>
    );
};

export default QNA;