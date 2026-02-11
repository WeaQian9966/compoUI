import { default as React } from 'react';

export interface KnobProps {
    value: number;
    min?: number;
    max?: number;
    step?: number;
    onChange: (value: number) => void;
    size?: number;
    label?: string;
    color?: string;
    sensitivity?: number;
    className?: string;
}
export declare const Knob: React.FC<KnobProps>;
