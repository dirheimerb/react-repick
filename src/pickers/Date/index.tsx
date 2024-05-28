// 'use client';
// import React from 'react';
import { BasicDatePicker } from './DatePicker';
import DateButton from './DateButton';

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
            <BasicDatePicker
                show={show}
                selectedDate={selectedDate}
                onChange={onChange}
                setIsOpen={onShow}
            />
        </>
    );
}
