import React from "react";

const Counter = ({onIncrement, onDecrement, onDelete, id, name, value}) => {
    const formValue = () => {
        return value === 0 ? "Empty" : value;
    };

    const getBadgeClasses = () => {
        let classes = "badge m-2 bg-";
        classes += value === 0 ? "danger" : "primary"; 

        return classes;
    }

    return (
        <>
            <h4>{name}</h4>
            <span className={getBadgeClasses()}>{formValue()}</span>
            <button
                onClick={() => onIncrement(id)}
                className="btn btn-secondary btn-sm m-2"
            >
                Increment
            </button>
            <button
                onClick={() => onDecrement(id)}
                className="btn btn-secondary btn-sm"
            >
                Decrement
            </button>
            <button
                onClick={() => onDelete(id)}
                className="btn btn-danger btn-sm m-2"
            >
                Delete
            </button>
        </>
    );
};

export default Counter;
