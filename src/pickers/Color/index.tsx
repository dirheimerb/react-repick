import CustomColorPicker, { ColorPickerProps } from './ColorPicker';
import { ColorMenu } from './Menu';

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
