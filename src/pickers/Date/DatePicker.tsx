// DatePicker.tsx
import React, { useRef, useState } from 'react';
import {
    format,
    startOfMonth,
    endOfMonth,
    addMonths,
    subMonths,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    startOfWeek,
    endOfWeek,
} from 'date-fns';
import useClickAwayListener from '../../lib/ClickAway.js';

interface DatePickerProps {
    show: boolean;
    selectedDate: Date;
    onChange: (date: Date) => void;
    setIsOpen: (isOpen: boolean) => void;
}

export const DatePicker: React.FC<DatePickerProps> = ({
    show,
    selectedDate,
    onChange,
    setIsOpen,
}) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const ref = useRef<HTMLDivElement>(null);

    useClickAwayListener(ref, () => {
        setIsOpen(false);
    });

    const handlePreviousMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const handleDateClick = (date: Date) => {
        onChange(date);
        setIsOpen(false);
    };

    const start = startOfWeek(startOfMonth(currentMonth));
    const end = endOfWeek(endOfMonth(currentMonth));
    const days = eachDayOfInterval({ start, end });

    return (
        show && (
            <div className="rounded-lg bg-white p-4 shadow-md">
                <div className="mb-4 flex items-center justify-between">
                    <button
                        onClick={handlePreviousMonth}
                        className="rounded bg-gray-200 px-2 py-1"
                    >
                        Previous
                    </button>
                    <h2 className="text-lg font-semibold">
                        {format(currentMonth, 'MMMM yyyy')}
                    </h2>
                    <button
                        onClick={handleNextMonth}
                        className="rounded bg-gray-200 px-2 py-1"
                    >
                        Next
                    </button>
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(
                        (day) => (
                            <div
                                key={day}
                                className="text-center font-semibold"
                            >
                                {day}
                            </div>
                        ),
                    )}
                    {days.map((day) => (
                        <button
                            key={day.toString()}
                            onClick={() => handleDateClick(day)}
                            className={`rounded p-2 ${isSameDay(day, selectedDate) ? 'bg-blue-500 text-white' : isSameMonth(day, currentMonth) ? 'bg-white text-black' : 'bg-gray-200 text-gray-500'}`}
                        >
                            {format(day, 'd')}
                        </button>
                    ))}
                </div>
            </div>
        )
    );
};
