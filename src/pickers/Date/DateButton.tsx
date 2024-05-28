// 'use client';
// import React from 'react';
import { useRef } from 'react';
import useClickAwayListener from '../../lib/ClickAway';

export interface DateButtonProps {
    show: boolean;
    onShow: (show: boolean) => void;
    date: string;
}

export default function DateButton({
    show,
    onShow,
    date,
    ...props
}: DateButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);

    useClickAwayListener(ref, () => {
        onShow(false);
    });

    return (
        <>
            <button
                type="button"
                data-date={date}
                data-state={show}
                data-status={show ? 'open' : 'closed'}
                title={show ? 'Close Date Picker' : 'Open Date Picker'}
                role="button"
                onClick={() => onShow(!show)}
                // ref={ref}
                className="z-20 mt-1 h-8 w-full rounded border-none p-1 shadow-md ring-1 ring-gray-200 sm:m-0 sm:p-0 md:m-1 md:mx-2 md:w-1/6"
                {...props}
            >
                {date}
            </button>
        </>
    );
}
