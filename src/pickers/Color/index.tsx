'use client';
import React from 'react';
import CustomColorPicker, { ColorPickerProps } from './ColorPicker.js';
import { ColorMenu } from './Menu.js';

export interface ColorProps extends ColorPickerProps {
    onShow: (show: boolean) => void;
}
export default function ColorPicker({
    show,
    onShow,
    color,
    onColorChange,
}: ColorProps) {
    return (
        <>
            <ColorMenu
                show={show}
                onToggle={onShow}
                title={color || 'Select a Color'}
            />
            <CustomColorPicker
                show={show}
                color={color}
                onColorChange={onColorChange}
            />
        </>
    );
}
