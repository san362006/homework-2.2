import React, {useState} from 'react';
import Counter from "./counter"

const Counters = () => {
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
        <div>
            <button onClick={handleReset} className='btn btn-primary btn-sm m-2'>Reset</button>
            {counters.map(counter => (
                <Counter
                    key={counter.id}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onDelete={handleDelete}
                    {...counter}
                />
            ))}
        </div>
    );
}
 
export default Counters;
