import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import ColorWheel, { ColorType } from '../../lib/ColorWheel';
import ColorButton from '../../lib/ColorButton';
import ColorFormatSelect from '../../lib/ColorFormat';
import { hexToRgb, rgbToHex, toHex } from '../../lib/colorUtils';

export interface ColorPickerProps {
    color: string;
    onColorChange: (color: string) => void;
    show: boolean;
}
// type FormatOption = 'hex' | 'rgb' | string;

const CustomColorPicker: React.FC<ColorPickerProps> = ({
    show,
    color,
    onColorChange,
}) => {
    const [customColor, setCustomColor] = useState<string>(color);
    // const [colorFormat, setColorFormat] = useState<FormatOption>('hex');
    const [colorFormatValues, setColorFormatValues] = useState({
        hex: '',
        rgb: '',
        value: '',
    });

    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    useEffect(() => {
        const colorValue = inputRef.current;
        if (colorValue) {
            const updatedValue = colorValue.value;
            console.log('Updated Color Value', updatedValue);
            setColorFormatValues({
                hex: toHex(updatedValue) || '',
                rgb: hexToRgb(colorFormatValues.hex) || '',
                value: updatedValue,
            });
        }
    }, [colorFormatValues.hex, customColor]);

    const handleColorChange = (newColor: string) => {
        setCustomColor(newColor);
        onColorChange(newColor);
    };

    const predefinedColors = [
        '#ff0000',
        '#00ff00',
        '#0000ff',
        '#ffff00',
        '#ff00ff',
        '#00ffff',
        '#ffffff',
        '#000000',
        '#888888',
        '#ff8800',
        '#8800ff',
        '#00ff88',
    ];

    return (
        show && (
            <div className="fixed m-2 flex justify-center rounded border bg-white p-2 z-30">
                {/* <div className="absolute top-0 left-0 w-full h-screen bg-gray-100 opacity-50 z-10" /> */}
                <div className="bg-white">
                    {/* <ColorFormatSelect selectedFormat={colorFormat} onChange={handleFormatChange} /> */}

                    <div className="relative z-20 mt-2 flex items-center mb-2">
                        <input
                            type="text"
                            name="color"
                            id="color"
                            value={customColor}
                            onChange={(e) => handleColorChange(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Selected Color"
                            ref={inputRef}
                            data-color={customColor}
                        />
                        <div className="absolute inset-y-0 right-0 flex py-2 pr-1.5">
                            <svg
                                className="h-5 w-5 text-gray-400"
                                fill={customColor}
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                        </div>
                    </div>
                    <div className="m-1 rounded border p-2">
                        <div className="z-20 grid grid-flow-row grid-cols-4 gap-1">
                            {predefinedColors.map((color) => (
                                <ColorButton
                                    color={color}
                                    key={color}
                                    style={{ backgroundColor: color }}
                                    className={clsx(
                                        `z-20 m-1 h-8 w-8 rounded border border-gray-300`,
                                    )}
                                    onClick={() => handleColorChange(color)}
                                    ref={buttonRef}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="relative z-30 ">
                        <ColorWheel onSelectColor={handleColorChange} />
                    </div>
                </div>
            </div>
        )
    );
};

export default CustomColorPicker;
