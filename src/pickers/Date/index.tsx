'use client';
import React from 'react';
import { DatePicker as BasicPicker } from './DatePicker.js';
import DateButton from './DateButton.js';

export interface DatePickerProps {
    selectedDate: Date;
    onChange: (date: Date) => void;
    show: boolean;
    onShow: (show: boolean) => void;
}

export default function DatePicker({
    selectedDate,
    onChange,
    show,
    onShow,
}: DatePickerProps) {
    return (
        <>
            <DateButton
                show={show}
                onShow={onShow}
                date={selectedDate.toDateString()}
            />
            <BasicPicker
                show={show}
                selectedDate={selectedDate}
                onChange={onChange}
                setIsOpen={onShow}
            />
        </>
    );
}
