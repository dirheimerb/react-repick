import React, { forwardRef } from 'react';

export interface ColorButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color: string;
    buttonType?: 'button' | 'submit' | 'reset' | undefined;
}

const ColorButton = forwardRef<HTMLButtonElement, ColorButtonProps>(
    function ColorButton(
        { color, buttonType, ...props }: ColorButtonProps,
        ref,
    ) {
        return (
            <button
                className="z-20 m-1 h-8 w-8 rounded border border-gray-300"
                type={buttonType}
                {...props}
                style={{ backgroundColor: color }}
                ref={ref}
            />
        );
    },
);

export default ColorButton;
