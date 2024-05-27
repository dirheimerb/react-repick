// DateRangePicker.tsx
import React, { useState } from 'react';
import {
    format,
    startOfMonth,
    endOfMonth,
    addMonths,
    subMonths,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    isBefore,
    startOfWeek,
    endOfWeek,
    isWithinInterval,
} from 'date-fns';

export interface DateRangePickerProps {
    startDate: Date | null;
    endDate: Date | null;
    onChange: (startDate: Date | null, endDate: Date | null) => void;
    show: boolean;
    onShow: (show: boolean) => void;
    selectedStartDate: Date | null;
    selectedEndDate: Date | null;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
    startDate,
    endDate,
    onChange,
    show,
    onShow,
    selectedStartDate,
    selectedEndDate,
}) => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectingEndDate, setSelectingEndDate] = useState(false);
    const [open, setOpen] = useState<boolean>(show);

    const handlePreviousMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const handleNextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const handleDateClick = (date: Date) => {
        if (!startDate || (startDate && endDate)) {
            onChange(date, null);
            setSelectingEndDate(true);
        } else if (selectingEndDate) {
            if (isBefore(date, startDate)) {
                onChange(date, startDate);
            } else {
                onChange(startDate, date);
            }
            setSelectingEndDate(false);
        }
    };

    const handleOpen = (show: boolean) => {
        setOpen(show);
        onShow(show);
    };

    const start = startOfWeek(startOfMonth(currentMonth));
    const end = endOfWeek(endOfMonth(currentMonth));
    const days = eachDayOfInterval({ start, end });

    return (
        <div className="relative">
            <button
                type="button"
                className="w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                onClick={() => handleOpen(!open)}
            >
                {startDate && endDate
                    ? `${format(startDate, 'MM/dd/yyyy')} - ${format(endDate, 'MM/dd/yyyy')}`
                    : 'Select date range'}
            </button>
            {open && (
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
                        {days.map((day) => {
                            const isStartDate =
                                startDate && isSameDay(day, startDate);
                            const isEndDate =
                                endDate && isSameDay(day, endDate);
                            const isInRange =
                                startDate &&
                                endDate &&
                                isWithinInterval(day, {
                                    start: startDate,
                                    end: endDate,
                                });

                            return (
                                <button
                                    key={day.toString()}
                                    onClick={() => handleDateClick(day)}
                                    className={`rounded p-2 ${isStartDate || isEndDate ? 'bg-blue-500 text-white' : isInRange ? 'bg-blue-200 text-black' : isSameMonth(day, currentMonth) ? 'bg-white text-black' : 'bg-gray-200 text-gray-500'}`}
                                >
                                    {format(day, 'd')}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DateRangePicker;
