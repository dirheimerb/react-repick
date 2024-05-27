import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    // darkMode: ['selector', '[data-mode="dark"]'],
    darkMode: 'class',
    theme: {
        extend: {
            width: {
                w10: '10%',
                w20: '20%',
                w30: '30%',
                w40: '40%',
                w50: '50%',
                w60: '60%',
                w70: '70%',
                w80: '80%',
                w90: '90%',
                w100: '100%',
            },
            boxShadow: {
                soft: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                hover: '0 0 20px rgba(255, 255, 255, 0.75)',
                deep: '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                glow: '-3px -1px 45px 9px rgba(255, 255, 255, 0.52)',
                double: '-5px 5px 10px #d0d0d0, 5px -5px 10px #f0f0f0',
            },
            sizing: {
                s0: 'width: 0px; height: 0px;',
                s1: 'width: 1px; height: 1px;',
                s2: 'width: 2px; height: 2px;',
                s3: 'width: 3px; height: 3px;',
                s4: 'width: 4px; height: 4px;',
            },
            borderRadius: {
                xl: '32px',
            },
            colors: {
                primary: '#5a67d8', // A soothing blue
                secondary: '#9f7aea', // A soft purple
                background: '#f7fafc', // Very light gray
                'text-color': '#2d3748', // Dark gray
                'cool-gray': '#e0e0e0',

                cloud: {
                    // Custom name for sky colors
                    DEFAULT: '#0ea5e9', // Example primary color, adjust as needed
                    light: '#e0f2fe',
                    dark: '#0284c7',
                },
                magic: {
                    // Custom name for purple colors
                    DEFAULT: '#a855f7', // Example primary color, adjust as needed
                    light: '#f3e8ff',
                    dark: '#6b21a8',
                },
                gunmetal: {
                    // Custom name for gray colors
                    light: '#f3f4f6', // Light variant
                    DEFAULT: '#d1d5db', // Middle ground, assumed as default
                    dark: '#111827', // Dark variant
                },
            },
            fontFamily: {
                sans: ['Roboto', 'sans-serif'], // primary font
                serif: ['Merriweather', 'serif'], // secondary font
                mono: ['ui-monospace', 'SFMono-Regular'], // monospace font
                display: ['Oswald', 'sans-serif'], // display font
                script: ['Dancing Script', 'cursive'], // script font
                marker: ['Permanent Marker', 'cursive'], // marker font
                decorative: ['Shadows Into Light', 'cursive'], // decorative font
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['dark'],
            textColor: ['dark'],
            borderColor: ['dark'],
            boxShadow: ['dark'],
        },
    },
    corePlugins: {
        aspectRatio: false,
    },

    plugins: [typography, forms],
};
export default config;
