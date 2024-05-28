// 'use client';
import React from 'react';
import { useState, useRef } from 'react';
import useClickAwayListener from '../../lib/ClickAway';

export interface TimePickerProps {
    value: string;
    onChange: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hours, setHours] = useState(new Date().getHours() % 12 || 12);
    const [minutes, setMinutes] = useState(new Date().getMinutes());
    const [period, setPeriod] = useState(
        new Date().getHours() >= 12 ? 'PM' : 'AM',
    );
    const ref = useRef<HTMLDivElement>(null);

    useClickAwayListener(ref, () => {
        setIsOpen(false);
    });

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleHoursChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newHours = parseInt(e.target.value, 10);
        setHours(newHours);
        updateTime(newHours, minutes, period);
    };

    const handleMinutesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newMinutes = parseInt(e.target.value, 10);
        setMinutes(newMinutes);
        updateTime(hours, newMinutes, period);
    };

    const handlePeriodChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newPeriod = e.target.value;
        setPeriod(newPeriod);
        updateTime(hours, minutes, newPeriod);
    };

    const updateTime = (hours: number, minutes: number, period: string) => {
        const formattedHours = period === 'PM' ? (hours % 12) + 12 : hours % 12;
        const formattedTime = `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
        onChange(`${formattedTime} ${period}`);
    };

    return (
        <div
            className="relative inline-block w-full md:w-1/4 lg:w-1/4 "
            ref={ref}
        >
            <button
                type="button"
                className="w-full cursor-pointer rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                onClick={handleOpen}
            >
                {value || 'Select time'}
            </button>
            {isOpen && (
                <div className="absolute mt-1 w-full rounded-md bg-white shadow-lg">
                    <div className="grid grid-cols-3 gap-2 p-2">
                        <div>
                            <label
                                htmlFor="hours"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Hours
                            </label>
                            <select
                                id="hours"
                                value={hours}
                                onChange={handleHoursChange}
                                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i} value={i + 1}>
                                        {String(i + 1).padStart(2, '0')}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="minutes"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Minutes
                            </label>
                            <select
                                id="minutes"
                                value={minutes}
                                onChange={handleMinutesChange}
                                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                {Array.from({ length: 60 }, (_, i) => (
                                    <option key={i} value={i}>
                                        {String(i).padStart(2, '0')}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label
                                htmlFor="period"
                                className="block text-sm font-medium text-gray-700"
                            >
                                AM/PM
                            </label>
                            <select
                                id="period"
                                value={period}
                                onChange={handlePeriodChange}
                                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TimePicker;
