# React Pickers Library

A collection of reusable picker components including a Color Picker, Date Picker, Time Picker, and Date Range Picker. These components are built using React, TypeScript, and Tailwind CSS.

## Components

-   **[ColorPicker](#colorpicker)**: A custom color picker with predefined colors and a color wheel.
-   **[DatePicker](#datepicker)**: A date picker to select a single date.
-   **[TimePicker](#colorpicker)**: A time picker to select a time with AM/PM format.
-   **[DateRangePicker](#daterangepicker)**: A date range picker to select a start and end date.

## Installation

To install the Pickers library, add it to your project using npm or yarn:

```bash
npm install react-repick
# or
yarn add react-repick
# or
pnpm add react-repick
```

## Usage

### ColorPicker

The `ColorPicker` component allows users to select a color from a predefined set or a color wheel.

```tsx
import React, { useState } from 'react';
import { ColorPicker } from 'react-repick';

const App: React.FC = () => {
    const [color, setColor] = useState('#ff0000');
    const [showColorPicker, setShowColorPicker] = useState(false);

    return (
        <div>
            <button onClick={() => setShowColorPicker(!showColorPicker)}>
                Toggle Color Picker
            </button>
            <ColorPicker
                color={color}
                onColorChange={setColor}
                show={showColorPicker}
            />
        </div>
    );
};

export default App;
```

### DatePicker

The `DatePicker` component allows users to select a single date.

```tsx
import React, { useState } from 'react';
import { DatePicker } from 'react-repick';

const App: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    return (
        <div>
            <button onClick={() => setShowDatePicker(!showDatePicker)}>
                Toggle Date Picker
            </button>
            <DatePicker
                selectedDate={selectedDate}
                onChange={setSelectedDate}
                show={showDatePicker}
                setIsOpen={setShowDatePicker}
            />
        </div>
    );
};

export default App;
```

### TimePicker

The `TimePicker` component allows users to select a time with AM/PM format.

```tsx
import React, { useState } from 'react';
import { TimePicker } from 'react-repick';

const App: React.FC = () => {
    const [time, setTime] = useState('12:00 PM');
    const [showTimePicker, setShowTimePicker] = useState(false);

    return (
        <div>
            <button onClick={() => setShowTimePicker(!showTimePicker)}>
                Toggle Time Picker
            </button>
            <TimePicker value={time} onChange={setTime} />
        </div>
    );
};

export default App;
```

### DateRangePicker

The `DateRangePicker` component allows users to select a start and end date.

```tsx
import React, { useState } from 'react';
import { DateRangePicker } from 'react-repick';

const App: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [showDateRangePicker, setShowDateRangePicker] = useState(false);

    const handleDateChange = (start: Date | null, end: Date | null) => {
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <div>
            <button
                onClick={() => setShowDateRangePicker(!showDateRangePicker)}
            >
                Toggle Date Range Picker
            </button>
            <DateRangePicker
                startDate={startDate}
                endDate={endDate}
                onChange={handleDateChange}
                show={showDateRangePicker}
                onShow={setShowDateRangePicker}
                selectedStartDate={startDate}
                selectedEndDate={endDate}
            />
        </div>
    );
};

export default App;
```

### ColorPicker Props

Props:

-   `color`: The current selected color.
-   `onColorChange`: Callback function to handle color change.
-   `show`: Boolean to show or hide the color picker.

### DatePicker Props

Props:

-   `selectedDate`: The currently selected date.
-   `onChange`: Callback function to handle date change.
-   `show`: Boolean to show or hide the date picker.
-   `setIsOpen`: Callback function to set the visibility of the date picker.

## TimePicker Props

Props:

-   `value`: The currently selected time.
-   `onChange`: Callback function to handle time change.

## DateRangePicker Props

Props:

-   `startDate`: The currently selected start date.
-   `endDate`: The currently selected end date.
-   `onChange`: Callback function to handle date range change.
-   `show`: Boolean to show or hide the date range picker.
-   `onShow`: Callback function to set the visibility of the date range picker.
-   `selectedStartDate`: The selected start date.
-   `selectedEndDate`: The selected end date.

## License

MIT License
