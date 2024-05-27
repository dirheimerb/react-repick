import React, { useEffect, useRef, useState } from 'react';

interface ColorWheelProps {
    onSelectColor: (color: string) => void;
    // color: string;
}
export type ColorType = 'hex' | 'rgb';

const ColorWheel: React.FC<ColorWheelProps> = ({ onSelectColor }) => {
    const [color, setColor] = useState<string>('');
    const [hoverColor, setHoverColor] = useState<string>('');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (canvas && context) {
            const radius = canvas.width / 2;
            for (let angle = 0; angle <= 360; angle += 1) {
                const startAngle = (angle * Math.PI) / 180;
                const endAngle = ((angle + 1) * Math.PI) / 180;
                context.beginPath();
                context.moveTo(radius, radius);
                context.arc(
                    radius,
                    radius,
                    radius,
                    startAngle,
                    endAngle,
                    false,
                );
                context.closePath();
                context.fillStyle = `hsl(${angle}, 100%, 50%)`;
                context.fill();
            }
        }
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (canvas && context) {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const imageData = context.getImageData(x, y, 1, 1).data;
            const color = `rgb(${imageData[0]}, ${imageData[1]}, ${imageData[2]})`;
            setColor(color);
            onSelectColor(color);
        }
    };

    return (
        <canvas
            data-hover={hoverColor}
            ref={canvasRef}
            width="200"
            height="200"
            onClick={handleClick}
            className="cursor-pointer"
        />
    );
};

export default ColorWheel;
