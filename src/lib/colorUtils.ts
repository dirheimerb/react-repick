// src/colorUtils.ts

export const hexToRgb = (hex: string): string | null => {
    // Remove the leading '#' if present
    hex = hex.replace(/^#/, '');

    // Convert 3-digit hex to 6-digit hex
    if (hex.length === 3) {
        hex = hex
            .split('')
            .map((char) => char + char)
            .join('');
    }

    // Check if the hex code is valid
    if (hex.length !== 6) {
        return null;
    }

    // Extract the red, green, and blue values
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `${r}, ${g}, ${b}`;
};

export const rgbToHex = (rgb: string): string | null => {
    const result = rgb.match(/^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/);

    if (!result) {
        return null;
    }

    const r = parseInt(result[1], 10);
    const g = parseInt(result[2], 10);
    const b = parseInt(result[3], 10);

    // Ensure each value is within the range [0, 255]
    if (r > 255 || g > 255 || b > 255) {
        return null;
    }

    // Convert RGB to HEX
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
};

export const toHex = (rgb: string): string | null => {
    // rgb(255, 255, 255)
    const result = rgb.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/);

    if (!result) {
        return null;
    }

    const r = parseInt(result[1], 10);
    const g = parseInt(result[2], 10);
    const b = parseInt(result[3], 10);

    // Ensure each value is within the range [0, 255]
    if (r > 255 || g > 255 || b > 255) {
        return null;
    }

    // Convert RGB to HEX
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
};
