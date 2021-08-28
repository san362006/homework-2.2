import Counters from "./components/counters";
import NavBar from "./components/navBar";
import React, { useState } from 'react';

function App() {
    const initialState = [
        {value: 0, id: 1, name: "Вилка"},
        {value: 0, id: 2, name: "Тарелка"},
        {value: 0, id: 3, name: "Ложка"},
        {value: 0, id: 4, name: "Ненужная вещь"},
    ]

    const [counters, setCounters] = useState(initialState);

    const handleDelete = (counterId) => {
        const newCounters = counters.filter(c => c.id !== counterId)
        setCounters(newCounters)
    };

    const handleReset = () => setCounters(initialState);

    const handleIncrement = (counterId) => {
        const newCounters = counters.map(c => {
            if (c.id === counterId) c.value += 1
            return c
        })
        setCounters(newCounters)
    };

    const handleDecrement = (counterId) => {
        const newCounters = counters.map(c => {
            if (c.id === counterId) {
                if (c.value > 0) {
                    c.value -= 1
                }
            }
            return c
        })
        setCounters(newCounters)
    };

    return (
        <div className="col-lg-8 mx-auto p-3 py-md-5">
            <main>
                <NavBar
                    totalItems={counters.reduce((a, c) => a + c.value, 0)}
                />
                <Counters
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onDelete={handleDelete}
                    onReset={handleReset}
                    counters={counters}
                />
            </main>
        </div>
    );
}

export default App;
