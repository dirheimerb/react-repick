import React, { useState } from 'react';

export interface MenuProps {
    show: boolean;
    onToggle: (show: boolean) => void;
    title: string;
}

export function ColorMenu({ show, onToggle, title }: MenuProps) {
    const [toggleShow, setToggleShow] = useState<boolean>(show);

    const handleToggle = (show: boolean) => {
        setToggleShow(show);
        onToggle(show);
    };

    return (
        <button
            type="button"
            data-color={title}
            className="z-20 h-8 w-full rounded border-none p-1 shadow-md ring-1 ring-gray-200 md:m-1 md:mx-2 md:w-1/4"
            onClick={() => handleToggle(!toggleShow)}
            title={title}
            data-status={toggleShow ? 'open' : 'closed'}
            data-state={toggleShow ? 'open' : 'closed'}
            data-open={toggleShow}
        >
            {title}
        </button>
    );
}
