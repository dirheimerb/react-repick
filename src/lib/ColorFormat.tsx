export interface ColorFormatOptions {
    label?: string;
    selectedFormat: string;
    onChange: (format: string) => void;
}

export type FormatOption = {
    id: string;
    type: string;
    label: string;
};

export default function ColorFormatSelect({
    label,
    selectedFormat,
    onChange,
}: ColorFormatOptions) {
    return (
        <div className="mb-4">
            <fieldset>
                <legend className="block text-sm font-medium text-gray-700">
                    {label}
                </legend>
                <div className="mt-6 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
                    <input
                        id="hex"
                        name="format"
                        type="radio"
                        value="hex"
                        defaultChecked={selectedFormat === 'hex'}
                        onChange={(e) => onChange(e.target.value)}
                        className="flex items-center rounded border-2 border-gray-300"
                    />
                    <label
                        htmlFor="hex"
                        className="block text-sm text-gray-900"
                    >
                        HEX
                    </label>
                    <input
                        id="rgb"
                        name="format"
                        type="radio"
                        value="rgb"
                        defaultChecked={selectedFormat === 'rgb'}
                        onChange={(e) => onChange(e.target.value)}
                        className="flex items-center rounded border-2 border-gray-300"
                    />
                    <label
                        htmlFor="rgb"
                        className="block text-sm text-gray-900"
                    >
                        RGB
                    </label>
                </div>
            </fieldset>
        </div>
    );
}
